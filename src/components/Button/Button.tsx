import { memo, useMemo } from 'react';
import classNames from 'classnames';

import type { IconProps } from '../Icon';
import Icon from '../Icon';
import LoaderCircular from '../LoaderCircular';
import type { TypographyVariant } from '../Typography/types';
import Typography from '../Typography';

import { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

const commonClasses = 'border focus:border-functionalFocus flex gap-2 justify-center items-center';

const buttonVariant: { [key in ButtonVariant]: string } = {
	contained: commonClasses,
	outlined: commonClasses,
	text: 'flex gap-2 items-center'
};

const buttonSizeClass: { [key in ButtonSize]: string } = {
	small: 'px-4 py-2 rounded-full',
	medium: 'px-6 py-3 rounded-[12px]',
	large: 'px-8 py-5 rounded-[16px]'
};

const buttonColorVariant: { [keyColor in ButtonColor]: { [keyVariant in ButtonVariant]?: string }} = {
	neutral: {
		contained: 'border-neutralMain bg-neutralMain text-foregroundMain disabled:bg-functionalOpacity-50 disabled:border-functionalOpacity-5 hover:bg-extendedText-80',
		outlined: 'border-neutralMain hover:enabled:bg-functionalOpacity-5 disabled:opacity-50'
	},
	error: {
		contained: 'bg-functionalError text-neutralSecondary border-functionalError disabled:opacity-30',
		outlined: 'border-functionalError focus:border-functionalError text-functionalError disabled:opacity-30',
		text: 'text-functionalError'
	}
};

const typographySizeVariant: { [key in ButtonSize]: TypographyVariant } = {
	small: 'button2',
	medium: 'button2',
	large: 'button1'
};

const iconButtonSize: { [key in ButtonSize]: IconProps['size'] } = {
	small: 20,
	medium: 24,
	large: 24
};

const Button: React.FC<ButtonProps> = ({
	autoFocus,
	children,
	className,
	color = 'neutral',
	disabled,
	href,
	icon,
	iconSize,
	loading,
	size = 'small',
	type = 'button',
	typographyVariant,
	variant = 'contained',
	onClick
}) => {
	const classes = classNames(
		buttonSizeClass[size],
		buttonVariant[variant],
		{ ['button-icon']: icon },
		buttonColorVariant[color][variant],
		className
	);

	const renderedIcon = useMemo(() => icon && <Icon type={icon} size={iconSize ?? iconButtonSize[size]} />, [iconSize, icon, size]);

	const label = useMemo(() => {
		if (loading) {
			return <LoaderCircular />;
		}
		return (
			<>
				{renderedIcon}
				{children && <Typography variant={typographyVariant ?? typographySizeVariant[size]}>{children}</Typography>}
			</>
		);
	}, [loading, children, size, renderedIcon, typographyVariant]);

	if (href && !disabled && !loading) {
		return (
			<a href={href} className={classes} autoFocus={autoFocus}>
				{label}
			</a>
		);
	}

	return (
		<button type={type} className={classes} disabled={!!disabled || !!loading} onClick={onClick} autoFocus={autoFocus}>
			{label}
		</button>
	);
};

export default memo(Button);
