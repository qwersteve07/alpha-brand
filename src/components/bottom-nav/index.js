import Link from 'next/link';
import styles from './index.module.sass';

const BottomNav = ({ navList }) => {
  return (
    <section className={styles['bottom-nav']}>
      {navList.map(nav => {
        return (
          <Link href={nav.path} key={nav.text}>
            <a style={{ backgroundImage: `url(${nav.image})` }}>
              <span>{nav.text}</span>
            </a>
          </Link>
        );
      })}
    </section>
  );
};

export default BottomNav;
