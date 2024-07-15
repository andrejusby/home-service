import { useParams } from "react-router-dom";
import VerticalCategoryList from "@/components/category/VerticalCategoryList";
import BusinessList from "@/components/business/BusinessList";
import styles from "./SearchCategory.module.scss";

const SearchCategory = () => {
  const { category } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <VerticalCategoryList />
      </div>
      <div className={styles.categoryContainer}>
        <h2 className={styles.title}>{category}</h2>
        <BusinessList category={category} />
      </div>
    </div>
  );
};

export default SearchCategory;
