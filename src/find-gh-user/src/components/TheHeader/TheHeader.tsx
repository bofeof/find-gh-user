import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import styles from './TheHeader.module.scss';

const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>Definder</div>
    <ThemeSwitcher />
  </div>
);

export default TheHeader;
