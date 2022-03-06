import { useRef, useEffect } from 'react';
import styles from './index.module.sass';
import core1 from 'images/core_1.svg';
import core2 from 'images/core_2.svg';
import core3 from 'images/core_3.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const coreData = [
  {
    id: 'designer',
    title: '品牌空間設計師',
    subtitle: 'Brand Domain Designer',
    image: core1,
    content:
      '品牌與這個社會產生行為的設計方式。藉由跨領域設計的能力在每個不同的接觸領域中，設計並客製化每個品牌對外的環節，讓設計產生的觀感與行為獲得品牌體驗與一致性。',
  },
  {
    id: 'dimension',
    title: '時間維度',
    subtitle: 'Dimenison Timeline',
    image: core2,
    content:
      '是讓品牌營運融合時間的動態裡頭，形象經營是動詞，單一、複製、相同的形象規劃無法滿足過往與未來的變動。讓設計與經營產生連動，並透過進程成為企業的品牌夥伴，協助品牌關係，透過設計強化企業運作時與TA連結的管道，並維持動態的積累與時刻。',
  },
  {
    id: 'analyze',
    title: '數據與分析',
    subtitle: 'Data and Analyze',
    image: core3,
    content:
      '是設計媒合的每個品牌時刻，協助累積在每個不同領域（網站、空間等）所累積到的行為數據、互動測試與持續優化的設計內容。透過無限點狀的累積，協助企業累積測試，並透過市場的分析與競爭對手的拆分，判定品牌所處於的軌道位置（SWOT等）。',
  },
];

const Core = () => {
  const existRef = useRef([]);

  useEffect(() => {
    let existGsap = existRef.current.map((el, index) => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top bottom',
            end: 'top top',
          },
        })
        .from(el, {
          autoAlpha: 0,
        })
        .to(
          el,
          {
            autoAlpha: 1,
            rotationY: index % 2 === 0 ? 180 : -180,
          },
          0
        );
    });

    return () => {
      existGsap.forEach(el => {
        el.clear();
      });
    };
  }, []);

  const addToRefs = el => {
    if (el && !existRef.current.includes(el)) {
      existRef.current.push(el);
    }
  };
  return (
    <section className={styles.core}>
      <svg className={styles['svg-bg']} viewBox="0 0 1120.6 615.727">
        <rect width="1120.6" height="615.727" fill="#3c3230" />
      </svg>
      <div className={styles.title}>
        <h3>品牌維度的主要核心</h3>
        <span>The core value of brand dimension.</span>
      </div>

      <div className={styles.list}>
        {coreData.map(item => {
          return (
            <div className={styles.item} key={item.id}>
              <div id={item.id} className={styles.frame} ref={addToRefs} />
              <div className={styles.nameCn}>{item.title}</div>
              <div className={styles.nameEn}>{item.subtitle}</div>
              <img src={item.image} />
              <div className={styles.content}>{item.content}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Core;
