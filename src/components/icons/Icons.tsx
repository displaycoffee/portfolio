/* Local styles */
import './styles/icons.scss';

/* Local scripts */
import { IconsProps } from './scripts/icons-types';

export const Icon = (props: IconsProps) => {
	const { animate, id, isBold, size } = props;
	const shadowSize = typeof props?.shadowSize == 'string' ? props.shadowSize : 'x1';
	const iconClass = 'icon';

	// Create icon classes
	const iconClasses = [`icon`, `icon-${id}`];
	if (isBold) {
		iconClasses.push(`${iconClass}-bold`);
	}
	if (size) {
		iconClasses.push(`${iconClass}-${size}`);
	}
	if (shadowSize != 'none') {
		iconClasses.push(`${iconClass}-shadow-${shadowSize}`);
	}
	if (animate) {
		iconClasses.push(`animate-${animate}`);
	}

	return <span className={iconClasses.join(' ')}>{id == 'filter' ? <span></span> : null}</span>;
};
