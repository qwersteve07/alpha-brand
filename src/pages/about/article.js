import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styles from './index.module.sass';

const Article = ({ data = {} }) => {
  return (
    <section className={styles.article}>
      <svg className={styles['svg-bg']} viewBox="0 0 1120.6 615.727">
        <rect width="1120.6" height="615.727" fill="#3c3230" />
      </svg>
      <div className={styles.post}>
        <img src="/photo2.png" />
        <div className={styles.content}>
          <span className={styles.tag}>#{data.types}</span>
          <h2>{data.title}</h2>
          <img src="/photo2.png" />
          <div className={styles.paragraph}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
