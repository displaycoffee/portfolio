/* React */
import { MouseEvent, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link, Navigate, useLocation, useSearchParams } from 'react-router-dom';

/* Local styles */
import './styles/contents.scss';

/* Local scripts */
import { useViewTransition } from '../../_config/scripts/hooks';
import { useAppContext } from '../../context/scripts/context-hooks';
import {
	ContentsBodyProps,
	ContentsDateProps,
	ContentsLinksProps,
	ContentsProps,
	ContentsTagsProps,
	ContentsTagsType,
	ContentsTagType,
} from './scripts/contents-types';
import { contents as contentsUtils } from './scripts/contents';

/* Local components */
import { Image } from '../image/Image';
import { Button, HeaderIcon, PixelSection } from '../blocks/Blocks';

export const Contents = (props: ContentsProps) => {
	const { children, navigation, type, values } = props;
	const location = useLocation();
	const hasContents = values && values.length !== 0;

	// Create contentsProps for components
	const contentsProps = {
		location: location.pathname,
		navigation: {
			back: navigation?.back ? navigation.back : false,
		},
		values: hasContents ? values : [],
	};

	// Create modified contents
	contentsProps.values = contentsUtils.build(contentsProps.values);

	// Get contents count
	const contentsCount = contentsProps.values.length;

	return contentsCount !== 0 ? (
		type == 'links' ? (
			<ContentsLinks {...contentsProps} />
		) : (
			<ContentsBody {...contentsProps}>{children}</ContentsBody>
		)
	) : null;
};

export const ContentsLinks = (props: ContentsLinksProps) => {
	const { location, values } = props;
	const { utils } = useAppContext();
	const searchParams = contentsUtils.params.get();
	const tagParam = contentsUtils.params.url.tag;
	const handleTransition = useViewTransition();
	const [tags, setTags] = useState<ContentsTagsType>({} as ContentsTagsType);
	const [tagParams, setTagParams] = useSearchParams();

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
					const isActive = searchParams?.includes(param);
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
	}, [tags]);

	// Function to transition tags
	const transitionTags = (tags: ContentsTagsType) => {
		if (!document.startViewTransition) {
			setTags(tags);
			return false;
		} else {
			// Set transition names on all currently visible content items (old state)
			const oldItems = document.querySelectorAll<HTMLElement>('[data-vt-id]');
			oldItems.forEach((el) => {
				el.style.viewTransitionName = `content-item-${el.dataset.vtId}`;
			});

			// Flag root so CSS can scope rules to content tag switches only
			document.documentElement.setAttribute('data-content-transition', '');

			void document
				.startViewTransition(() => {
					flushSync(() => setTags(tags));

					// After React renders, name any newly visible items (new state)
					document.querySelectorAll<HTMLElement>('[data-vt-id]').forEach((el) => {
						if (!el.style.viewTransitionName) {
							el.style.viewTransitionName = `content-item-${el.dataset.vtId}`;
						}
					});
				})
				.finished.finally(() => {
					document.querySelectorAll<HTMLElement>('[data-vt-id]').forEach((el) => {
						el.style.viewTransitionName = '';
					});
					document.documentElement.removeAttribute('data-content-transition');
				});
		}
	};

	// Click functionality for applying tags
	const handleTag = (e: EventsType, tag: ContentsTagType) => {
		e.preventDefault();

		// Set new tags
		let newTags = tags;

		if (tags[tag.value].active) {
			// Remove filter parameters from url and set active state
			contentsUtils.params.remove(String(tagParams), tagParam, tag.value, setTagParams);
			newTags = {
				...tags,
				[tag.value]: {
					...tag,
					active: false,
				},
			};
		} else {
			// Add filter parameters to url and set active state
			contentsUtils.params.add(String(tagParams), tagParam, tag.value, setTagParams);
			newTags = {
				...tags,
				[tag.value]: {
					...tag,
					active: true,
				},
			};
		}

		// Perform tag transitions and update url with new tags
		transitionTags(newTags);
	};

	// Click functionality for clear
	const handleClear = (e: EventsType) => {
		e.preventDefault();

		// Remove all tag params
		contentsUtils.params.clear(String(tagParams), tagParam, setTagParams);

		// Set all tags to inactive
		Object.keys(tags).forEach((tag) => {
			if (tags[tag].active) {
				tags[tag].active = false;
			}
		});

		// Perform tag transitions and update tags when clear all is clicked
		transitionTags(tags);
	};

	return (
		<div className="contents">
			{searchParams ? (
				<div className="contents-clear">
					<Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleClear(e)}>Clear tags</Button>
				</div>
			) : null}

			<div className="contents-row row row-wrap row-spacing-20">
				{values.map((value) => {
					const tagsConfig = contentsUtils.tags(value?.tags as string);

					// Check if any tags are active to display certain content
					const findActive = tagsConfig.hasTags ? tagsConfig.values.filter((tag) => tags[tag.value].active) : [];
					const contentActive = !searchParams || (findActive && findActive.length !== 0);

					// Get params to add to url and save selection
					const linkParams = [] as string[];
					let linkParamsString = '';

					if (tagsConfig.hasTags) {
						// Add params for active values
						tagsConfig.values.forEach((tag) => {
							if (tags[tag.value].active) {
								linkParams.push(`tag=${tag.value}`);
							}
						});

						// Set params string
						linkParamsString = `?${linkParams.join('&')}`;
					}

					// Set content url
					const contentUrl = `${location}/${value.handle}${linkParamsString}`;

					return contentActive ? (
						<div className="contents-column column column-width-33" key={value.id} data-vt-id={value.id}>
							<Link className="contents-link" to={contentUrl} onClick={(e) => handleTransition(e, contentUrl)}>
								<div className="pixel-border">
									<Image
										alt={value.name}
										hasLazy={true}
										image={value.thumb}
										wrapperClass={'image-wrapper image-wrapper-fluid image-wrapper-fit'}
									/>
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
													onClick={(e: MouseEvent<HTMLButtonElement>) => handleTag(e, tag)}
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
	const { children, location, navigation, values } = props;
	const { utils } = useAppContext();
	const searchParams = useLocation().search || '';
	const handleTransition = useViewTransition();
	const showContents = window.location.href.includes(location); // Do not render current item if not in matching contents
	const elements = contentsUtils.navigation(values, location);
	const { current, next, previous } = elements;
	const parentPage = utils.getPage();

	// Ensure handles do not match current
	const compareHandle = (handle: string) => {
		return handle == current.handle ? { handle: false } : { handle: handle };
	};

	// Build navigation props
	const navigationProps = {
		back: navigation.back,
		next: compareHandle(next.handle as string),
		params: searchParams,
		path: parentPage,
		previous: compareHandle(previous.handle as string),
	};

	// Get tags
	const tagsConfig = contentsUtils.tags(current?.tags as string);

	// Check if we have a header
	const hasHeader = current?.name || current?.date || current?.updated || tagsConfig.hasTags;

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
									// Set active state for tag
									tag.active = searchParams?.includes(tag.value);

									return (
										<div className="contents-tags-column" key={index}>
											<Button
												type={tag.active ? 'secondary active' : 'primary'}
												size={'x-small'}
												onClick={(e: MouseEvent<HTMLButtonElement>) => {
													// Set up current param
													const currentParam = `${contentsUtils.params.url.tag}=${tag.value}`;

													// Create url
													let tagUrl = `${parentPage}?${currentParam}`;

													// If current tag is not in search params, add it
													if (searchParams) {
														const newParams = !searchParams.includes(currentParam)
															? `${searchParams}&${currentParam}`
															: searchParams;
														tagUrl = `${parentPage}${newParams}`;
													}

													// Go back to content back with param
													handleTransition(e, tagUrl);
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
						<h3>Description</h3>

						<p>{current.description}</p>

						{current?.description2 ? <p>{current.description2}</p> : null}
					</div>
				) : null}

				<div className="contents-body spacing-reset">{children}</div>

				<PixelSection navigation={navigationProps} />
			</div>
		) : (
			<Navigate to={parentPage} replace />
		)
	) : null;
};

export const ContentsDate = (props: ContentsDateProps) => {
	const { content } = props;

	// Check dates
	const hasDate = content?.date;
	const hasUpdated = content?.updated;

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
