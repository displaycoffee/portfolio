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
				const body = <ContentsBody {...contentsProps}>{content.component}</ContentsBody>;
				return <Route path=":id" element={body} key={content.id} />;
			})}
		</Routes>
	) : null;
};

export const ContentsLinks = (props) => {
	const { path, contents } = props;

	return (
		<ul className="contents-list">
			{contents.values.map((value) => (
				<li className="contents-list-item" key={value.id}>
					<Link className="contents-list-link" to={`${path}/${value.handle}`}>
						{value.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export const ContentsBody = (props) => {
	const { path, contents, navigation, children } = props;
	const { id } = useParams();
	const Body = children;
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

	return showContents ? (
		current ? (
			<>
				<Body />

				<PixelSection navigation={navigationProps} />
			</>
		) : (
			<Navigate to={path} replace />
		)
	) : null;
};
