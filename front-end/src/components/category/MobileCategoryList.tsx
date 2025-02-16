import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "./hooks";
import styles from "./MobileCategoryList.module.scss";

const MobileCategoryList = () => {
  const { data: categories } = useCategories();
  const navigate = useNavigate();
  const { category } = useParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/search/${selectedValue}`);
    }
  };

  return (
    <div className={styles.mobileDropdown}>
      <select onChange={handleChange} value={category || ""}>
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
