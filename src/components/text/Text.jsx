export const HeaderIcon = (props) => {
	const { tag, className } = props;
	const Tag = tag ? tag : 'h4'; // This will define the element / tag to be used

	return (
		<Tag className={className ? className : undefined}>
			<span className="icon icon-angle-right icon-bold icon-shadow-x2"></span>
			{props.children}
		</Tag>
	);
};
