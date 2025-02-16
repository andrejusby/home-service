import CategoryCard from "./CategoryCard";
import MobileCategoryList from "./MobileCategoryList";
import { useCategories } from "./hooks";
import styles from "./VerticalCategoryList.module.scss";

const VerticalCategoryList = () => {
  const { data: categories } = useCategories();

  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      <MobileCategoryList />
      <div className={styles.categoryList}>
        {categories?.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default VerticalCategoryList;
