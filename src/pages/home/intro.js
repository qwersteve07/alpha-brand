import styles from './index.module.sass';
import unmeLogo from 'images/unme_logo.svg';
import { Controller, Scene } from 'react-scrollmagic';
import dynamic from 'next/dynamic';
import { Tween } from 'react-gsap';
// import Splitting from 'splitting';
import { useEffect } from 'react';
// const Splitting = dynamic(() => import('splitting').then(mod => mod.default), { ssr: false });
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

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
                  rotateY: '20deg',
                  rotateZ: '-5deg',
                  skewY: '5deg',
                }}
                totalProgress={progress}
                paused
              >
                <svg viewBox="0 0 895.501 488.07" className={styles['svg-line1']}>
                  <Scene triggerElement="#line1-poly1" triggerHook={0.7} duration={700} reverse={true}>
                    {progress => (
                      <Tween
                        from={{
                          strokeDasharray: 700,
                          strokeDashoffset: 700,
                        }}
                        to={{
                          strokeDasharray: 700,
                          strokeDashoffset: 0,
                        }}
                        totalProgress={progress}
                        paused
                      >
                        <polyline
                          id="line1-ploy1"
                          points="894.501 329.643 894.501 487.07 369.855 487.07"
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
                          strokeDasharray: 1700,
                          strokeDashoffset: 1700,
                        }}
                        to={{
                          strokeDasharray: 1700,
                          strokeDashoffset: 0,
                        }}
                        totalProgress={progress}
                        paused
                      >
                        <polyline
                          id="line1-ploy2"
                          points="256.05 487.07 1 487.07 1 1 894.501 1 894.501 64.095"
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
                          strokeDasharray: 2800,
                          strokeDashoffset: 2800,
                        }}
                        to={{
                          strokeDasharray: 2800,
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
                  Dimension
                  <br />
                  design creator
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
                <h4 className={styles.title}>品牌空間設計師</h4>
                <p>
                  現為「非我品牌空間設計」創辦人，這裡純粹就是革命式創業的個人網站
                  <br />
                  專門寫一些生活態度跟講課內容，專們嘴一些設計與道德上的謬誤
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
                <h4 className={styles.title}>品牌空間設計師</h4>
                <p>
                  現為「非我品牌空間設計」創辦人，這裡純粹就是革命式創業的個人網站
                  <br />
                  專門寫一些生活態度跟講課內容，專們嘴一些設計與道德上的謬誤
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
      </Controller>
      <Controller>
        <div className={styles.block2}>
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
                <h4> I’m α (Alpha) </h4>
                <p>
                  現為「非我品牌空間設計」創辦人
                  <br />
                  這裡純粹就是革命式創業的個人網站
                  <br />
                  專門寫一些生活態度跟講課內容
                  <br />
                  專們嘴一些設計與道德上的謬誤
                </p>
              </Tween>
            )}
          </Scene>
          <div className={styles.split}>
            {splitImageData.map(item => {
              return (
                <Scene triggerHook="0.7" duration={300} offset={300} triggerElement={`#${item.id}`} key={item.id}>
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
