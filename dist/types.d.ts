import { PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type IconSize = 16 | 20 | 24 | 32 | 48;
type IconType = 'building-bank-filled' | 'building-bank' | 'check' | 'chevron-right' | 'chevron-up' | 'kebab-menu-horizontal' | 'kebab-menu' | 'pencil' | 'plus' | 'search' | 'tabler-icon-stack-filled' | 'tabler-icon-stack' | 'trash' | 'user' | 'users-filled' | 'users' | 'x';

type IconProps = {
    className?: string;
    iconClassName?: string;
    size?: IconSize;
    type: IconType;
};

type TypographyVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle3-bold' | 'body1' | 'body2' | 'body3' | 'body3-bold' | 'body4' | 'body4-bold' | 'text1' | 'text1-bold' | 'text2' | 'text2-bold' | 'text3' | 'text3-bold' | 'overline1' | 'overline2' | 'overline3' | 'button1' | 'button2';

type ButtonColor = 'neutral' | 'error';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'contained' | 'outlined' | 'text';
type ButtonProps = PropsWithChildren & {
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

export { ButtonColor, ButtonProps, ButtonSize, ButtonVariant };
