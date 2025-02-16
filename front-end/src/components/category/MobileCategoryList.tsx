import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "./hooks";
import styles from "./MobileCategoryList.module.scss";

const MobileCategoryList = () => {
  const { data: categories } = useCategories();
  const navigate = useNavigate();
  const { category } = useParams(); 
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue) {
      navigate(`/search/${selectedValue}`);
    }
  };

  return (
      
    <div className={styles.mobileDropdown}>
      <select onChange={handleChange} value={selectedCategory}>
        <option value="">Select Category</option>
        {categories?.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MobileCategoryList;
