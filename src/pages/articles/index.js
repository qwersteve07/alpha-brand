import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './index.module.sass';
import Wrapper from 'components/wrapper';
import Footer from 'components/footer';
import arrowfilter from 'images/arrow_filter.svg';
import { ReactComponent as ArrowSlide } from 'images/arrow_slide.svg';
import useDeviceType, { DEVICE_DESKTOP } from 'utils/use-device-type';
import axios from 'axios';
import { PATH, typeList, BRAND_DIMENSION, STARTUP_VALUES } from 'config';
import CommingSoon from 'components/comming-soon';

const cx = classnames.bind(styles);

const Catag = ({ currentCatag, setCurrentCatag }) => {
  const router = useRouter();
  const deviceType = useDeviceType();
  const [expandFilter, setExpandFilter] = useState(false);
  const scrollPos = useRef(0);

  //   進入頁面時自動補齊 query
  useEffect(() => {
    let search = router.asPath.split('=')[1];
    if (!search) {
      router.replace(`${PATH.ARTICLES}?catag=all`);
      setCurrentCatag('all');
    } else {
      setCurrentCatag(search);
    }
  }, [router]);

  // 切換 routing 時停在原本的位置
  useEffect(() => {
    window.scrollTo(0, scrollPos.current);
  }, [router]);

  // 紀錄 scrollTop
  useEffect(() => {
    const handleScrollPos = () => {
      scrollPos.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScrollPos);
    return () => {
      window.removeEventListener('scroll', handleScrollPos);
    };
  }, []);

  // 手機版 UI

  if (deviceType !== DEVICE_DESKTOP) {
    const currentClass = cx({
      current: true,
      active: expandFilter,
    });
    const filterClass = cx({
      filter: true,
      expand: expandFilter,
    });
    return (
      <div className={styles.catag}>
        <div className={currentClass} onClick={() => setExpandFilter(!expandFilter)}>
          <img src={arrowfilter} alt="arrow" />
          {typeList[currentCatag]}
        </div>
        <ul className={filterClass}>
          {Object.entries(typeList).map(item => {
            const itemId = item[0];
            const itemText = item[1];
            return (
              <li
                key={itemId}
                onClick={() => {
                  setExpandFilter(false);
                  setCurrentCatag(itemId);
                }}
              >
                <Link
                  href={{
                    pathname: PATH.ARTICLES,
                    query: { catag: itemId },
                  }}
                  replace
                >
                  <a>{itemText}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <ul className={styles.catag}>
      {Object.entries(typeList).map(item => {
        const itemId = item[0];
        const itemText = item[1];
        const active = itemId === currentCatag;
        const itemClass = cx({ active });
        return (
          <li className={itemClass} key={itemId} onClick={() => setCurrentCatag(itemId)}>
            <Link
              href={{
                pathname: PATH.ARTICLES,
                query: { catag: itemId },
              }}
              replace
            >
              <a>{itemText}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const FeatureSlider = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const featureSliderRef = useRef();
  const onSlideChange = e => {
    let newIndex = () => {
      const length = items.length;
      if (e.snapIndex === 0) return length - 1;
      if (e.snapIndex === length + 1) return 0;
      return e.snapIndex - 1;
    };
    setSlideIndex(newIndex());
  };

  const onPrevItem = () => featureSliderRef.current.slidePrev();
  const onNextItem = () => featureSliderRef.current.slideNext();

  if (items.length === 0) return <></>;

  return (
    <>
      <Swiper onSwiper={e => (featureSliderRef.current = e)} onSlideChange={onSlideChange}>
        {items.map(item => {
          return (
            <SwiperSlide key={item.ID}>
              <Link href={`${PATH.ARTICLES}/[id]`} as={`${PATH.ARTICLES}/${item.ID}`}>
                <a>
                  <div className={styles.image} style={{ backgroundImage: `url(${item.cover.url})` }} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
        <ArrowSlide onClick={onPrevItem} className={styles.arrow} />
        <ArrowSlide onClick={onNextItem} className={`${styles.arrow} ${styles.right}`} />
      </Swiper>
      <div className={styles.content}>
        <div className={styles.title}>{items[slideIndex].title}</div>
        <div className={styles.intro}>{items[slideIndex].description}</div>
      </div>
    </>
  );
};

const ArticlesList = ({ catag, article, loaded }) => {
  if (catag === BRAND_DIMENSION || catag === STARTUP_VALUES) {
    return <CommingSoon loaded={loaded} />;
  }

  return article
    .filter(x => {
      if (catag === 'all') return x;
      return x.types === catag;
    })
    .map(item => {
      return (
        <li className={styles.article} key={item.ID}>
          <Link href={`${PATH.ARTICLES}/[id]`} as={`${PATH.ARTICLES}/${item.ID}`}>
            <a className={styles.thumbnail} style={{ backgroundImage: `url(${item.cover.url})` }} />
          </Link>
          <div className={styles.type}>{typeList[item.types]}</div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.intro}>{item.description}</div>
        </li>
      );
    });
};

const Articles = ({ articlesData }) => {
  const [articleSwitchLoaded, setArticleSwitchLoaded] = useState(false);
  const [currentCatag, setCurrentCatag] = useState('all');
  const featurePosts = articlesData.filter(x => x.feature);

  return (
    <Wrapper>
      <section className={styles.feature}>
        <FeatureSlider items={featurePosts} />
      </section>
      <section className={styles.articles}>
        <Catag currentCatag={currentCatag} setCurrentCatag={setCurrentCatag} />
        <SwitchTransition>
          <CSSTransition
            key={currentCatag}
            addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
            classNames="fade"
            onEntered={() => setArticleSwitchLoaded(true)}
            onExit={() => setArticleSwitchLoaded(false)}
          >
            <ul className={styles.list}>
              <ArticlesList article={articlesData} catag={currentCatag} loaded={articleSwitchLoaded} />
            </ul>
          </CSSTransition>
        </SwitchTransition>
      </section>
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

export default Articles;
