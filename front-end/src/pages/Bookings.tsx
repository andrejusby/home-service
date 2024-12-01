import BookingsList from "../components/booking/BookingsList";
import styles from "./Bookings.module.scss";

const Bookings = () => {
  return (
    <main className={styles.container}>
      <BookingsList />
    </main>
  );
};

export default Bookings;
