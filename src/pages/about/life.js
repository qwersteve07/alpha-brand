import WMdecoration from 'components/wm-decoration';
import { useEffect, useState } from 'react';
import styles from './index.module.sass';
import useDeviceType, { DEVICE_MOBILE, DEVICE_PAD } from 'utils/use-device-type';

const Life = () => {
  const [decoWidth, setDecoWidth] = useState(300);
  const deviceType = useDeviceType();

  useEffect(() => {
    switch (deviceType) {
      case DEVICE_PAD:
        setDecoWidth(220);
        break;
      case DEVICE_MOBILE:
        setDecoWidth(100);
        break;
      default:
        setDecoWidth(300);
    }
  }, [deviceType]);

  return (
    <section className={styles.life}>
      <div className={styles.title}>
        <h3>革命式生活</h3>
        <span>Revolutionary Living</span>
      </div>
      <div className={styles.content}>
        <WMdecoration width={decoWidth} />
        <p>
          這世界的革命都源自於生活上的不滿
          <br />
          接受所有情緒認清自己成為真正的你
        </p>
        <WMdecoration width={decoWidth} reverse={true} />
      </div>
    </section>
  );
};

export default Life;
