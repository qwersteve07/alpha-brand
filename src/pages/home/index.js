import Wrapper from 'components/wrapper';
import Top from './top';
import Intro from './intro';
import Articles from './articles';

const Home = ({ articlesData }) => {
  return (
    <Wrapper>
      <Top />
      <Intro />
      <Articles data={articlesData} />
    </Wrapper>
  );
};

export default Home;
