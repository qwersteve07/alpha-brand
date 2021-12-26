import Wrapper from 'components/wrapper';
import Top from './top';
import Model from './model';
import Core from './core';
import BeYourself from './be-yourself';
import Article from './article';
import Life from './life';
import Footer from 'components/footer';
import BottomNav from 'components/bottom-nav';
import { PATH } from 'config';
import axios from 'axios';
import sampleSize from 'lodash/sampleSize';

const navList = [
  {
    path: PATH.ARTICLES,
    image: '/contact_articles.jpg',
    text: 'Articles',
  },
  {
    path: PATH.ABOUT,
    image: '/contact_about.jpg',
    text: 'About',
  },
];

const About = ({ loaded, articlesData }) => {
  return (
    <Wrapper>
      <Top loaded={loaded} />
      <Model />
      <Core />
      <BeYourself />
      <Article data={sampleSize(articlesData, 1)[0]} />
      <Life />
      <BottomNav navList={navList} />
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
