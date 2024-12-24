import { Business } from "../business/types";
import styles from "./SimilarBusiness.module.scss";

interface SimilarBusinessProp {
    similarBusiness: Business
}

const SimilarBusiness = ({ similarBusiness}: SimilarBusinessProp) => {
  return (
    <article>
      <h2 className={styles.sbTitle}>Similar business</h2>
      <div className={styles.similarBusiness}>
        <div className={styles.item}>
          <div>
            <img
              src={similarBusiness.imageUrls[0]}
              alt={similarBusiness.name}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h4>{similarBusiness.name}</h4>
            <p>{similarBusiness.contactPerson}</p>
            <p>{similarBusiness.address}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SimilarBusiness;
