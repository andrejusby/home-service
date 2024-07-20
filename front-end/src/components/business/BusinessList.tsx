import classNames from "classnames";
import BusinessCard from "./BusinessCard";
import { Category } from "../category/types";
import { businesses } from "./consts";
import styles from "./BusinessList.module.scss";

interface BusinessListProps {
  categoryName?: Category['name']
  className?: string
}

const BusinessList = ({ categoryName, className }: BusinessListProps) => {
  const filteredBusiness = categoryName
    ? businesses.filter((business) => business.category === categoryName)
    : businesses;
  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusiness.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;