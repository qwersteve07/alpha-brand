import { useEffect, useRef } from 'react';
import styles from './index.module.sass';
import unmeLogo from 'images/unme_logo.svg';
import useDeviceType, { DEVICE_DESKTOP, DEVICE_MOBILE } from 'utils/use-device-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const MobileIntro = ({ logoRef, introBlockRef, introLineOneRef, introLineTwoRef, title1Ref, title2Ref }) => {
  return (
    <div className={styles.block1}>
      <img ref={logoRef} src={unmeLogo} alt="unme" className={styles['unme-logo']} />
      <svg className={styles['intro-block']} ref={introBlockRef} viewBox="0 0 1100 569" fill="none">
        <path d="M1031.61 569L1100 0L43.345 19.263L0 499.357L1031.61 569Z" fill="#3C3230" />
      </svg>

      <svg ref={introLineOneRef} fill="none" viewBox="0 0 257 133" className={styles['intro-line-one']}>
        <path
          id="x"
          d="M248.1,27.2l-2-22.7L0.4,0l15.9,133l240.2-16.3l-2.6-27.8"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="671"
        />
      </svg>

      <svg ref={introLineTwoRef} fill="none" viewBox="0 0 224 117" className={styles['intro-line-two']}>
        <path
          id="y"
          d="M0.8,102.1l208.4,14.1L223,1L9.6,4.9L0.8,102.1"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="635"
        />
      </svg>

      <h3 ref={title1Ref} className={styles.founder}>
        Founder of
        <br />
        UNME DESIGN
        <br />
        <span>非我設計創辦人</span>
      </h3>
      <h3 ref={title2Ref} className={styles.creator}>
        Brand Dimension
        <br />
        Creator
      </h3>
      <p>
        品牌維度是透過多領域設計團隊，
        <br />
        銜接品牌策略、市場調查、數據分析，
        <br />
        建立使用者經驗建的獨特體驗，
        <br />
        讓品牌形象一致性提到最高，
        <br />
        並作出精準的互動溝通，
        <br />
        藉此讓設計能夠實際幫助品牌營運的串連。
        <br />
        是的，就是這麼複雜。
      </p>
      <ul>
        <li>#革命式生活</li>
        <li>#品牌空間設計師</li>
      </ul>
    </div>
  );
};

const DesktopIntro = ({
  logoRef,
  introBlockRef,
  introLineOneRef,
  introLineTwoRef,
  title1Ref,
  title2Ref,
  contentRef,
  listRef,
}) => {
  return (
    <div className={styles.block1}>
      <svg
        className={styles['intro-block']}
        ref={introBlockRef}
        width="1100"
        height="569"
        viewBox="0 0 1100 569"
        fill="none"
      >
        <path d="M1031.61 569L1100 0L43.345 19.263L0 499.357L1031.61 569Z" fill="#3C3230" />
      </svg>

      <svg
        ref={introLineOneRef}
        width="933"
        height="485"
        viewBox="0 0 933 485"
        fill="none"
        className={styles['intro-line-one']}
      >
        <path
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray="2328"
          d="M897.7,64.1l-4.1-45.7L2.3,2L59.8,482l243.9-16.5 M919.8,309.1l10.3,114l-547.6,37"
        />
      </svg>

      <svg
        width="933"
        height="485"
        ref={introLineTwoRef}
        viewBox="0 0 933 485"
        fill="none"
        className={styles['intro-line-two']}
      >
        <path
          id="x"
          strokeDasharray="2661"
          d="M1.1,424l872.2,59L931.1,1L37.8,17.3L1.1,424"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <img ref={logoRef} src={unmeLogo} alt="unme" className={styles['unme-logo']} />

      <h3 ref={title1Ref} className={styles.founder}>
        Founder of
        <br />
        UNME DESIGN
      </h3>

      <h3 ref={title2Ref} className={styles.creator}>
        Brand Dimension
        <br />
        Creator
      </h3>

      <div ref={contentRef} className={styles['creator-content']}>
        <h4 className={styles.title}>非我設計創辦人</h4>
        <p>
          品牌維度是透過多領域設計團隊，銜接品牌策略、市場調查、數據分析，
          <br />
          建立使用者經驗建的獨特體驗，讓品牌形象一致性提到最高，並作出精準的互動溝通，
          <br />
          藉此讓設計能夠實際幫助品牌營運的串連。
          <br />
          是的，就是這麼複雜。
        </p>
      </div>

      <ul ref={listRef}>
        <li>#革命式生活</li>
        <li>#品牌空間設計師</li>
      </ul>
    </div>
  );
};

const Intro = () => {
  const device = useDeviceType();
  const isMobile = device === DEVICE_MOBILE;
  const introBlockRef = useRef();
  const introLineOneRef = useRef();
  const introLineTwoRef = useRef();
  const logoRef = useRef();
  const title1Ref = useRef();
  const title2Ref = useRef();
  const contentRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    console.log(document.getElementById('x')?.getTotalLength());
    console.log(document.getElementById('y')?.getTotalLength());

    let introBlockGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: introBlockRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
      })
      .from(introBlockRef.current, { autoAlpha: 0 })
      .to(introBlockRef.current, { autoAlpha: 1 });

    let introLineOneGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: introLineOneRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
      })
      .from(introLineOneRef.current, { autoAlpha: 0 })
      .to(introLineOneRef.current, { autoAlpha: 1 });

    let introLineOnePathGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: introLineOneRef.current.children[0],
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
      })
      .from(introLineOneRef.current.children[0], { strokeDashoffset: isMobile ? 671 : 2328 })
      .to(introLineOneRef.current.children[0], { strokeDashoffset: 0 });

    let introLineTwoGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: introLineTwoRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
      })
      .from(introLineTwoRef.current, { autoAlpha: 0 })
      .to(introLineTwoRef.current, { autoAlpha: 1 });

    let introLineTwoPathGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: introLineTwoRef.current.children[0],
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
      })
      .from(introLineTwoRef.current.children[0], { strokeDashoffset: isMobile ? 635 : 2661 })
      .to(introLineTwoRef.current.children[0], { strokeDashoffset: 0 });

    let logoGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
      })
      .from(logoRef.current, {
        autoAlpha: 0,
        translateY: 50,
      })
      .to(logoRef.current, {
        autoAlpha: 1,
        translateY: 0,
      });

    let title1Gsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: title1Ref.current,
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
      })
      .from(title1Ref.current, {
        autoAlpha: 0,
        translateY: 50,
      })
      .to(title1Ref.current, {
        autoAlpha: 1,
        translateY: 0,
      });

    let title2Gsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: title2Ref.current,
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
      })
      .from(title2Ref.current, {
        autoAlpha: 0,
        translateY: 50,
      })
      .to(title2Ref.current, {
        autoAlpha: 1,
        translateY: 0,
      });

    let contentGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
      })
      .from(contentRef.current, {
        autoAlpha: 0,
        translateY: 50,
      })
      .to(contentRef.current, {
        autoAlpha: 1,
        translateY: 0,
      });

    let listGsap = gsap
      .timeline({
        scrollTrigger: {
          trigger: listRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
      })
      .from(listRef.current, {
        autoAlpha: 0,
        translateY: 50,
      })
      .to(listRef.current, {
        autoAlpha: 1,
        translateY: 0,
      });

    return () => {
      introBlockGsap.clear();
      introLineOneGsap.clear();
      introLineOnePathGsap.clear();
      introLineTwoGsap.clear();
      introLineTwoPathGsap.clear();
      logoGsap.clear();
      title1Gsap.clear();
      title2Gsap.clear();
      contentGsap.clear();
      listGsap.clear();
    };
  }, [isMobile]);

  const props = {
    logoRef,
    introBlockRef,
    introLineOneRef,
    introLineTwoRef,
    title1Ref,
    title2Ref,
    contentRef,
    listRef,
  };

  return (
    <section className={styles.intro}>{isMobile ? <MobileIntro {...props} /> : <DesktopIntro {...props} />}</section>
  );
};

export default Intro;
