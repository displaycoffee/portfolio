/* React */
import { Link, Routes, Route, useParams, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/contents.scss';

/* Local scripts */
import { contents as contentsUtils } from './scripts/contents';

/* Local components */
import { PixelSection } from '../blocks/Blocks';

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

	return (
		<div className="contents">
			<ul className="contents-list">
				{contents.values.map((value) => (
					<li className="contents-list-item" key={value.id}>
						<Link className="contents-list-link" to={`${path}/${value.handle}`}>
							{value.name}
						</Link>
					</li>
				))}
			</ul>
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

	// Set component for body
	const Body = current.component;

	return showContents ? (
		current ? (
			<div id={`contents-${current.handle}`} className="contents spacing-reset">
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
