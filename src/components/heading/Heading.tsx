import styles from './Heading.module.scss';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className = '' }: HeadingProps) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};
