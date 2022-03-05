import Wrapper from 'components/wrapper';
import Top from './top';
import Intro from './intro';
import About from './about';
import Articles from './articles';
import BackToTop from 'components/back-to-top';

const Home = () => {
  return (
    <Wrapper>
      <BackToTop />
      <Top />
      <Intro />
      <About />
      <Articles />
    </Wrapper>
  );
};

export default Home;
