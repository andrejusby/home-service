import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Category } from "./types";
import { fetchCategories } from "./api";
import styles from "./VerticalCategoryList.module.scss";

const VerticalCategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
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
