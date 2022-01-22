import Wrapper from 'components/wrapper';
import Top from './top';
import Intro from './intro';
import About from './about';
import Articles from './articles';
import BackToTop from 'components/back-to-top';

const Home = ({ articlesData }) => {
  return (
    <Wrapper>
      <BackToTop />
      <Top />
      <Intro />
      <About />
      <Articles data={articlesData} />
    </Wrapper>
  );
};

export default Home;
