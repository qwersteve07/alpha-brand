import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import fs from 'fs';
import path from 'path';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import matter from 'gray-matter';
import Link from 'next/link';
import { ARTICLES_POST_PATH, PATH, DOMAIN } from 'config';
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

const ArticlePost = ({ loaded, data, content, id, relate }) => {
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
    if (relate.length === 0) return <></>;
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
    return (
      <>
        <div className={`${styles.content} ${styles[data.type]}`}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </div>
      </>
    );
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
          <h1>{data.title}</h1>
          <div className={styles.type}>{typeList[data.type]}</div>
          <picture>
            <source srcSet={`/posts/articles/${id}/${id}_1.webp`} type="image/webp" />
            <img src={`/posts/articles/${id}/${id}_1.jpg`} alt={`${id}_1`} loading="lazy" />
          </picture>
          <div className={styles.words}>
            <PostContent />
          </div>
          <RelatePosts type="articles" postData={relate} title="Relate Projects" />
        </div>
      </article>
      <section className={styles.share}>
        <div className={styles.title}>Share</div>
        <ShareIconGroup />
      </section>
      <Footer />
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(ARTICLES_POST_PATH);
  const paths = files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`${ARTICLES_POST_PATH}/${filename}`).toString();
    let { data } = matter(markdownWithMetadata);
    return {
      params: {
        catag: data.type,
        id: filename.replace('.md', ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const files = fs.readdirSync(`${process.cwd()}/${ARTICLES_POST_PATH}`);
  const articleData = files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`${ARTICLES_POST_PATH}/${filename}`).toString();
    let { data } = matter(markdownWithMetadata);

    return {
      id: filename.replace('.md', ''),
      ...data,
    };
  });

  const markdownWithMetadata = fs.readFileSync(path.join(ARTICLES_POST_PATH, id + '.md').toString());
  const { data, content } = matter(markdownWithMetadata);

  const relate = articleData.filter(article => {
    let isSameCatag = () => {
      if (Array.isArray(data.type)) {
        if (Array.isArray(article.type)) {
          return article.type.some(x => data.type.includes(x));
        }
        return data.type.includes(article.type);
      }

      if (Array.isArray(article.type)) {
        return article.type.includes(data.type);
      }
      return article.type === data.type;
    };
    return (
      isSameCatag() && // 選擇同樣類別
      article.title !== data.title && // 排除自己
      article.id !== data.relate //  排除指定 relate
    );
  });

  const relateAritcles = () => {
    if (!data.relate) return sampleSize(relate, 2);
    return [articleData.find(article => article.id === data.relate), ...sampleSize(relate, 1)];
  };

  return {
    props: {
      data,
      content,
      id,
      relate: [],
    },
  };
};

export default ArticlePost;
