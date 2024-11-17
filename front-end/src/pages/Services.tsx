import { useState } from "react";
import BusinessList from "../components/business/BusinessList";
import SearchInput from "../components/common/SearchInput";
import styles from "./Services.module.scss";

const Services = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>All services:</h1>
      <SearchInput
        className={styles.searchInput}
        placeholder="Search for services"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className={styles.cardContainer}>
        <BusinessList searchText={searchText}/>
      </div>
    </main>
  );
};

export default Services;
