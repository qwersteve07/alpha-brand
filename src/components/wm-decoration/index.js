import { Controller } from 'react-scrollmagic';
import styles from './index.module.sass';
import SceneElement from 'components/scene-el';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const WMdecoration = ({ width, reverse }) => {
  return (
    <div className={cx({ 'wm-decoration': true, reverse })} style={{ width: width, height: width * 0.8 }}>
      <Controller>
        <SceneElement
          triggerElement="#wm-line1"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: -10,
            },
          }}
        >
          <div id="wm-line1" style={{ height: width * 0.8 }} />
        </SceneElement>
        <SceneElement
          triggerElement="#wm-line2"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: 8,
            },
          }}
        >
          <div id="wm-line2" style={{ height: width * 0.73 }} />
        </SceneElement>

        <SceneElement
          triggerElement="#wm-line3"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: -12,
            },
          }}
        >
          <div id="wm-line3" style={{ height: width * 0.6 }} />
        </SceneElement>

        <SceneElement
          triggerElement="#wm-line4"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: 8,
            },
          }}
        >
          <div id="wm-line4" style={{ height: width * 0.52 }} />
        </SceneElement>

        <SceneElement
          triggerElement="#wm-line5"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: 8,
            },
          }}
        >
          <div id="wm-line5" style={{ height: width * 0.45 }} />
        </SceneElement>

        <SceneElement
          triggerElement="#wm-line6"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: -10,
            },
          }}
        >
          <div id="wm-line6" style={{ height: width * 0.5 }} />
        </SceneElement>

        <SceneElement
          triggerElement="#wm-line7"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: 8,
            },
          }}
        >
          <div id="wm-line7" style={{ height: width * 0.6 }} />
        </SceneElement>

        <SceneElement
          triggerElement="#wm-line8"
          triggerHook={0.8}
          duration={400}
          process={{
            from: {
              rotate: 0,
            },
            to: {
              rotate: -8,
            },
          }}
        >
          <div id="wm-line8" style={{ height: width * 0.73 }} />
        </SceneElement>
      </Controller>
    </div>
  );
};

export default WMdecoration;
