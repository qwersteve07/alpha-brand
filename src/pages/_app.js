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
  //     return `品牌空間設計推薦作品｜${unmeDesign}｜STORIES`;
  //   } else {
  //     switch (router.pathname) {
  //       case '/':
  //         return `${unmeDesign}｜非我品牌空間設計公司｜貫穿品牌與營運`;
  //       case PATH.PROJECTS:
  //         return `品牌空間規劃 經典設計作品｜${unmeDesign}`;
  //       case PATH.ABOUT:
  //         return `延續品牌本質 品牌空間設計｜${unmeDesign}`;
  //       case PATH.SERVICE:
  //         return `深化品牌形象 打造品牌空間設計｜${unmeDesign}`;
  //       case PATH.CONTACT:
  //         return `聯絡我們｜品牌空間設計規劃｜${unmeDesign}`;
  //       case PATH.STORIES:
  //         return `品牌空間設計推薦作品｜${unmeDesign}｜STORIES`;
  //       case PATH.SOCIAL_SERVICE:
  //         return `品牌空間設計&社會企業專案｜${unmeDesign}`;
  //       case PATH.RESUME:
  //         return `徵才資訊 加入UNME ZOO｜${unmeDesign}`;
  //       default:
  //         return 'UNME';
  //     }
  //   }
  // };

  // const pageDescription = () => {
  //   if (isPost) {
  //     return pageProps.data.ogDescription || pageProps.data.define;
  //   } else if (isStory) {
  //     return '設計之前，更重要的是理解。UNME獨創維度模式的設計，連結企業兩大不可或缺的力量—品牌與營運，理解與設計同步進行，加快品牌建立｜作品故事、設計過程中的洞察文章';
  //   } else {
  //     switch (router.pathname) {
  //       case PATH.PROJECTS:
  //         return '品牌與營運是企業不可或缺的力量，設計是兩者間的橋梁。品牌定位、品牌設計、空間設計、網站設計等一站式規劃，構建時間軸將營運與品牌結合，加速企業建立一致性品牌形象';
  //       case PATH.ABOUT:
  //         return '品牌形象建立來自每一個接觸點。具有營運思維的跨領域設計團隊，獨創維度模式，將設計與營運策略結合，構建企業時間軸，讓商業空間與品牌規劃同步進行，加速品牌空間建立';
  //       case PATH.SERVICE:
  //         return '透過品牌定位與使用者行為解析，獨創維度模式將企業品牌空間設計從點狀延伸擴張至時間軸。讓設計不侷限於單次的合作，而是以品牌旅程夥伴，共創品牌至商業空間的全方位規劃';
  //       case PATH.CONTACT:
  //         return '合作聯繫0912-270-861。全台地區、台北、台中一站式設計服務，品牌空間設計、品牌識別設計、空間設計、社會企業專案合作。具有營運思維的跨領域設計團隊';
  //       case PATH.STORIES:
  //         return '設計之前，更重要的是理解。UNME獨創維度模式的設計，連結企業兩大不可或缺的力量—品牌與營運，理解與設計同步進行，加快品牌建立｜作品故事、設計過程中的洞察文章';
  //       case PATH.SOCIAL_SERVICE:
  //         return '用設計落實社會改變，支持好的行動與理念，我們將每年營收撥出8~10%做為社會專案經費，以更低的費用甚至免費提供專業能力，為社會而設計，與社會企業共同完成一項企劃';
  //       case PATH.RESUME:
  //         return '跨領域專業、斜槓人才等你加入。希望你能掌控上班時間、地點，並好好的讓自己適時放鬆，這裡沒有太多規定，只有四大原則。保持良善、鼓勵發言、為自由負責、重視群體';
  //       default:
  //         return '具有營運思維的跨領域設計團隊，為您量身打造企業品牌。品牌規劃必須同時考量經營面，才能讓品牌形象深而遠。從品牌識別設計到商業空間規劃一站完成，節省跨團隊溝通成本';
  //     }
  //   }
  // };

  let ogTitle = '品牌空間設計師 Alpha｜設計是能夠計算價值的產業，更能夠改變世界。';
  let ogDescription =
    '品牌空間設計是藉由維度的不同審核品牌每一個接觸點的設計方式，不但需要跨領域設計的技能提供具有分析性的品牌策略，並將其數據化後進入後續的維度舖陳。將企業的每一個時間軸、對外形象來客製出一致性的品牌感受外，更藉由這些內容延伸出未來的品牌經營策略。';
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
