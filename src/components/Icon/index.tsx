import { Suspense, lazy, memo } from 'react';
import css from 'classnames';

import type { IconSize, IconType } from './types';
import styles from './icon.module.css';

export type IconProps = {
	className?: string;
	iconClassName?: string;
	size?: IconSize;
	type: IconType;
};

// eslint-disable-next-line no-type-assertion/no-type-assertion
// const dynamicIcon = (type: IconType) => lazy(() => import(`./files/${type}.svg`)) as React.FC<React.SVGProps<SVGSVGElement>>;

const dynamicIcon = (type: IconType) => lazy(async () => await import(`./files/${type}.svg`));

const Icon: React.FC<IconProps> = ({ type, size = 24, className, iconClassName, ...props }) => {
	const Component = dynamicIcon(type);

	const width = size;
	const height = size;
	const fontSize = size;

	return (
		<div className={css(styles.container, className)} style={{ width, height }}>
			<Suspense fallback={<div />}>
				<Component
					style={{ fontSize }}
					className={css(styles.icon, iconClassName)}
					{...props}
				/>
			</Suspense>
		</div>
	);
};

function isEqualProps(previous: IconProps, next: IconProps): boolean {
	const type = previous.type === next.type;
	const size = previous.size === next.size;
	const className = previous.className === next.className;
	return type && size && className;
}

export default memo(Icon, isEqualProps);
export type { IconType };
