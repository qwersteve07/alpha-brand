import { useEffect } from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import smoothscroll from 'smoothscroll-polyfill';
// add global css
import 'styles/base.sass';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return <Component {...pageProps} />;
};

export default App;
