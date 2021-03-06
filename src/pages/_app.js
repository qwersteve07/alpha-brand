import { useEffect, useState } from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import emailjs from 'emailjs-com';
import smoothscroll from 'smoothscroll-polyfill';
import 'lazysizes';

// add global css
import 'styles/normalize.css';
import 'styles/base.sass';

// add css-transition-group css
import 'pages/articles/transition.css';
import { DOMAIN, serviceId } from 'config';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
    emailjs.init(serviceId);
  }, []);

  // set init css variable
  useEffect(() => {
    let h = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${h}px`);
    document.documentElement.style.setProperty('--initVh', `${h}px`);

    const onResize = () => {
      let h = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${h}px`);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // let isPost = router.query?.id;

  // const pageImage = () => {
  //   if (isPost) {
  //     return pageProps.postData.cover?.url;
  //   } else if (isStory) {
  //     return 'https://unmedesign.co/og-image-stories.jpg';
  //   } else {
  //     switch (router.pathname) {
  //       case PATH.ABOUT:
  //         return 'https://unmedesign.co/og-image-about.jpg';
  //       case PATH.SERVICE:
  //         return 'https://unmedesign.co/og-image-service.jpg';
  //       case PATH.CONTACT:
  //         return 'https://unmedesign.co/og-image-contact.jpg';
  //       case PATH.STORIES:
  //         return 'https://unmedesign.co/og-image-stories.jpg';
  //       case PATH.SOCIAL_SERVICE:
  //         return 'https://unmedesign.co/og-image-social-service.jpg';
  //       default:
  //         return 'https://unmedesign.co/og-image.jpg';
  //     }
  //   }
  // };

  // const pageTitle = () => {
  //   const unmeDesign = 'UNME DESIGN';
  //   if (isPost) {
  //     return `${pageProps.data.ogTitle || pageProps.data.title} | ${unmeDesign}`;
  //   } else if (isStory) {
  //     return `?????????????????????????????????${unmeDesign}???STORIES`;
  //   } else {
  //     switch (router.pathname) {
  //       case '/':
  //         return `${unmeDesign}?????????????????????????????????????????????????????????`;
  //       case PATH.PROJECTS:
  //         return `?????????????????? ?????????????????????${unmeDesign}`;
  //       case PATH.ABOUT:
  //         return `?????????????????? ?????????????????????${unmeDesign}`;
  //       case PATH.SERVICE:
  //         return `?????????????????? ???????????????????????????${unmeDesign}`;
  //       case PATH.CONTACT:
  //         return `??????????????????????????????????????????${unmeDesign}`;
  //       case PATH.STORIES:
  //         return `?????????????????????????????????${unmeDesign}???STORIES`;
  //       case PATH.SOCIAL_SERVICE:
  //         return `??????????????????&?????????????????????${unmeDesign}`;
  //       case PATH.RESUME:
  //         return `???????????? ??????UNME ZOO???${unmeDesign}`;
  //       default:
  //         return 'UNME';
  //     }
  //   }
  // };

  // const pageDescription = () => {
  //   if (isPost) {
  //     return pageProps.data.ogDescription || pageProps.data.define;
  //   } else if (isStory) {
  //     return '???????????????????????????????????????UNME??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //   } else {
  //     switch (router.pathname) {
  //       case PATH.PROJECTS:
  //         return '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //       case PATH.ABOUT:
  //         return '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //       case PATH.SERVICE:
  //         return '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //       case PATH.CONTACT:
  //         return '????????????0912-270-861???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //       case PATH.STORIES:
  //         return '???????????????????????????????????????UNME??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //       case PATH.SOCIAL_SERVICE:
  //         return '???????????????????????????????????????????????????????????????????????????????????????8~10%??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //       case PATH.RESUME:
  //         return '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //       default:
  //         return '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  //     }
  //   }
  // };

  let ogTitle = '????????????????????? Alpha??????????????????????????????????????????????????????????????????';
  let ogDescription =
    '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';
  let ogUrl = `${DOMAIN}${router.asPath}`;
  let ogImage = `${DOMAIN}/og-image.jpg`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        additionalMetaTags={[
          {
            name: 'viewport',
            content:
              'user-scalable=no,width=device-width,initial-scale=1,shrink-to-fit=no,minimum-scale=1,maximum-scale=1,viewport-fit=cover',
          },
        ]}
        title={ogTitle}
        description={ogDescription}
        openGraph={{
          url: ogUrl,
          title: ogTitle,
          description: ogDescription,
          locale: 'zh_TW',
          type: 'website',
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
            },
          ],
          site_name: ogTitle,
        }}
      />
      <Component {...pageProps} loaded={loaded} />
    </>
  );
};

export default App;
