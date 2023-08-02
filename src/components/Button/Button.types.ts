import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";
import { IconProps, IconType } from "../Icon";
import { TypographyVariant } from "../Typography/types";

export type ButtonColor = 'neutral' | 'error';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonProps = PropsWithChildren & {
	autoFocus?: boolean;
	className?: string;
	color?: ButtonColor;
	disabled?: boolean;
	href?: string;
	icon?: IconType;
	iconSize?: IconProps['size'];
	loading?: boolean;
	size?: ButtonSize;
	type?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type'];
	typographyVariant?: TypographyVariant;
	variant?: ButtonVariant;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
