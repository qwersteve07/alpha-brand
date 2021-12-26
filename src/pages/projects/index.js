import Link from 'next/link';
import styles from './index.module.sass';
import Footer from 'components/footer';
import Wrapper from 'components/wrapper';
import Smoke from 'components/smoke';
import Divider from 'components/divider';
import useDeviceType, { DEVICE_MOBILE } from 'utils/use-device-type';
import axios from 'axios';

const Projects = ({ projectsData }) => {
  const deviceType = useDeviceType();
  const Top = () => {
    return (
      <div className={styles.top}>
        <h1>
          Alpha
          <br />
          Created...
        </h1>
        <div className={styles.desc}>
          <p>
            這裡有我過往經驗中規劃設計的所有作品。
            <br />
            包含成立「非我品牌空間設計」後，
            <br />
            創立的品牌維度設計方式。
            <br />
            你可以從這裡找到我的顧問服務夥伴，
            <br />
            以及過往的所有媒體採訪、課程、演講資訊。
          </p>
          {deviceType === DEVICE_MOBILE && <Divider />}

          <p>
            <b>Brand Dimension</b>
            ○ 品牌顧問 Brand Consulting
            <br />
            ○ 空間設計 Interior Design
            <br />
            ○ 品牌設計 Brand Identity
            <br />○ 年約規劃 Annual planning
          </p>
          <p>
            <b>Possess</b>
            ○ 採訪與報導
            <br />
            ○ 演講與課程
            <br />○ 品牌顧問夥伴
          </p>
        </div>
      </div>
    );
  };

  const ProjectsList = () => {
    return (
      <section className={styles.projects}>
        {projectsData.map(data => {
          const { title, slogan, ID, cover } = data;

          return (
            <Link href={`/projects/[id]`} as={`/projects/${ID}`} key={ID}>
              <a className={styles.project}>
                <div className={`${styles.image}`} style={{ backgroundImage: `url(${cover.url})` }} />
                <div className={styles.info}>
                  <h4>{title}</h4>
                  <p>{slogan}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </section>
    );
  };

  const PartnersList = () => {
    return (
      <section className={styles.partners}>
        <h2>Brand Partner</h2>
        <h3>品牌夥伴</h3>
        <ul>
          {projectsData.map(item => {
            return (
              <li key={item.id}>
                <img src={item.logo.url} alt={item.id} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  };
  return (
    <Wrapper>
      <Smoke className={styles.smoke} />
      <Top />
      <ProjectsList />
      <PartnersList />
      <Footer />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const result = await axios.get('https://unme-backend.herokuapp.com/alpha-brand-project-posts').then(res => {
    return res.data.map(data => ({
      ...data,
    }));
  });

  return {
    props: {
      projectsData: result,
    },
  };
}

export default Projects;
