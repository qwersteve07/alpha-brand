import { Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const SceneElement = ({ triggerElement, triggerHook, duration, process, children }) => {
  return (
    <Scene triggerElement={triggerElement} triggerHook={triggerHook} duration={duration} reverse={true}>
      {progress => (
        <Tween from={process.from} to={process.to} totalProgress={progress} paused>
          {children}
        </Tween>
      )}
    </Scene>
  );
};

export default SceneElement;
