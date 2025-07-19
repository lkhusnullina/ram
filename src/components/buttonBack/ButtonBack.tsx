import { useNavigate } from 'react-router-dom';
import styles from './ButtonBack.module.scss';

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.buttonBack} onClick={() => navigate(-1)}>
      Назад
    </button>
  );
};
