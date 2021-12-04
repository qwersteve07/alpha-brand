import styles from './index.module.sass';
import Divider from '../divider';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider />
      <div className={styles.copyright}>© 2021 Alpha blog. All rights reserved. </div>
    </footer>
  );
};

export default Footer;
