import { useParams } from "react-router-dom";
import { useBusinesses } from "../components/business/hooks";
import styles from "./BusinessPage.module.scss";
import TopSection from "../components/businessAppointment/TopSection";
import MainSection from "../components/businessAppointment/MainSection";

const BusinessPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useBusinesses();
  const business = data?.find((business) => business._id === id);

  if (!business) {
    console.error(`Businesses with id ${id} not found`);
    return <h1>Business not found</h1>;
  }

  return (
    <main className={styles.container}>
      <TopSection business={business} />
      <div className={styles.contain}>
        <MainSection business={business} />
      </div>
    </main>
  );
};

export default BusinessPage;
