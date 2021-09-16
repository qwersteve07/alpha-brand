import styles from './index.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.deco} />
      <div className={styles.copyright}>© 2021 Alpha blog. All rights reserved. </div>
    </footer>
  );
};

export default Footer;
