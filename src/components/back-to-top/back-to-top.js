import { useState, useEffect } from 'react';
import UseResize from 'utils/use-resize';
import styles from './index.module.sass';
import classnames from 'classnames/bind';
import backToTop from 'images/back-to-top.svg';

const cx = classnames.bind(styles);

const BackToTop = () => {
  const [backToTopShow, setBackToTopShow] = useState(false);
  const { windowHeight } = UseResize();

  useEffect(() => {
    const showBackToTop = () => {
      setBackToTopShow(() => (window.scrollY > windowHeight ? true : false));
    };
    window.addEventListener('scroll', showBackToTop);
    return () => {
      window.removeEventListener('scroll', showBackToTop);
    };
  }, [windowHeight]);

  const backToTopClass = cx({
    'back-to-top': true,
    show: backToTopShow,
  });

  return (
    <div
      className={backToTopClass}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <img src={backToTop} alt="back-to-top" />
    </div>
  );
};

export default BackToTop;
