import { Menu } from '../menu/Menu';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';
import { LinkCustom } from '../linkCustom/LinkCustom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <LinkCustom to='/' className={styles.header__logo}>
        <img className={styles.header__icon} src={logo} alt="logo" />
        <span className={styles.header__label}>Rick and Morty</span>
      </LinkCustom>
      <Menu />
    </header>
  );
};
