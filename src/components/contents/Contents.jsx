/* React */
import { useEffect, useState } from 'react';
import { Link, Routes, Route, useParams, Navigate, useSearchParams } from 'react-router-dom';

/* Local styles */
import './styles/contents.scss';

/* Local scripts */
import { contents as contentsUtils } from './scripts/contents';

/* Local components */
import { HeaderIcon, PixelSection, Button } from '../blocks/Blocks';

export const Contents = (props) => {
	const { contents, options } = props;
	const hasContents = options && contents && contents.length !== 0 && options.path ? true : false;

	return hasContents ? <ContentsRoutes contents={contents} options={options} /> : null;
};

export const ContentsRoutes = (props) => {
	const { contents, options } = props;

	// Ensure navigation is set
	if (!options.navigation) {
		options.navigation = {};
	}

	// Create modified contents
	const modifiedContents = contentsUtils.build(contents);

	// Get contents count
	const contentsCount = modifiedContents.length;

	// Pass down contents props
	const contentsProps = {
		path: options.path,
		navigation: options.navigation,
		contents: {
			values: contents,
		},
	};

	return contentsCount !== 0 ? (
		<Routes>
			<Route path="/" element={<ContentsLinks {...contentsProps} />} />

			{modifiedContents.map((content) => {
				return <Route path=":id" element={<ContentsBody {...contentsProps} />} key={content.id} />;
			})}
		</Routes>
	) : null;
};

export const ContentsLinks = (props) => {
	const { path, contents } = props;
	const searchParams = contentsUtils.params.get();
	const tagParam = contentsUtils.params.url.tag;
	let [tags, setTags] = useState({});
	let [tagParams, setTagParams] = useSearchParams();

	// Create tags from content values
	contents.values.forEach((value) => {
		const tagsConfig = contentsUtils.tags(value?.tags);

		if (tagsConfig.hasTags) {
			tagsConfig.values.forEach((tag) => {
				const tagLower = tag.toLowerCase();

				// Check if tag is in searchParams
				if (!tags[tagLower]) {
					const param = `${tagParam}=${tagLower}`;
					const isActive = searchParams && searchParams.includes(param) ? true : false;
					tags[tagLower] = {
						label: tag,
						value: tagLower,
						active: isActive,
					};
				}
			});
		}
	});

	// Once tags are built, set tags
	useEffect(() => {
		setTags(tags);
	}, []);

	// Click functionality for applying tabs
	const handleTag = (e, tag) => {
		e.preventDefault();

		if (tag.active) {
			// Remove filter parameters from url and set active state
			contentsUtils.params.remove(tagParams, tagParam, tag.value, setTagParams);
			tag.active = false;
		} else {
			// Add filter parameters to url and set active state
			contentsUtils.params.add(tagParams, tagParam, tag.value, setTagParams);
			tag.active = true;
		}

		// Update tags when values are clicked
		setTags(tags);
	};

	// Click functionality for clear
	const handleClear = (e) => {
		e.preventDefault();

		// Remove all tag params
		contentsUtils.params.clear(tagParams, tagParam, setTagParams);

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
			{searchParams ? <Button onClick={(e) => handleClear(e)}>Clear all</Button> : null}

			<div className="contents-row">
				{contents.values.map((value) => {
					const tagsConfig = contentsUtils.tags(value?.tags);

					// Check if any tags are active to display certain content
					const findActive = tagsConfig.hasTags ? tagsConfig.values.filter((tag) => tags[tag.toLowerCase()].active) : [];
					const contentActive = !searchParams || (findActive && findActive.length !== 0) ? true : false;

					// Check dates
					const hasDate = value?.date ? true : false;
					const hasUpdated = value?.updated ? true : false;

					return contentActive ? (
						<div className="contents-column" key={value.id}>
							<div className="contents-details">
								<Link className="contents-link" to={`${path}/${value.handle}`}>
									<div className="contents-image">
										<img src={value.thumb} alt={value.name} title={value.name} loading="lazy" />
									</div>
									<div className="contents-name">{value.name}</div>
								</Link>

								{hasDate || hasUpdated ? (
									<div className="contents-date">
										{hasDate ? `Posted ${value.date}` : ``}
										{hasDate && hasUpdated ? ` - ` : ``}
										{hasUpdated ? `Updated ${value.updated}` : ``}
									</div>
								) : null}
							</div>

							{tagsConfig.hasTags ? (
								<div className="contents-tags">
									{tagsConfig.values.map((tag, index) => {
										const tagLower = tag.toLowerCase();
										const tagConfig = tags[tagLower];

										return (
											<Button
												type={tagConfig.active ? 'secondary' : 'primary'}
												size={'x-small'}
												onClick={(e) => handleTag(e, tagConfig)}
												key={index}
											>
												{tag}
											</Button>
										);
									})}
								</div>
							) : null}
						</div>
					) : null;
				})}
			</div>
		</div>
	);
};

export const ContentsBody = (props) => {
	const { path, contents, navigation } = props;
	const { id } = useParams();
	const showContents = window.location.href.includes(`${path}/${id}`) ? true : false; // Do not render current item if not in matching contents
	const elements = contentsUtils.get.navigation(contents.values, id);
	const current = elements?.current ? elements.current : false;

	// Build navigation props
	const navigationProps = {
		path: path,
		previous: elements?.previous ? elements.previous : false,
		next: elements?.next ? elements.next : false,
		back: navigation?.back ? navigation.back : false,
	};

	// Check dates
	const hasDate = current?.date ? true : false;
	const hasUpdated = current?.updated ? true : false;

	// Check if we have a header
	const hasHeader = current?.name || hasDate || hasUpdated ? true : false;

	// Set component for body
	const Body = current.component;

	return showContents ? (
		current ? (
			<div id={`contents-${current.handle}`} className="contents spacing-reset">
				{hasHeader ? (
					<header className="contents-header">
						{current?.name ? <HeaderIcon className="contents-header-title">{current.name}</HeaderIcon> : null}

						{hasDate || hasUpdated ? (
							<p className="contents-header-date">
								{hasDate ? `Posted ${current.date}` : ``}
								{hasDate && hasUpdated ? ` - ` : ``}
								{hasUpdated ? `Updated ${current.updated}` : ``}
							</p>
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
