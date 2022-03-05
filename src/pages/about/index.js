import Wrapper from 'components/wrapper';
import Top from './top';
import Model from './model';
import Core from './core';
import BeYourself from './be-yourself';
import Article from './article';
import Life from './life';
import Footer from 'components/footer';
import BottomNav from 'components/bottom-nav';
import axios from 'axios';
import sampleSize from 'lodash/sampleSize';

const About = ({ loaded, articlesData }) => {
  return (
    <Wrapper>
      <Top loaded={loaded} />
      <Model />
      <Core />
      <BeYourself />
      <Article data={sampleSize(articlesData, 1)[0]} />
      <Life />
      <BottomNav navList={['articles', 'projects']} />
      <Footer />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const result = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-article-posts').then(res => {
    return res.data.map(data => ({
      ...data,
    }));
  });

  return {
    props: {
      articlesData: result,
    },
  };
}

export default About;
