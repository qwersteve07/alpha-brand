import Footer from 'components/footer';
import Navbar from 'components/navbar';

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
