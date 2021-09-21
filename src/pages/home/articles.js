import { useState } from 'react';
import styles from './index.module.sass';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import Subscribe from 'components/subscribe';

const Articles = () => {
  return (
    <section className={styles.articles}>
      <div className={styles.guide}>
        <div className={styles.image}>
          <svg viewBox="0 0 523 319">
            <Scene triggerElement="#guide-line" triggerHook={0.7} duration={800} reverse={true}>
              {progress => (
                <Tween
                  from={{
                    strokeDasharray: 941,
                    strokeDashoffset: 941,
                  }}
                  to={{
                    strokeDasharray: 941,
                    strokeDashoffset: 0,
                  }}
                  totalProgress={progress}
                  paused
                >
                  <path
                    id="guide-line"
                    d="M45.75 1H3L274.823 318H522V84.5"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    stroke="#fff"
                    fill="none"
                  />
                </Tween>
              )}
            </Scene>
          </svg>
          <h3>Articles</h3>
        </div>
        <div className={styles.content}>
          <h4>設計 / 革命 / 旅行</h4>
          <p>
            AlphaBlog，是某種集結體
            <br />
            鼓吹革命自己的人生，
            <br />
            進入人格分裂的生活，
            <br />
            讓自己流血的態度逼迫自己成長。
            <br />
            <br />
            這邊敘述三個主題
            <br />
            ＃革命式生活
            <br />
            ＃品牌維度規劃
            <br />
            ＃旅行與世界的樣貌
          </p>
          <p className={styles.sub}>
            在這裡，會分享如何透過鐵血的生活方式完成夢想
            、創業心態、新創設計公司的經營心態、面對現實的方法、生活與事業融合的心理狀態。也會從中得到跨領域的設計知識 ;
            從空間設計、品牌設計、網站設計，以及與眾不同的設計方法、品牌經營、相關趨勢跟策略文字分享。最後，會透過旅行帶你看見世界各地的品牌經營與設計，偶爾分享演講與社會議題，與改變世界的方式。
          </p>
        </div>
      </div>
      <Subscribe />
    </section>
  );
};

export default Articles;
