import Modal from "../common/Modal";
import Description from "./Description";
import Gallery from "./Gallery";
import SimilarBusiness from "./SimilarBusiness";
import { Business } from "../business/types";
import styles from "./MainSection.module.scss";

interface MainSectionProps {
  business: Business;
}

const MainSection = ({ business }: MainSectionProps) => {
  return (
    <section className={styles.container}>
      <article className={styles.description}>
        <h2>Description</h2>
        <Description />
        <h2>Gallery</h2>
        <Gallery imageUrls={business.imageUrls}/>
      </article>

      <aside>
        <Modal business={business} />
        <SimilarBusiness similarBusiness={business}/>
      </aside>
    </section>
  );
};

export default MainSection;
