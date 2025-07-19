import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.menu__link} ${styles.active}` : styles.menu__link
        }
      >
        Персонажи
      </NavLink>
      <NavLink
        to="/episode"
        className={({ isActive }) =>
          isActive ? `${styles.menu__link} ${styles.active}` : styles.menu__link
        }
      >
        Эпизоды
      </NavLink>
      <NavLink
        to="/location"
        className={({ isActive }) =>
          isActive ? `${styles.menu__link} ${styles.active}` : styles.menu__link
        }
      >
        Локации
      </NavLink>
    </nav>
  );
};
