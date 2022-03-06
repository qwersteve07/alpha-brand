import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import matter from 'gray-matter';
import Link from 'next/link';
import { PATH, DOMAIN } from 'config';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import UseDeviceType, { DEVICE_MOBILE } from 'utils/use-device-type';
import { ReactComponent as IconFb } from 'images/icon-share-fb.svg';
import { ReactComponent as IconLine } from 'images/icon-share-line.svg';
import { ReactComponent as IconLinkedIn } from 'images/icon-share-linkedin.svg';
import { ReactComponent as IconLink } from 'images/icon-share-link.svg';
import { useRouter } from 'next/router';
import classnames from 'classnames/bind';
import Wrapper from 'components/wrapper';
import { typeList } from 'config';
import Footer from 'components/footer';
import RelatePosts from 'components/relate-posts';
const cx = classnames.bind(styles);
import axios from 'axios';

const ArticlePost = ({ loaded, postData, relateData }) => {
  const deviceType = UseDeviceType();
  const [isInit, setIsInit] = useState(false);
  const router = useRouter();
  const windowLink = `${DOMAIN}${router.asPath}`;

  useEffect(() => {
    if (loaded) {
      setIsInit(true);
    }
  }, [loaded]);

  const RelateArticles = () => {
    if (relateData.length === 0) return <></>;
    const RelateItem = ({ item }) => {
      const Content = () => {
        return (
          <>
            <div
              className={styles.image}
              style={{ backgroundImage: `url('/posts/articles/${item.id}/${item.id}_1.jpg')` }}
            />
            <div className={styles.name}>{item.title}</div>
          </>
        );
      };

      return (
        <Link href={`${PATH.ARTICLES}/[id]`} as={`${PATH.ARTICLES}/${item.id}`}>
          <a className={styles.item}>
            <Content />
          </a>
        </Link>
      );
    };

    return (
      <div className={styles.relate}>
        <div className={styles.title}>Related Articles</div>
        <div className={styles.group}>
          {relate.map(data => {
            return (
              <div key={data.id}>
                <RelateItem item={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const PostContent = () => {
    return <></>;
  };

  const ShareIconGroup = () => {
    const Copy = () => {
      const [isCopied, setIsCopied] = useState(false);

      useEffect(() => {
        let hideCopied;
        if (isCopied) {
          hideCopied = setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        }
        return () => {
          clearTimeout(hideCopied);
        };
      }, [isCopied]);

      const copiedClass = cx({
        copied: true,
        show: isCopied,
      });

      return (
        <CopyToClipboard text={windowLink} onCopy={() => setIsCopied(true)}>
          <button>
            <IconLink />
            <div className={copiedClass}>已複製</div>
          </button>
        </CopyToClipboard>
      );
    };
    const ShareButton = ({ path, children }) => {
      return (
        <button
          onClick={() => {
            window.open(path, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
          }}
        >
          {children}
        </button>
      );
    };

    const fbHref =
      deviceType === DEVICE_MOBILE
        ? `fb-messenger://share/?link=${windowLink}`
        : `https://www.facebook.com/sharer/sharer.php?u=${windowLink}`;

    return (
      <div className={styles['icon-group']}>
        <ShareButton path={fbHref}>
          <IconFb />
        </ShareButton>

        <ShareButton path={`https://line.me/R/msg/text/?${windowLink}`}>
          <IconLine />
        </ShareButton>

        <ShareButton path={`http://www.linkedin.com/shareArticle?mini=true&url=${windowLink}`}>
          <IconLinkedIn />
        </ShareButton>

        <Copy />
      </div>
    );
  };

  return (
    <Wrapper>
      <article className={styles.post}>
        <div className={styles.content}>
          <h1>{postData.title}</h1>
          <div className={styles.type}>{typeList[postData.types]}</div>
          <img src={postData.cover.url} alt={postData.name} />
          <div className={styles.words}>
            <div className={`${styles.content} ${styles[postData.types]}`}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{postData.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
      <RelatePosts postData={relateData} title="Relate Articles" path={PATH.ARTICLES} />
      <section className={styles.share}>
        <div className={styles.title}>Share</div>
        <ShareIconGroup />
      </section>
      <Footer />
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const result = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-article-posts');
  const paths = result.data.map(item => ({ params: { id: item.ID } }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { id } }) => {
  const result = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-article-posts').then(res => {
    return res.data.map(data => ({
      ...data,
    }));
  });
  const postData = result.find(item => item.ID === id);

  const relateData = result.filter(item => {
    return (
      item.types === postData.types // 選擇同樣類別
      // item.title !== postData.title // 排除自己
    );
  });

  return {
    props: {
      postData,
      relateData,
    },
  };
};

export default ArticlePost;
