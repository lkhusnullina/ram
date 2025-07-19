import { Link } from 'react-router-dom';
import styles from './LinkCustom.module.scss';

interface LinkCustomProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkCustom = ({ to, children, className = '' }: LinkCustomProps) => {
  return (
    <Link to={to} className={`${styles.link} ${className}`}>
      {children}
    </Link>
  );
};
