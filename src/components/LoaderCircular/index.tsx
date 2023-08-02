import classNames from 'classnames';
import styles from './LoaderCircular.module.css';

const LoaderCircular: React.FC = () => (
	<div className={classNames([styles.profileMainLoader, 'loader-circular'])}>
		<div className={styles.loader}>
			<svg className={styles.circularLoader} viewBox="25 25 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle className={styles.loaderPath} cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
			</svg>
		</div>
	</div>
);

export default LoaderCircular;
