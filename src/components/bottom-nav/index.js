import Button from 'components/button';
import { PATH } from 'config';
import Link from 'next/link';
import styles from './index.module.sass';

const BottomNav = ({ navList }) => {
  const navListMap = {
    articles: {
      path: PATH.ARTICLES,
      image: '/clickhere-articles.jpg',
      text: 'Articles',
    },
    about: {
      path: PATH.ABOUT,
      image: '/clickhere-about.jpg',
      text: 'About',
    },
    projects: {
      path: PATH.PROJECTS,
      image: '/clickhere-projects.jpg',
      text: 'Projects',
    },
  };

  return (
    <section className={styles['bottom-nav']}>
      {navList.map(nav => {
        const currentNav = navListMap[nav];
        return (
          <div className={styles.link} key={nav}>
            <Link href={currentNav.path}>
              <a style={{ backgroundImage: `url(${currentNav.image})` }} className={styles.block}>
                <span>{currentNav.text}</span>
              </a>
            </Link>
            <Button className={styles.button} link={currentNav.path}>
              Click here
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default BottomNav;
