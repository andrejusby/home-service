import CategoryCard from "./CategoryCard";
import { categories } from "../../router/category";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default CategoryList;
