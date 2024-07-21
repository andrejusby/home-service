import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import styles from "./CategoryList.module.scss";
import { Category } from "./types";

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
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
