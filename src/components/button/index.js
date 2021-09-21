import Link from 'next/link';
import styles from './index.module.sass';

const Button = ({ link, onClick, className, children }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.button}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
