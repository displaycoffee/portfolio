/* Local styles */
import './styles/blocks.scss';

export const HeaderIcon = (props) => {
	const { tag, className } = props;
	const Tag = tag ? tag : 'h3'; // This will define the element / tag to be used

	return (
		<Tag className={`h-icon${className ? ' ' + className : ''}`}>
			<span className="icon icon-angle-right icon-bold icon-shadow-x2"></span>
			{props.children}
		</Tag>
	);
};
