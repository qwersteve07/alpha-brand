import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import styles from './index.module.sass';
import Footer from 'components/footer';
import Wrapper from 'components/wrapper';
import Smoke from 'components/smoke';
import Divider from 'components/divider';
import { PROJECTS_POST_PATH } from 'config';
import useDeviceType, { DEVICE_MOBILE } from 'utils/use-device-type';

const Projects = ({ projectsData, partnersData }) => {
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
          const { title, define, id, projectName } = data;

          return (
            <Link href={`/projects/[id]`} as={`/projects/${id}`} key={id}>
              <a className={styles.project}>
                <div className={`${styles.image}`} style={{ backgroundImage: `url('/projects/${id}/${id}_1.jpg')` }} />
                <div className={styles.info}>
                  <h4>{title}</h4>
                  <p>
                    {projectName}
                    <br />
                    {define}
                  </p>
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
          {partnersData.map(image => {
            return (
              <li key={image.id}>
                <img src={image.file} alt={image.id} />
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
  const projectFiles = fs.readdirSync(`${process.cwd()}/${PROJECTS_POST_PATH}`);
  const projectsData = projectFiles.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`${PROJECTS_POST_PATH}/${filename}`).toString();

    let { data } = matter(markdownWithMetadata);

    return {
      id: filename.replace('.md', ''),
      ...data,
    };
  });

  const partnersFiles = fs.readdirSync(`${process.cwd()}/public/partners`);
  const partnersData = partnersFiles.map(name => ({
    id: name.replace('.jpg', ''),
    file: `/partners/${name}`,
  }));

  return {
    props: {
      projectsData,
      partnersData,
    },
  };
}

export default Projects;
