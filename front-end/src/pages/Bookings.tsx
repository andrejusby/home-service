import styles from "./Bookings.module.scss";
import BookingCard from "../components/booking/BookingCard";
import axiosInstance from "../config/axios";
import { useEffect, useState } from "react";
import SearchInput from "../components/common/SearchInput";

const Bookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("booked");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get("/bookings/bookings");
        setBookings(response.data); // irasome gautus duomenys i state
      } catch (error: any) {
        console.error("Klaida darant rezervacijas", error);
        setError(
          error.response?.data?.message || "Klaida gaunant rezervacijas"
        );
      }
    };
    fetchBookings();
  }, []);

  // Filtruojame rezervacijas pagal pasirinktą filtrą
  const filteredBookings = bookings.filter((booking) => {
    if (filter === "booked") {
      return new Date(booking.date) >= new Date();
    } else if (filter === "completed") {
      return new Date(booking.date) < new Date();
    }
    return true;
  });

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className={styles.container}>
      <h1>My Bookings</h1>
      <section className={styles.header}>
        <button
          className={`${styles.whiteButton} ${
            filter === "booked" ? styles.active : ""
          }`}
          onClick={() => setFilter("booked")} // Nustatome filtra 'booked'
        >
          Booked
        </button>

        <button
          className={`${styles.whiteButton} ${
            filter === "completed" ? styles.active : ""
          }`}
          onClick={() => setFilter("completed")} // Nustatome filtra 'completed'
        >
          Completed
        </button>
      </section>
      <article className={styles.cardContainer}>
        {filteredBookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          filteredBookings.map((booking, index) => (
            <BookingCard key={index} booking={booking} />
          ))
        )}
      </article>
    </main>
  );
};

export default Bookings;
