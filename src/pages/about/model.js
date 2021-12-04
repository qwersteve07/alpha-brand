import { useEffect, useRef } from 'react';
import styles from './index.module.sass';
import model from 'images/model.svg';
import { ReactComponent as Planet } from 'images/planet.svg';
import anime from 'animejs';
import useIntersect from 'utils/use-intersect';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Model = () => {
  const explainRef0 = useRef();
  const explainRef1 = useRef();
  const explainRef2 = useRef();
  const explainRef3 = useRef();
  const { setElement } = useIntersect();

  // element load
  useEffect(() => {
    const elements = [explainRef0.current, explainRef1.current, explainRef2.current, explainRef3.current];
    setElement(elements);
  }, []);

  useEffect(() => {
    let path = anime.path('#modelImage #path');
    anime({
      targets: '#modelImage #planet',
      translateX: path('x'),
      translateY: path('y'),
      easing: 'linear',
      duration: 50000,
      loop: true,
    });

    return () => {
      anime.remove('#modelImage #planet');
    };
  }, []);

  return (
    <section className={styles.model}>
      <div className={styles.title}>
        <h3>維度模型</h3>
        <span>Dimension Model</span>
      </div>
      <div className={styles.main}>
        <div className={styles.image} id="modelImage">
          <img src={model} alt="model" />
          <div className={styles.name}>Data</div>
          <div id="planet" className={styles.planet}>
            <Planet />
            <span>Company</span>
          </div>

          <svg viewBox="0 0 1115 352" fill="none" className={styles.oval}>
            <path
              id="path"
              d="M1115.67,175.7c0-47.22-58.42-91.489-164.043-124.542C846.394,18.1,706.541,0,557.837,0S269.28,18.1,164.047,51.155C58.223,84.208,0,128.477,0,175.7s58.223,91.488,164.047,124.541c105.233,32.857,245.086,51.155,393.79,51.155s288.557-18.1,393.79-51.155C1057.45,267.185,1115.67,222.916,1115.67,175.7"
            />
          </svg>
          <div className={`${styles.explain} ${styles.brand}`} ref={explainRef0}>
            <div className={styles.subTitle}>Brand</div>
          </div>
          <div className={`${styles.explain} ${styles.design}`} ref={explainRef1}>
            <div className={styles.subTitle}>
              Brand
              <br /> domain
              <br /> design
            </div>
            <div className={styles.desc}>
              建立在公司運行的維度軌跡
              <br />
              所產生的設計來影響人群
            </div>
          </div>
          <div className={`${styles.explain} ${styles.people}`} ref={explainRef2}>
            <div className={styles.subTitle}>People</div>
            <div className={styles.desc}>
              人群透過行為
              <br />
              滲透品牌數據
            </div>
          </div>
          <div className={`${styles.explain} ${styles.timeline}`} ref={explainRef3}>
            <div className={styles.subTitle}>Timeline</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
