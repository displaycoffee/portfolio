/* Styles */
import './styles/icons.scss';

/* Scripts */
import type { IconsProps } from './scripts/icons-types';

export const Icon = (props: IconsProps) => {
	const { animate, isBold, name, size } = props;
	const shadowSize = typeof props?.shadowSize == 'string' ? props.shadowSize : 'x1';
	const iconClass = 'icon';

	// Create icon classes
	const iconClasses = [`icon`, `icon-${name}`];
	if (isBold) iconClasses.push(`${iconClass}-bold`);
	if (size) iconClasses.push(`${iconClass}-${size}`);
	if (shadowSize != 'none') iconClasses.push(`${iconClass}-shadow-${shadowSize}`);
	if (animate) iconClasses.push(`animate-${animate}`);

	return (
		<span className={iconClasses.join(' ')} aria-hidden="true">
			{name == 'filter' ? <span></span> : null}
		</span>
	);
};
