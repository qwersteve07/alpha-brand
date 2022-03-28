import styles from './index.module.sass';
import arrow from 'images/arrow.svg';
import Button from 'components/button';
import { PATH } from 'config';
import useDeviceType, { DEVICE_DESKTOP, DEVICE_MOBILE } from 'utils/use-device-type';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useBrowser from 'utils/browser-helper';
gsap.registerPlugin(ScrollTrigger);

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
    reverse: true,
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
    translateY: 0,
    rotationX: 0,
  },
  {
    translateY: 1,
    rotationX: 2,
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
  const browser = useBrowser();
  const isSafari = browser === 'Safari';
  const device = useDeviceType();
  const isMobile = device === DEVICE_MOBILE;

  useEffect(() => {
    let splitLineGsap = splitLinesRef.current.map((el, index) => {
      const svgPath = el.children[0];
      let currentLineData = splitLinesData[index];
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: svgPath,
            scrub: true,
            start: 'top bottom',
            end: isMobile ? '+=300' : '+=600',
          },
        })
        .from(svgPath, {
          strokeDashoffset: currentLineData.length,
        })
        .to(svgPath, {
          strokeDashoffset: 0,
        });
    });

    let splitImageGsap = splitImagesRef.current.map((el, index) => {
      const elParams = () => {
        if (isSafari) {
          let newParams = splitImagesData[index];
          delete newParams['rotationX'];
          return newParams;
        } else {
          return splitImagesData[index];
        }
      };

      return gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top bottom',
            end: isMobile ? '+=300' : '+=600',
          },
        })
        .from(el, {
          autoAlpha: 0,
        })
        .to(el, {
          autoAlpha: 1,
          ...elParams(),
        });
    });

    return () => {
      splitLineGsap.forEach(el => {
        el.clear();
      });
      splitImageGsap.forEach(el => {
        el.clear();
      });
    };
  }, [isSafari]);

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
      <div className={styles['images-container']}>
        {splitImagesData.map(item => (
          <div key={item.id} className={styles['split-image']} id={item.id} ref={addToImagesRefs} />
        ))}
      </div>
      <div className={styles['line-container']}>
        {splitLinesData.map((item, index) => {
          let reversePathParams = () => {
            if (item.reverse) {
              return `M${item.length},0 0,0`;
            } else {
              return `M 0,0 L ${item.length},0`;
            }
          };
          return (
            <svg
              key={index}
              viewBox={`0 0 ${item.length} 2`}
              className={styles.line}
              strokeWidth="2"
              strokeDasharray={item.length}
              ref={addToLinesRefs}
            >
              <path d={reversePathParams()} fill="none" stroke="#fff" />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

const Intro = () => {
  const device = useDeviceType();
  const isNotMobile = device !== DEVICE_MOBILE;

  const contentRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          scrub: true,
          start: 'top bottom',
          end: '+=600',
        },
      })
      .from(contentRef.current, {
        autoAlpha: 0,
        translateY: 150,
      })
      .to(contentRef.current, {
        autoAlpha: 1,
        translateY: 0,
      });
  }, []);

  return (
    <section className={styles.intro}>
      <div className={styles.block2}>
        {!isNotMobile ? (
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
            <Images />
            <h3>
              重要的不是治病
              <br />
              而是帶著疾病活下去
            </h3>
            <p>＃卡繆 ＃革命式生活 ＃創業</p>
            <Button link={PATH.ABOUT}>About</Button>
          </div>
        ) : (
          <>
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
            <Images />
          </>
        )}
      </div>
    </section>
  );
};

export default Intro;
