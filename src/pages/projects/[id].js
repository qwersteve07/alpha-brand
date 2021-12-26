import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.sass';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import RelatePosts from 'components/relate-posts';
import Wrapper from 'components/wrapper';
import { PATH } from 'config';
import UseDeviceType, { DEVICE_MOBILE } from 'utils/use-device-type';
import UseIntersect from 'utils/use-intersect';
import Footer from 'components/footer';
import axios from 'axios';

const ProjectPost = ({ postData, relateData }) => {
  const deviceType = UseDeviceType();
  const isMobile = deviceType === DEVICE_MOBILE;
  const [isExpand, setIsExpand] = useState(false);
  const galleryRef = useRef();
  const router = useRouter();

  const { setIntersectElements } = UseIntersect();

  // element load
  useEffect(() => {
    const elements = galleryRef.current.childNodes;
    setIntersectElements(elements, postData.ID);
  }, [router]);

  return (
    <Wrapper>
      <article className={styles['project-post']}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1>{postData.title}</h1>
              <div className={styles.define}>{postData.description}</div>
              <div className={styles.slogan}>{postData.slogan}</div>
            </div>
            <div className={styles.right}>
              <h3>品牌夥伴</h3>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{postData.cooperate}</ReactMarkdown>
            </div>
          </div>
          <div className={styles.gallery} ref={galleryRef}>
            {postData.photos.map((image, key) => {
              return <img src={image.url} alt={`${postData.ID}${key}`} loading="lazy" />;
            })}
          </div>
        </div>
      </article>
      <RelatePosts path={PATH.PROJECTS} postData={relateData} title="Relate Projects" />
      <Footer />
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const result = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-project-posts');
  const paths = result.data.map(item => ({ params: { id: item.ID } }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { id } }) => {
  const result = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-project-posts').then(res => {
    return res.data.map(data => ({
      ...data,
      photos: data.photos.sort((a, b) => {
        let aNum = a.name.split('_')[1].split('.')[0];
        let bNum = b.name.split('_')[1].split('.')[0];
        return aNum - bNum;
      }),
    }));
  });
  const postData = result.find(item => item.ID === id);

  console.log(postData);

  // get all projects for relate
  const relateData = result.filter(item => item.types === postData.types && item.title !== postData.title);

  return {
    props: {
      postData,
      relateData,
    },
  };
};

export default ProjectPost;
