import Link from 'next/link';
import styles from './index.module.sass';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Button = ({ link, onClick, className, children, loading, theme }) => {
  const Loading = () => {
    return (
      <div className={styles.loading}>
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  };

  if (link) {
    return (
      <Link href={link}>
        <a className={`${styles.button} ${className}`}>{loading ? <Loading /> : children}</a>
      </Link>
    );
  }

  const buttonClass = cx({
    button: true,
    [theme]: true,
  });

  return (
    <button className={`${buttonClass} ${className}`} onClick={onClick}>
      {loading ? <Loading /> : children}
    </button>
  );
};

export default Button;
