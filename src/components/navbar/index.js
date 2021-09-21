import styles from './index.module.sass';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from 'images/logo.svg';
import iconInstagram from 'images/icon_instagram.svg';
import iconFacebook from 'images/icon_facebook.svg';
import iconMail from 'images/icon_mail.svg';
import iconSearch from 'images/icon_search.svg';
import { PATH } from 'config';
import classnames from 'classnames/bind';
import ExternalLink from 'components/external-link';
import { useState, useEffect } from 'react';
const cx = classnames.bind(styles);

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        console.log(scrolled);
        if (!scrolled) {
          setScrolled(true);
        }
      } else {
        if (scrolled) {
          setScrolled(false);
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrolled]);

  const SocialIcon = () => {
    let list = [
      {
        key: 'instagram',
        image: iconInstagram,
        link: 'https://www.instagram.com/nomad_designer_/',
      },
      {
        key: 'facebook',
        image: iconFacebook,
        link: 'https://www.facebook.com/AlphaHsiao',
      },
      {
        key: 'mail',
        image: iconMail,
        link: PATH.CONTACT,
        internal: true,
      },
    ];

    return (
      <ul className={styles.social}>
        {list.map(item => {
          if (item.internal) {
            return (
              <li key={item.key}>
                <Link href={item.link}>
                  <a>
                    <img src={item.image} alt="icon" />
                  </a>
                </Link>
              </li>
            );
          }

          return (
            <li key={item.key}>
              <ExternalLink link={item.link}>
                <img src={item.image} alt="icon" />
              </ExternalLink>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={cx({ navbar: true, scroll: scrolled })}>
      <Link href="/">
        <a className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
      </Link>
      <ul className={styles.menu}>
        {Object.values(PATH).map(item => {
          const itemClass = cx({
            active: router.pathname.includes(item),
          });

          return (
            <li key={item} className={itemClass}>
              <Link href={item}>
                <a>{capitalizeFirstLetter(item.replace('/', ''))}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.right}>
        <SocialIcon />
        <div className={styles.search}>
          <img src={iconSearch} alt="search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
