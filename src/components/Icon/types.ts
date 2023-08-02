export type IconSize = 16 | 20 | 24 | 32 | 48;

// To get the list of all icon types, run this bash command:
// ls -1 ./src/components/core/Icon/files | sed -e 's/\.svg$//'
export type IconType =
	| 'building-bank-filled'
	| 'building-bank'
	| 'check'
	| 'chevron-right'
	| 'chevron-up'
	| 'kebab-menu-horizontal'
	| 'kebab-menu'
	| 'pencil'
	| 'plus'
	| 'search'
	| 'tabler-icon-stack-filled'
	| 'tabler-icon-stack'
	| 'trash'
	| 'user'
	| 'users-filled'
	| 'users'
	| 'x';
