import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import sampleSize from 'lodash/sampleSize';
import uniq from 'lodash/uniq';
import styles from './index.module.sass';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import RelatePosts from 'components/relate-posts';
import Wrapper from 'components/wrapper';
import { PATH, PROJECTS_POST_PATH, ARTICLES_POST_PATH } from 'config';
import UseDeviceType, { DEVICE_MOBILE } from 'utils/use-device-type';
import UseIntersect from 'utils/use-intersect';

const ProjectPost = ({ data, content, id, relate, article, imagesList }) => {
  const deviceType = UseDeviceType();
  const isMobile = deviceType === DEVICE_MOBILE;
  const [isExpand, setIsExpand] = useState(false);
  const galleryRef = useRef();
  const router = useRouter();

  const { setIntersectElements } = UseIntersect();

  // element load
  useEffect(() => {
    const elements = galleryRef.current.childNodes;
    setIntersectElements(elements, id);
  }, [router]);

  const RelateProjects = () => {
    let pickedProjects = sampleSize(relate, 2);
    return pickedProjects.map(({ name, id }) => {
      return (
        <Link href={`${PATH.PROJECTS}/${id}`} key={id}>
          <a className={styles.item}>
            <div className={styles.image} style={{ backgroundImage: `url(/posts/projects/${id}/${id}_1.jpg)` }} />
            <div className={styles.name}>{name}</div>
          </a>
        </Link>
      );
    });
  };

  const Readmore = () => {
    if (!article) return '';
    return (
      <Link href={`${PATH.ARTICLES}/[id]`} as={`${PATH.ARTICLES}/${article.path}`}>
        <a className={styles.readmore}>延伸閱讀 - {story.title}</a>
      </Link>
    );
  };

  return (
    <Wrapper>
      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1>{data.title}</h1>
              <div className={styles.define}>{data.define}</div>
              <div className={styles.slogan}>{data.slogan}</div>
            </div>
            <div className={styles.right}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
              <Readmore />
            </div>
          </div>
          <div className={styles.gallery} ref={galleryRef}>
            {imagesList.map((image, key) => {
              if (image.includes('gif')) {
                return <img src={`/posts/projects/${id}/${image}`} key={key} alt={`${id}${key}`} loading="lazy" />;
              }

              return (
                <picture key={key}>
                  <source srcSet={`/posts/projects/${id}/${image}.webp`} type="image/webp" />
                  <img src={`/posts/projects/${id}/${image}.jpg`} alt={`${id}${key}`} loading="lazy" />
                </picture>
              );
            })}
          </div>
          <RelatePosts type="projects" postData={relate} title="Relate Projects" />
        </div>
      </article>
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(PROJECTS_POST_PATH);
  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  // get story content
  const projectsFiles = fs.readdirSync(`${process.cwd()}/${PROJECTS_POST_PATH}`);
  const projectsData = projectsFiles.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`${PROJECTS_POST_PATH}/${filename}`).toString();
    let { data } = matter(markdownWithMetadata);

    return {
      id: filename.replace('.md', ''),
      name: data.title,
      tags: data.tags,
    };
  });

  // get project images
  // const projectImages = fs.readdirSync(`${process.cwd()}/public/posts/projects/${id}`).filter(x => x !== '.DS_Store');
  // const imagesList = uniq(projectImages.map(x => (!x.includes('gif') ? x.split('.')[0] : x))).sort((a, b) => {
  //   let prev = a.split('.')[0].split('_')[1];
  //   let next = b.split('.')[0].split('_')[1];
  //   if (parseInt(prev) > parseInt(next)) return 1;
  //   if (parseInt(prev) < parseInt(next)) return -1;
  //   return 0;
  // });

  // get all stories for relate
  // const markdownWithMetadata = fs.readFileSync(path.join(PROJECTS_POST_PATH, id + '.md').toString());
  // const { data, content } = matter(markdownWithMetadata);
  // const relate = projectsData
  //   .filter(project => project.tags.some(tag => data.tags.indexOf(tag) !== -1))
  //   .filter(project => project.name !== data.title);

  const articlesFiles = fs.readdirSync(`${process.cwd()}/${ARTICLES_POST_PATH}`);
  const articles = articlesFiles.map(file => {
    const markdownWithMetadata = fs.readFileSync(`${ARTICLES_POST_PATH}/${file}`).toString();
    let { data } = matter(markdownWithMetadata);
    return {
      title: data.title,
      project: data.project,
      path: file.replace('.md', ''),
      link: data.link || '',
    };
  });

  const article = articles.find(x => x.project === id) || '';

  return {
    props: {
      data: {},
      content: {},
      id,
      relate: [],
      article,
      imagesList: [],
    },
  };
};

export default ProjectPost;
