import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Category } from "./types";
import styles from "./VerticalCategoryList.module.scss";

const VerticalCategoryList = () => {
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
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default VerticalCategoryList;
