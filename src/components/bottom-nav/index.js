import Button from 'components/button';
import Link from 'next/link';
import styles from './index.module.sass';

const BottomNav = ({ navList }) => {
  return (
    <section className={styles['bottom-nav']}>
      {navList.map(nav => {
        return (
          <div className={styles.link} key={nav.text}>
            <Link href={nav.path}>
              <a style={{ backgroundImage: `url(${nav.image})` }} className={styles.block}>
                <span>{nav.text}</span>
              </a>
            </Link>
            <Button className={styles.button} link={nav.path}>
              Click here
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default BottomNav;
