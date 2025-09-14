/* React */
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useParams, useSearchParams } from 'react-router-dom';

/* Local styles */
import './styles/contents.scss';

/* Local scripts */
import {
	ContentsBodyProps,
	ContentsDateProps,
	ContentsLinksProps,
	ContentsProps,
	ContentsRoutesProps,
	ContentsTagsProps,
	ContentsTagsType,
	ContentsTagType,
} from './scripts/contents-types';
import { contents as contentsUtils } from './scripts/contents';

/* Local components */
import { Context } from '../../context/Context';
import { Button, HeaderIcon, PixelSection } from '../blocks/Blocks';

export const Contents = (props: ContentsProps) => {
	const { options } = props;
	const hasContents = options && options?.path && options.values && options.values.length !== 0 ? true : false;

	return hasContents ? <ContentsRoutes options={options} /> : null;
};

export const ContentsRoutes = (props: ContentsRoutesProps) => {
	const { options } = props;
	const { navigation, path, values } = options;

	// Create contentsProps for components
	const contentsProps = {
		navigation: {
			back: navigation?.back ? navigation.back : false,
		},
		path: path,
		values: values,
	};

	// Create modified contents
	contentsProps.values = contentsUtils.build(contentsProps.values);

	// Get contents count
	const contentsCount = contentsProps.values.length;

	return contentsCount !== 0 ? (
		<Routes>
			<Route path="/" element={<ContentsLinks {...contentsProps} />} />

			{contentsProps.values.map((content) => {
				return <Route path=":id" element={<ContentsBody {...contentsProps} />} key={content.id} />;
			})}
		</Routes>
	) : null;
	return null;
};

export const ContentsLinks = (props: ContentsLinksProps) => {
	const { path, values } = props;
	const context = useContext(Context);
	const utils = context.utils;
	const searchParams = contentsUtils.params.get();
	const tagParam = contentsUtils.params.url.tag;
	let [tags, setTags] = useState<ContentsTagsType>({} as ContentsTagsType);
	let [tagParams, setTagParams] = useSearchParams();

	// Create tags from content values
	values.forEach((value) => {
		const tagsConfig = contentsUtils.tags(value?.tags as string);

		// Set timestamp to sort values
		utils.setTimestamp(value);

		if (tagsConfig.hasTags) {
			tagsConfig.values.forEach((tag) => {
				// Check if tag is in searchParams
				if (!tags[tag.value]) {
					const param = `${tagParam}=${tag.value}`;
					const isActive = searchParams && searchParams.includes(param) ? true : false;
					tags[tag.value] = {
						...tag,
						active: isActive,
					};
				}
			});
		}
	});

	// Sort values by newest
	values.sort((a, b) => {
		return (b.timestamp as number) - (a.timestamp as number);
	});

	// Once tags are built, set tags
	useEffect(() => {
		setTags(tags);
	}, []);

	// Click functionality for applying tabs
	const handleTag = (e: EventType, tag: ContentsTagType) => {
		e.preventDefault();

		if (tags[tag.value].active) {
			// Remove filter parameters from url and set active state
			contentsUtils.params.remove(String(tagParams), tagParam, tag.value, setTagParams);
			tags[tag.value].active = false;
		} else {
			// Add filter parameters to url and set active state
			contentsUtils.params.add(String(tagParams), tagParam, tag.value, setTagParams);
			tags[tag.value].active = true;
		}

		// Update tags when values are clicked
		setTags(tags);
	};

	// Click functionality for clear
	const handleClear = (e: EventType) => {
		e.preventDefault();

		// Remove all tag params
		contentsUtils.params.clear(String(tagParams), tagParam, setTagParams);

		// Set all tags to inactive
		Object.keys(tags).forEach((tag) => {
			if (tags[tag].active) {
				tags[tag].active = false;
			}
		});

		// Update tags when clear all is clicked
		setTags(tags);
	};

	return (
		<div className="contents">
			{searchParams ? (
				<div className="contents-clear">
					<Button onClick={(e) => handleClear(e)}>Clear tags</Button>
				</div>
			) : null}

			<div className="contents-row row row-wrap row-spacing-20">
				{values.map((value) => {
					const tagsConfig = contentsUtils.tags(value?.tags as string);

					// Check if any tags are active to display certain content
					const findActive = tagsConfig.hasTags ? tagsConfig.values.filter((tag) => tags[tag.value].active) : [];
					const contentActive = !searchParams || (findActive && findActive.length !== 0) ? true : false;

					return contentActive ? (
						<div className="contents-column column column-width-33" key={value.id}>
							<Link className="contents-link" to={`${path}/${value.handle}`}>
								<div className="pixel-border">
									<div className="image-wrapper image-wrapper-fit">
										<img src={value.thumb} alt={value.name} title={value.name} loading="lazy" />
									</div>
								</div>

								<p className="contents-name">
									<span>{value.name}</span>
								</p>
							</Link>

							<ContentsDate content={value} />

							<p className="contents-description">{value.description}</p>

							{tagsConfig.hasTags ? (
								<ContentsTags>
									{tagsConfig.values.map((tag, index) => {
										// Set active state for tag
										tag.active = tags[tag.value].active;

										return (
											<div className="contents-tags-column" key={index}>
												<Button
													type={tag.active ? 'secondary active' : 'primary'}
													size={'x-small'}
													onClick={(e) => handleTag(e, tag)}
												>
													{tag.label}
												</Button>
											</div>
										);
									})}
								</ContentsTags>
							) : null}
						</div>
					) : null;
				})}
			</div>
		</div>
	);
};

export const ContentsBody = (props: ContentsBodyProps) => {
	const { navigation, path, values } = props;
	const { id } = useParams();
	const showContents = window.location.href.includes(`${path}/${id}`) ? true : false; // Do not render current item if not in matching contents
	const elements = contentsUtils.navigation(values, id as string);
	const { current, next, previous } = elements;

	// Ensure handles do not match current
	const compareHandle = (handle: string) => {
		return handle == current.handle ? { handle: false } : { handle: handle };
	};

	// Build navigation props
	const navigationProps = {
		back: navigation.back,
		next: compareHandle(next.handle as string),
		path: path,
		previous: compareHandle(previous.handle as string),
	};

	// Get tags
	const tagsConfig = contentsUtils.tags(current?.tags as string);

	// Check if we have a header
	const hasHeader = current?.name || current?.date || current?.updated || tagsConfig.hasTags ? true : false;

	// Set component for body
	const Body = current.component;

	return showContents ? (
		current ? (
			<div id={`contents-${current.handle}`} className="contents spacing-reset">
				{hasHeader ? (
					<header className="contents-header">
						{current?.name ? <HeaderIcon className="contents-header-title">{current.name}</HeaderIcon> : null}

						<ContentsDate content={current} />

						{tagsConfig.hasTags ? (
							<ContentsTags>
								{tagsConfig.values.map((tag, index) => {
									return (
										<div className="contents-tags-column" key={index}>
											<Button
												size={'x-small'}
												onClick={() => {
													window.location.href = `${path}?${contentsUtils.params.url.tag}=${tag.value}`;
												}}
											>
												{tag.label}
											</Button>
										</div>
									);
								})}
							</ContentsTags>
						) : null}
					</header>
				) : null}

				{current?.description ? (
					<div className="contents-description spacing-reset">
						<h4>Description</h4>

						<p>{current.description}</p>

						{current?.description2 ? <p>{current.description2}</p> : null}
					</div>
				) : null}

				<div className="contents-body spacing-reset">
					<Body />
				</div>

				<PixelSection navigation={navigationProps} />
			</div>
		) : (
			<Navigate to={path} replace />
		)
	) : null;
};

export const ContentsDate = (props: ContentsDateProps) => {
	const { content } = props;

	// Check dates
	const hasDate = content?.date ? true : false;
	const hasUpdated = content?.updated ? true : false;

	return hasDate || hasUpdated ? (
		<p className="contents-date">
			{hasDate ? `Posted ${content.date}` : ``}
			{hasDate && hasUpdated ? ` - ` : ``}
			{hasUpdated ? `Updated ${content.updated}` : ``}
		</p>
	) : null;
};

export const ContentsTags = (props: ContentsTagsProps) => {
	const { children } = props;

	return (
		<div className="contents-tags">
			<div className="contents-tags-row flex-wrap flex-align-content-center">{children}</div>
		</div>
	);
};
