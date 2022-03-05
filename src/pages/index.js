import Home from 'pages/home';
import axios from 'axios';
import sampleSize from 'lodash/sampleSize';

const IndexPage = ({ articlesData }) => {
  return <Home articlesData={articlesData} />;
};

export default IndexPage;
