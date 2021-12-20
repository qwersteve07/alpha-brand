import { useState } from 'react';
import styles from './index.module.sass';
import { Controller } from 'react-scrollmagic';
import Subscribe from 'components/subscribe';
import Footer from 'components/footer';
import SceneElement from 'components/scene-el';
import { typeList } from 'config';
import Button from 'components/button';
import { PATH } from 'config';

const Articles = ({ data }) => {
  const ArticleDesc = () => {
    return (
      <div className={styles.desc} id="article-desc">
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
    );
  };

  const Posts = () => {
    return (
      <div className={styles.posts}>
        <ul>
          {data.map(item => {
            return (
              <li>
                <div className={styles['post-image']} style={{ backgroundImage: `url(${item.cover.url})` }} />
                <div className={styles.type}>{typeList[item.types]}</div>
                <div className={styles.title}>{item.title}</div>
              </li>
            );
          })}
        </ul>
        <Button className={styles.button} link={PATH.ARTICLES}>
          All articles
        </Button>
      </div>
    );
  };

  return (
    <section className={styles.articles}>
      <Controller>
        <div className={styles.guide}>
          <div className={styles['guide-image']}>
            <img src="/alpha-article.jpg" alt="article" />
            <SceneElement
              triggerElement="#article-image-line"
              triggerHook={0.6}
              duration={500}
              process={{
                from: {
                  strokeDasharray: 941,
                  strokeDashoffset: 941,
                },
                to: {
                  strokeDasharray: 941,
                  strokeDashoffset: 0,
                },
              }}
            >
              <svg viewBox="0 0 523 319">
                <path
                  id="article-image-line"
                  d="M45.75 1H3L274.823 318H522V84.5"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  stroke="#fff"
                  fill="none"
                />
              </svg>
            </SceneElement>

            <SceneElement
              triggerElement="#article-h3"
              triggerHook={0.6}
              duration={500}
              process={{
                from: {
                  opacity: 0,
                  translateY: 100,
                },
                to: {
                  opacity: 1,
                  translateY: 0,
                },
              }}
            >
              <h3 id="article-h3">Articles</h3>
            </SceneElement>
          </div>

          <SceneElement
            triggerElement="#article-desc"
            triggerHook={0.8}
            duration={500}
            process={{
              from: {
                opacity: 0,
                translateY: 150,
              },
              to: {
                opacity: 1,
                translateY: 0,
              },
            }}
          >
            <ArticleDesc />
          </SceneElement>
        </div>
        <Posts />
        <Subscribe />
        <Footer />
      </Controller>
    </section>
  );
};

export default Articles;
