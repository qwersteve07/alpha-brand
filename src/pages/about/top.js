import Button from 'components/button';
import { PATH } from 'config';
import styles from './index.module.sass';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import useDeviceType, { DEVICE_MOBILE } from 'utils/use-device-type';
const cx = classnames.bind(styles);

const Top = ({}) => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === DEVICE_MOBILE;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  const topClass = cx({
    top: true,
    loaded,
  });

  const SplitImages = () => {
    let imageList = [];
    for (let i = 0; i < 9; i++) {
      imageList.push(<div key={i} className={styles.split} />);
    }
    return imageList;
  };

  const H2Text = () => {
    if (isMobile)
      return (
        <h2>
          在這裡省下這個世界
          <br />
          所需的項目與抬頭
          <br />
          請跟我玩個遊戲就行
        </h2>
      );
    return <h2>在這裡省下這個世界所需的項目與抬頭，請跟我玩個遊戲就行。</h2>;
  };

  return (
    <header className={topClass}>
      <h1>Alpha</h1>
      <div className={styles.content}>
        <h1>Alpha</h1>
        <H2Text />
        <span>Did you find out the Beta?</span>
        <Button className={styles.button} link={PATH.ABOUT}>
          Enter
        </Button>
      </div>
      <div className={styles.image}>
        <div className={styles['split-container']}>{SplitImages()}</div>
      </div>
    </header>
  );
};

export default Top;
