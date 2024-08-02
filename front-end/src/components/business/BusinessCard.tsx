import { Link } from "react-router-dom";
import Button from "../common/Button";
import { Business } from "./types";
import styles from "./BusinessCard.module.scss";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <div className={styles.card}>
      {business.imageUrls.length && (
        <img
          src={business.imageUrls[0]}
          alt={business.name}
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <Link to={`/business/${business._id}`}>
          <Button>Book now</Button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
