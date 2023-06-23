import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';


const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeText = isDarkTheme ? 'Light' : 'Dark';
  const ThemeIcon = isDarkTheme ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <div className={styles.switcher} onClick={() => setIsDarkTheme(!isDarkTheme)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
