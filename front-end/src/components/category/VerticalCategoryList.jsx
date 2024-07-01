import { categories } from "../../router/category"
// import { categories } from "../../consts/category";
import CategoryCard from "./CategoryCard";
import styles from "./VerticalCategoryList.module.css";

const VerticalCategoryList = () => {
  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default VerticalCategoryList;
