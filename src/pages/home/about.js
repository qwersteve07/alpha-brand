import styles from './index.module.sass';
import arrow from 'images/arrow.svg';
import Button from 'components/button';
import { PATH } from 'config';
import useDeviceType, { DEVICE_DESKTOP } from 'utils/use-device-type';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const device = useDeviceType();
  const isNotDesktop = device !== DEVICE_DESKTOP;
  const contentRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
      })
      .from(
        contentRef.current,
        {
          autoAlpha: 0,
          translateY: 150,
        },
        0
      )
      .to(
        contentRef.current,
        {
          autoAlpha: 1,
          translateY: 0,
          translateZ: 100,
        },
        0
      );
  }, []);

  // if (isNotDesktop) {
  //   return (
  //     <div className={styles.block2}>
  //       <h4>Founder of UNME DESIGN</h4>
  //       <p>
  //         現為「非我品牌空間設計」創辦人
  //         <br />
  //         這裡純粹就是革命式創業的個人網站
  //         <br />
  //         專門寫一些生活態度跟講課內容
  //         <br />
  //         專門嘴一些設計與道德上的謬誤
  //       </p>
  //       <h4>Brand Dimension Creator</h4>
  //       <p>跨領域設計師、講師、品牌顧問、出書中</p>
  //       <SplitImages />
  //       <h3>
  //         重要的不是治病
  //         <br />
  //         而是帶著疾病活下去
  //       </h3>
  //       <p>＃卡繆 ＃革命式生活 ＃創業</p>
  //       <Button link={PATH.ABOUT}>About</Button>
  //     </div>
  //   );
  // }

  return (
    <div ref={contentRef} className={styles.content}>
      <h4>Founder of UNME DESIGN</h4>
      <p>
        現為「非我品牌空間設計」創辦人
        <br />
        這裡純粹就是革命式創業的個人網站
        <br />
        專門寫一些生活態度跟講課內容
        <br />
        專門嘴一些設計與道德上的謬誤
      </p>
      <h4>Brand Dimension Creator</h4>
      <p>跨領域設計師、講師、品牌顧問、出書中</p>
      <img src={arrow} alt="arrow" />
      <h3>
        重要的不是治病
        <br />
        而是帶著疾病活下去
      </h3>
      <p>＃卡繆 ＃革命式生活 ＃創業</p>
      <Button link={PATH.ABOUT}>About</Button>
    </div>
  );
};

const splitLinesData = [
  {
    length: 644,
  },
  {
    length: 520,
    reverse: true,
  },
  {
    length: 480,
  },
  {
    length: 410,
  },
  {
    length: 320,
    reverse: true,
  },
  {
    length: 375,
  },
  {
    length: 435,
    reverse: true,
  },
  {
    length: 510,
  },
];

const splitImagesData = [
  {
    translateY: 0,
    rotationX: -1,
  },
  {
    translateX: -4,
    translateY: 15,
    rotationX: -2,
  },
  {
    translateY: -15,
    rotationX: -3,
  },
  {
    translateY: -2,
    rotationX: 1,
  },
  {
    translateY: 2,
    rotationX: -1,
  },
  {
    translateY: 5,
    translateX: -5,
    rotationX: -1,
  },
  {
    translateX: 5,
    translateY: 25,
  },
  {
    translateY: 2,
    rotationX: 2,
  },
  {
    translateX: 5,
    translateY: -3,
  },
];

const Images = () => {
  const splitLinesRef = useRef([]);
  const splitImagesRef = useRef([]);

  useEffect(() => {
    splitLinesRef.current.forEach((el, index) => {
      let currentLineData = splitLinesData[index];
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top bottom',
            end: 'top center',
          },
        })
        .from(
          el,
          {
            strokeDashoffset: currentLineData.reverse ? -currentLineData.length : currentLineData.length,
          },
          0
        )
        .to(
          el,
          {
            strokeDashoffset: 0,
            translateZ: 100,
          },
          0
        );
    });

    splitImagesRef.current.forEach((el, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top bottom',
            end: 'top top',
          },
        })
        .from(
          el,
          {
            autoAlpha: 0,
          },
          0
        )
        .to(
          el,
          {
            autoAlpha: 1,
            ...splitImagesData[index],
          },
          0
        );
    });
  }, []);

  const addToLinesRefs = el => {
    if (el && !splitLinesRef.current.includes(el)) {
      splitLinesRef.current.push(el);
    }
  };

  const addToImagesRefs = el => {
    if (el && !splitImagesRef.current.includes(el)) {
      splitImagesRef.current.push(el);
    }
  };

  return (
    <div className={styles.image}>
      <div className={styles['line-container']}>
        {splitLinesData.map((item, index) => {
          return (
            <svg
              key={index}
              viewBox={`0 0 ${item.length} 2`}
              className={styles.line}
              strokeWidth="2"
              strokeDasharray={item.length}
              ref={addToLinesRefs}
            >
              <line y1="1" x2={item.length} y2="1" fill="none" stroke="#fff" strokeMiterlimit="10" />
            </svg>
          );
        })}
      </div>
      <div className={styles['images-container']}>
        {splitImagesData.map(item => (
          <div className={styles['split-image']} id={item.id} ref={addToImagesRefs} />
        ))}
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.block2}>
        <Content />
        <Images />
      </div>
    </section>
  );
};

export default Intro;
