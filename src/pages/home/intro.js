import styles from './index.module.sass';
import unmeLogo from 'images/unme_logo.svg';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import arrow from 'images/arrow.svg';
import Button from 'components/button';
import { PATH } from 'config';

const Intro = () => {
  const splitImageData = [
    {
      id: 's1',
      to: {
        translateY: 0,
        rotate: '-2deg',
      },
    },
    {
      id: 's2',
      to: {
        translateY: 45,
        translateX: 8,
        rotate: '5deg',
      },
    },
    {
      id: 's3',
      to: {
        translateY: 5,
        rotate: '-3deg',
      },
    },
    {
      id: 's4',
      to: {
        translateY: -10,
        rotate: '-1deg',
      },
    },
    {
      id: 's5',
      to: {
        translateY: 8,
        rotate: '-1deg',
      },
    },
    {
      id: 's6',
      to: {
        translateY: 55,
        translateX: -10,
        rotate: '4deg',
      },
    },
    {
      id: 's7',
      to: {
        translateY: 3,
        rotate: '-6deg',
      },
    },
  ];

  // useEffect(() => {
  //   var myPath = document.getElementById('line1-ploy1');
  //   var length = myPath.getTotalLength();
  //   console.log(length);
  // }, []);

  return (
    <section className={styles.intro}>
      <Controller>
        <div className={styles.block1}>
          <Scene triggerElement="#svg-block" triggerHook={0.7} duration={800} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                  transformPerspective: '1000px',
                  rotateX: '5deg',
                  rotateY: '-20deg',
                  rotateZ: '5deg',
                }}
                totalProgress={progress}
                paused
              >
                <svg viewBox="0 0 1120.6 615.727" className={styles['svg-block']} id="svg-block">
                  <rect width="1120.6" height="615.727" fill="#3c3230" />
                </svg>
              </Tween>
            )}
          </Scene>
          <Scene triggerElement="#svg-line1" triggerHook={0.8} duration={1000} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                  transformPerspective: '1000px',
                  rotateX: '3deg',
                  rotateY: '10deg',
                  rotateZ: '-7deg',
                  skewY: '5deg',
                }}
                totalProgress={progress}
                paused
              >
                <svg id="svg-line1" viewBox="0 0 895.5 488.1" className={styles['svg-line1']}>
                  <Scene triggerElement="#line1-poly1" triggerHook={0.7} duration={700} reverse={true}>
                    {progress => (
                      <Tween
                        from={{
                          strokeDasharray: 723,
                          strokeDashoffset: 723,
                        }}
                        to={{
                          strokeDasharray: 723,
                          strokeDashoffset: 0,
                        }}
                        totalProgress={progress}
                        paused
                      >
                        <polyline
                          id="line1-ploy1"
                          points="894.5,373.5 894.5,487.1 284.9,487.1"
                          fill="none"
                          stroke="#fff"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                      </Tween>
                    )}
                  </Scene>

                  <Scene triggerElement="#line1-poly2" triggerHook={0.7} duration={700} reverse={true}>
                    {progress => (
                      <Tween
                        from={{
                          strokeDasharray: 1657,
                          strokeDashoffset: 1657,
                        }}
                        to={{
                          strokeDasharray: 1657,
                          strokeDashoffset: 0,
                        }}
                        totalProgress={progress}
                        paused
                      >
                        <polyline
                          id="line1-ploy2"
                          points="215.4,487.1 1,487.1 1,1 894.5,1 894.5,64.1 "
                          fill="none"
                          stroke="#fff"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                      </Tween>
                    )}
                  </Scene>
                </svg>
              </Tween>
            )}
          </Scene>

          <Scene triggerElement="#svg-line2" triggerHook={0.9} duration={1000} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                  transformPerspective: '1000px',
                  rotateX: '5deg',
                  rotateY: '-20deg',
                  rotateZ: '5deg',
                }}
                totalProgress={progress}
                paused
              >
                <svg id="svg-line2" viewBox="0 0 904.241 497.748" className={styles['svg-line2']}>
                  <Scene triggerElement="#line2-rect" triggerHook={0.9} duration={1000} reverse={true}>
                    {progress => (
                      <Tween
                        from={{
                          strokeDasharray: 2795,
                          strokeDashoffset: 2795,
                        }}
                        to={{
                          strokeDasharray: 2795,
                          strokeDashoffset: 0,
                        }}
                        totalProgress={progress}
                        paused
                      >
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
                        />
                      </Tween>
                    )}
                  </Scene>
                </svg>
              </Tween>
            )}
          </Scene>

          <Scene offset={400} triggerHook={0.6} duration={700} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                  translateY: 50,
                }}
                to={{
                  opacity: 1,
                  translateY: 0,
                }}
                totalProgress={progress}
                paused
              >
                <img src={unmeLogo} alt="unme" className={styles['unme-logo']} />
              </Tween>
            )}
          </Scene>

          <Scene offset={400} triggerHook={0.6} duration={500} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                  translateY: 50,
                }}
                to={{
                  opacity: 1,
                  translateY: 0,
                }}
                totalProgress={progress}
                paused
              >
                <h3 className={styles.founder}>
                  Founder of
                  <br />
                  UNME DESIGN
                </h3>
              </Tween>
            )}
          </Scene>

          <Scene offset={600} triggerHook={0.6} duration={500} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                  translateY: 50,
                }}
                to={{
                  opacity: 1,
                  translateY: 0,
                }}
                totalProgress={progress}
                paused
              >
                <h3 className={styles.creator}>
                  Brand Dimension
                  <br />
                  Creator
                </h3>
              </Tween>
            )}
          </Scene>

          <Scene offset={600} triggerHook={0.6} duration={500} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                  translateY: 50,
                }}
                to={{
                  opacity: 1,
                  translateY: 0,
                }}
                totalProgress={progress}
                paused
              >
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
              </Tween>
            )}
          </Scene>

          <Scene offset={600} triggerHook={0.6} duration={500} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                  translateY: 50,
                }}
                to={{
                  opacity: 1,
                  translateY: 0,
                }}
                totalProgress={progress}
                paused
              >
                <ul>
                  <li>#革命式生活</li>
                  <li>#品牌空間設計師</li>
                </ul>
              </Tween>
            )}
          </Scene>
        </div>
        <div className={styles.block2}>
          <Scene triggerElement="#content" triggerHook={0.6} duration={500} reverse={true}>
            {progress => (
              <Tween
                from={{
                  opacity: 0,
                  translateY: 50,
                }}
                to={{
                  opacity: 1,
                  translateY: 0,
                }}
                totalProgress={progress}
                paused
              >
                <div className={styles.content} id="content">
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
              </Tween>
            )}
          </Scene>
          <div className={styles.split}>
            {splitImageData.map(item => {
              return (
                <Scene triggerHook="0.6" duration={300} triggerElement={`#${item.id}`} key={item.id}>
                  {progress => (
                    <Tween to={item.to} totalProgress={progress} paused>
                      <div id={item.id} />
                    </Tween>
                  )}
                </Scene>
              );
            })}
          </div>
        </div>
      </Controller>
    </section>
  );
};

export default Intro;
