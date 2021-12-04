import fs from 'fs';
import matter from 'gray-matter';
import Wrapper from 'components/wrapper';
import Top from './top';
import Model from './model';
import Core from './core';
import BeYourself from './be-yourself';
import Article from './article';
import Life from './life';
import Footer from 'components/footer';
import BottomNav from 'components/bottom-nav';
import { PATH, ARTICLES_POST_PATH } from 'config';

const About = ({ loaded, articleData }) => {
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

  return (
    <Wrapper>
      <Top loaded={loaded} />
      <Model />
      <Core />
      <BeYourself />
      <Article data={articleData} />
      <Life />
      <BottomNav navList={navList} />
      <Footer />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const fileName = fs
    .readdirSync(`${process.cwd()}/${ARTICLES_POST_PATH}`)
    .find(x => x.includes('why-u-can-not-be-yourself'));

  const markdownWithMetadata = fs.readFileSync(`${ARTICLES_POST_PATH}/${fileName}`).toString();
  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      articleData: {
        id: fileName.replace('.md', ''),
        ...data,
        content,
      },
    },
  };
}

export default About;
