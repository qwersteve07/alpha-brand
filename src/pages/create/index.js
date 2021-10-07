import fs from 'fs';
import Link from 'next/link';
import styles from './index.module.sass';
import Footer from 'components/footer';
import Wrapper from 'components/wrapper';
import { PROJECTS_ARTICLES_PATH } from 'config';
import Smoke from 'components/smoke';

const Create = ({ projectsData, partnersData }) => {
  const Top = () => {
    return (
      <div className={styles.top}>
        <h1>
          Contact
          <br />
          Alpha
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

  const Partner = () => {
    return (
      <section className={styles.clients}>
        <h2>Brand Partner</h2>
        <h3>品牌夥伴</h3>
        <div className={styles.images}>
          {partnersData.map(image => {
            if (projectsData.indexOf(image.id) !== -1) {
              return (
                <div key={image.id}>
                  <Link href={`${PATH.PROJECTS}/${image.id}`}>
                    <a>
                      <img src={image.file} alt="partner" />
                    </a>
                  </Link>
                </div>
              );
            }
            return (
              <div key={image.id}>
                <span>
                  <img src={image.file} alt="" />
                </span>
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  return (
    <Wrapper>
      <Smoke className={styles.smoke} />

      <Top />
      <Partner />
      <Footer />
    </Wrapper>
  );
};

export async function getStaticProps() {
  //   const projectFiles = fs.readdirSync(`${process.cwd()}/${PROJECTS_ARTICLES_PATH}`);
  //   const projectsData = projectFiles.map(filename => filename.replace('.md', ''));
  const projectsData = {};

  const partnersFiles = fs.readdirSync(`${process.cwd()}/public/partners`);
  const partnersData = partnersFiles.map(name => ({
    id: name.replace('.jpg', ''),
    file: `/clients/${name}`,
  }));

  return {
    props: {
      projectsData,
      partnersData,
    },
  };
}

export default Create;
