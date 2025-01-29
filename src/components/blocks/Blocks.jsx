/* Local styles */
import './styles/blocks.scss';

export const HeaderIcon = (props) => {
	const { tag, className } = props;
	const Tag = tag ? tag : 'h3'; // This will define the element / tag to be used
	const headerClass = className ? `${className} ` : '';

	return (
		<Tag className={`${headerClass}h-icon`}>
			<span className="icon icon-angle-right icon-bold icon-shadow-x2"></span>
			{props.children}
		</Tag>
	);
};

export const Button = (props) => {
	let { type, className, onClick } = props;
	type = typeof type == 'undefined' ? 'primary' : type;
	const buttonClass = className ? `${className} ` : '';

	return (
		<button className={`${buttonClass}button button-${type}`} onClick={() => onClick()}>
			<span>{props.children}</span>
		</button>
	);
};

export const PixelSection = (props) => {
	let { className } = props;
	const pixelClass = className ? `${className} ` : '';

	return (
		<section className={`${pixelClass}pixel-section`}>
			<div className="pixel-border-rounded"></div>

			<div className="pixel-section-wrapper">{props.children}</div>
		</section>
	);
};
