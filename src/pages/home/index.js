import Wrapper from 'components/wrapper';
import Top from './top';
import Intro from './intro';
import About from './about';
import Articles from './articles';

const Home = ({ articlesData }) => {
  return (
    <Wrapper>
      <Top />
      <Intro />
      <About />
      <Articles data={articlesData} />
    </Wrapper>
  );
};

export default Home;
