import { useEffect, useRef } from 'react';
import styles from './index.module.sass';
import unmeLogo from 'images/unme_logo.svg';
import useDeviceType, { DEVICE_DESKTOP } from 'utils/use-device-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const Content = () => {
    const device = useDeviceType();
    const isNotDesktop = device !== DEVICE_DESKTOP;
    const svgBlock = useRef();
    const svgLine1 = useRef();
    const svgLine1Polyline1 = useRef();
    const svgLine1Polyline2 = useRef();
    const svgLine2 = useRef();
    const logoRef = useRef();
    const title1Ref = useRef();
    const title2Ref = useRef();
    const contentRef = useRef();
    const listRef = useRef();

    useEffect(() => {
      // block
      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgBlock.current,
            scrub: true,
            start: 'top bottom',
            end: 'top top',
          },
        })
        .from(
          svgBlock.current,
          {
            autoAlpha: 0,
          },
          0
        )
        .to(
          svgBlock.current,
          {
            transformPerspective: 1000,
            autoAlpha: 1,
            rotationX: 5,
            translateZ: 0,
          },
          0
        );

      // line1
      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgLine1.current,
            scrub: true,
            start: 'top bottom',
            end: 'top top',
          },
        })
        .from(svgLine1.current, {
          autoAlpha: 0,
        })
        .to(
          svgLine1.current,
          {
            autoAlpha: 1,
            rotationX: 3,
            rotationY: 10,
            rotationZ: -7,
            skewY: 5,
            transformPerspective: 1000,
            translateZ: 100,
          },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgLine1Polyline1.current,
            scrub: true,
            start: 'top bottom',
            end: 'top center',
          },
        })
        .from(svgLine1Polyline1.current, { strokeDashoffset: 723 }, 0)
        .to(svgLine1Polyline1.current, { strokeDashoffset: 0 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgLine1Polyline2.current,
            scrub: true,
            start: 'top bottom',
            end: 'top center',
          },
        })
        .from(svgLine1Polyline2.current, { strokeDashoffset: 1657 }, 0)
        .to(svgLine1Polyline2.current, { strokeDashoffset: 0 }, 0);

      // line2
      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgLine2.current,
            scrub: true,
            start: 'top bottom',
            end: 'top top',
          },
        })
        .from(svgLine2.current, {
          autoAlpha: 0,
        })
        .to(
          svgLine2.current,
          {
            autoAlpha: 1,
            rotationX: 5,
            rotationY: -20,
            rotationZ: 5,
            transformPerspective: 1000,
            translateZ: 200,
          },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgLine2.current.children[0],
            scrub: true,
            start: 'top bottom',
            end: 'top center',
          },
        })
        .from(svgLine2.current.children[0], { strokeDashoffset: 2795 }, 0)
        .to(svgLine2.current.children[0], { strokeDashoffset: 0 }, 0);

      // logo
      gsap
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
          translateZ: 100,
        })
        .to(
          logoRef.current,
          {
            autoAlpha: 1,
            translateY: 0,
            translateZ: 100,
          },
          0
        );

      // title1
      gsap
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
        .to(
          title1Ref.current,
          {
            autoAlpha: 1,
            translateY: 0,
            translateZ: 100,
          },
          0
        );

      // title2
      gsap
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
        .to(
          title2Ref.current,
          {
            autoAlpha: 1,
            translateY: 0,
            translateZ: 100,
          },
          0
        );

      // content
      gsap
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
        .to(
          contentRef.current,
          {
            autoAlpha: 1,
            translateY: 0,
            translateZ: 100,
          },
          0
        );

      // list
      gsap
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
        .to(
          listRef.current,
          {
            autoAlpha: 1,
            translateY: 0,
            translateZ: 100,
          },
          0
        );
    }, []);

    if (isNotDesktop) {
      return (
        <div className={styles.block1}>
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
    }

    return (
      <div className={styles.block1}>
        <svg viewBox="0 0 1120.6 615.727" className={styles['svg-block']} ref={svgBlock}>
          <rect width="1120.6" height="615.727" fill="#3c3230" />
        </svg>
        <svg ref={svgLine1} viewBox="0 0 895.5 488.1" className={styles['svg-line1']}>
          <polyline
            ref={svgLine1Polyline1}
            points="894.5,373.5 894.5,487.1 284.9,487.1"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            strokeDasharray="723"
          />
          <polyline
            ref={svgLine1Polyline2}
            points="215.4,487.1 1,487.1 1,1 894.5,1 894.5,64.1 "
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            strokeDasharray="1657"
          />
        </svg>
        <svg ref={svgLine2} viewBox="0 0 904.241 497.748" className={styles['svg-line2']}>
          <rect
            id="line2-rect"
            x="1"
            y="1"
            width="902.241"
            height="495.748"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            strokeDasharray="2795"
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

  return (
    <section className={styles.intro}>
      <Content />
    </section>
  );
};

export default Intro;
