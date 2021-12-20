import Home from 'pages/home';
import axios from 'axios';
import sampleSize from 'lodash/sampleSize';

const IndexPage = ({ articlesData }) => {
  return <Home articlesData={articlesData} />;
};

export async function getStaticProps() {
  const result = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-article-posts').then(res => {
    return res.data.map(data => ({
      ...data,
    }));
  });

  return {
    props: {
      articlesData: sampleSize(result, 3),
    },
  };
}

export default IndexPage;
