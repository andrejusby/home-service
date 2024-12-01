import classNames from "classnames";
import BusinessCard from "./BusinessCard";
import { Category } from "../category/types";
import styles from "./BusinessList.module.scss";
import { useBusinesses } from "./hooks";

interface BusinessListProps {
  categoryName?: Category["name"];
  className?: string;
  searchText?: string;
  limit?: number; 
}

const BusinessList = ({
  categoryName,
  className,
  searchText,
  limit
}: BusinessListProps) => {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  const filteredBusiness = businesses.filter((business) => {
    const matchesCategory = categoryName
      ? business.category === categoryName
      : true;
    const matchesSearch = searchText
      ? business.name.toLowerCase().includes(searchText.toLowerCase()) ||
        business.about.toLowerCase().includes(searchText.toLowerCase()) ||
        business.category.toLowerCase().includes(searchText.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const limitedBusiness = limit ? filteredBusiness.slice(0, limit) : filteredBusiness;

  return (
    <div className={classNames(styles.container, className)}>
      {limitedBusiness.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
