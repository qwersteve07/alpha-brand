import Link from 'next/link';
import sampleSize from 'lodash/sampleSize';
import styles from './index.module.sass';

const RelatePosts = ({ title, postData, type }) => {
  if (postData.length === 0)
    return (
      <div className={styles.relate}>
        <div className={styles.title}>{title}</div>
        <div className={styles.posts}>
          {sampleSize(postData, 2).map(({ name, id }) => {
            return (
              <Link href={`${PATH.PROJECTS}/${id}`} key={id}>
                <a className={styles.item}>
                  <div className={styles.image} style={{ backgroundImage: `url(/posts/${type}/${id}/${id}_1.jpg)` }} />
                  <div className={styles.name}>{name}</div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default RelatePosts;
