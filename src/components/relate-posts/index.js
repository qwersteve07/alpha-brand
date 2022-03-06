import Link from 'next/link';
import sampleSize from 'lodash/sampleSize';
import styles from './index.module.sass';
import WMdecoration from 'components/wm-decoration';
import { typeList } from 'config';
import useDeviceType, { DEVICE_MOBILE } from 'utils/use-device-type';

const RelatePosts = ({ title, postData, path }) => {
  if (postData.length === 0) return <></>;

  const deviceType = useDeviceType();

  return (
    <div className={styles.relate}>
      <div className={styles.title}>{title}</div>
      <div className={styles.group}>
        <WMdecoration width={deviceType === DEVICE_MOBILE ? 100 : 220} />
        <div className={styles.posts}>
          {sampleSize(postData, 2).map(item => {
            return (
              <Link href={`${path}/${item.ID}`} key={item.ID}>
                <a className={styles.item}>
                  <div className={styles.image} style={{ backgroundImage: `url(${item.cover.url})` }} />
                  <div className={styles.type}>{typeList[item.types]}</div>
                  <div className={styles.name}>{item.title}</div>
                </a>
              </Link>
            );
          })}
        </div>
        <WMdecoration width={deviceType === DEVICE_MOBILE ? 100 : 220} reverse={true} />
      </div>
    </div>
  );
};

export default RelatePosts;
