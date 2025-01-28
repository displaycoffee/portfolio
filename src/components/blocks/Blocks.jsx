/* Local styles */
import './styles/blocks.scss';

export const HeaderIcon = (props) => {
	const { tag, className } = props;
	const Tag = tag ? tag : 'h3'; // This will define the element / tag to be used
	const headerClass = className ? ` ${className}` : '';

	return (
		<Tag className={`h-icon${headerClass}`}>
			<span className="icon icon-angle-right icon-bold icon-shadow-x2"></span>
			{props.children}
		</Tag>
	);
};

export const Button = (props) => {
	let { type, className, onClick } = props;
	type = typeof type == 'undefined' ? 'primary' : type;
	const buttonClass = className ? ` ${className}` : '';

	return (
		<button className={`button button-${type}${buttonClass}`} onClick={() => onClick()}>
			<span>{props.children}</span>
		</button>
	);
};
