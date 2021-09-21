import styles from './index.module.sass';
import Footer from 'components/footer';
import Navbar from 'components/navbar';

const Wrapper = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Wrapper;
