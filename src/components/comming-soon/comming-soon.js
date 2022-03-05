import { PATH } from 'config';
import styles from './index.module.sass';
import Button from 'components/button';

const CommingSoon = ({ loaded }) => {
  return (
    <div className={styles['comming-soon']}>
      <p>
        Coming
        <br />
        Soon...
      </p>
      <svg width="591" height="183" viewBox="0 0 591 183" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className={loaded ? styles.active : ''}
          strokeDasharray={861}
          d="M446.5 1L588 1L349 182L1 182V110.031"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <Button className={styles.button} link={PATH.ABOUT}>
        About
      </Button>
    </div>
  );
};

export default CommingSoon;
