import type { DetailedHTMLProps, HTMLAttributes, LabelHTMLAttributes } from 'react';

type ComponentLabelProps = Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'color'>;

type ComponentSpanProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'color'>;

type TypographyComponent = 'text' | 'label' | 'span';

// Typography component props
interface TypographyBase {
	className?: string;
	variant: TypographyVariant;
	component?: TypographyComponent
}

export interface TypographyText extends TypographyBase {
	component?: 'text'
	children: React.ReactNode
}

export interface TypographyLabel extends TypographyBase, ComponentLabelProps {
	component: 'label'
}

export interface TypographySpan extends TypographyBase, ComponentSpanProps {
	component: 'span'
}

// Variants
export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle3-bold'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body3-bold'
  | 'body4'
  | 'body4-bold'
  | 'text1'
  | 'text1-bold'
  | 'text2'
  | 'text2-bold'
  | 'text3'
  | 'text3-bold'
  | 'overline1'
  | 'overline2'
  | 'overline3'
  | 'button1'
  | 'button2';
