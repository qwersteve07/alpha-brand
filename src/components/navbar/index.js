import { useState, useEffect, useRef } from 'react';
import styles from './index.module.sass';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import classnames from 'classnames/bind';
import logo from 'images/logo.svg';
import iconInstagram from 'images/icon_instagram.svg';
import iconFacebook from 'images/icon_facebook.svg';
import iconMail from 'images/icon_mail.svg';
import iconSearch from 'images/icon_search.svg';
import { PATH } from 'config';
import ExternalLink from 'components/external-link';
const cx = classnames.bind(styles);

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
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

  useEffect(() => {
    const onClick = e => {
      if (!menuOpen) return;

      if (menuRef.current !== e.target) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      disableBodyScroll(menuRef.current);
    } else {
      enableBodyScroll(menuRef.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const onTriggerMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <ul className={cx({ menu: true, on: menuOpen })} ref={menuRef}>
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
        {/* <div className={styles.search}>
          <img src={iconSearch} alt="search" />
        </div> */}
      </div>
      <div className={cx({ trigger: true, on: menuOpen })} onClick={onTriggerMenu} />
    </nav>
  );
};

export default Navbar;
