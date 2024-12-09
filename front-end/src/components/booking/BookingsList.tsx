import { useState } from "react";
import BookingCard from "./BookingCard";
import { useBookings } from "./hooks";
import styles from "./BookingsList.module.scss";

const BookingsList = ({ displayMode = 'default'}: {displayMode?: string}) => {
  const { data } = useBookings();
  const bookings = data ?? [];

  const [filter, setFilter] = useState<string>("booked");

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "booked") {
      return new Date(booking.date) >= new Date();
    } else if (filter === "completed") {
      return new Date(booking.date) < new Date();
    }
    return true;
  });

  const isCompact = displayMode === 'compact';

  return (
    <>
      {!isCompact && <h1>My Bookings</h1>}
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
      <article className={isCompact ? styles.compactCardContainer : styles.cardContainer}>
        {filteredBookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          filteredBookings.map((booking) => (
            <BookingCard key={booking.userEmail} booking={booking} isCompact={isCompact} showImage={!isCompact}/>
          ))
        )}
      </article>
    </>
  );
};

export default BookingsList;
