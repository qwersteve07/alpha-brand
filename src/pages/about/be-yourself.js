import { useEffect, useRef } from 'react';
import styles from './index.module.sass';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BeYourself = () => {
  const svgRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          scrub: true,
          start: 'top bottom-=200px',
          end: 'top top-=200px',
        },
      })
      .from(
        svgRef.current,
        {
          strokeDashoffset: 1349,
        },
        0
      )
      .to(
        svgRef.current,
        {
          strokeDashoffset: 0,
        },
        0
      );
  }, []);

  // useEffect(() => {
  //   var myPath = document.getElementById('line');
  //   var length = myPath.getTotalLength();
  // }, []);

  return (
    <section className={styles.beYourself}>
      <img src="/photo.jpg" alt="photo" />
      <svg viewBox="0 0 977 688">
        <path
          ref={svgRef}
          d="M42.6761 1H3L534.666 687H977"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1349"
        />
      </svg>
      <h3>
        Do not to be
        <br />
        somebody...
      </h3>
      <div className={styles.content}>
        <h5>＃旅行與世界的樣貌</h5>
        <p>
          在人生中的第一個獨旅時，我遇見一位旅人。
          <br />
          <br />
          與他分享放逐自己到這座島嶼的原因後，他說起在北歐的家鄉，有一匹孤狼燃盡一生的故事，他們將其稱為Alpha，意思是革命傳承的生物。
          <br />
          <br />
          直到他前往下一個地方前，他仍然用Alpha作為我的稱呼。
        </p>

        <p>所以，Hey，我是Alpha</p>
        <p>
          是個從孤獨的人生脫困後，一直在追求自我成長與社會革命的創業家。我總是抱持著幼稚與質疑的想法，嘗試著讓世界可以成為更好的模樣。
          <br />
          <br />
          現在，我是「非我品牌空間設計」的創辦人，擔任多家企業的品牌顧問、逆風少年與大專院校講師。也成立AlphaBlog、ig。
          <br />
          <br />
          你可以從這些管道，吸收到新商業型態的設計公司創業故事、設計思考與技術的know how、自我成長的追求與相關經驗分享。
          <br />
          <br />
          希望我的朋友與學生們，都將因為我的分享，而讓他們的人生成為他們自己本身最獨特的存在。
          <br />
          因為在我相信自己是獨特之前......
        </p>
        <h4>
          我是那個從不走在正軌
          <br />
          卻想滿足所有人期待的假性生命
        </h4>
      </div>
    </section>
  );
};

export default BeYourself;
