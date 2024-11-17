import styles from "./BookingCard.module.scss";
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";

const BookingCard = ({ booking }: { booking: any }) => {
  if (!booking) {
    return <p>No booking data available</p>;
  }

  const business = booking.businessId; //populate
  const { date, time } = booking;

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.imagesSection}>
          {business.imageUrls && business.imageUrls.length > 0 ? (
            <img
              src={business.imageUrls[0]}
              alt="image"
              className={styles.img}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className={styles.infoSection}>
          <h3>{business.name || "Unknown Service"}</h3>

          <div className={styles.infoItem}>
            <IoPersonOutline />
            <div>{business.contactPerson || "Unknown Contact"}</div>
          </div>

          <div className={styles.infoItem}>
            <IoLocationOutline />
            <div>{business.address || "Unknown address"}</div>
          </div>

          <div className={styles.infoItem}>
            <MdOutlineCalendarToday />
            <div>
              service on:{" "}
              <span>{date ? new Date(date).toLocaleDateString() : "Unknown date"}</span>
            </div>
          </div>

          <div className={styles.infoItem}>
            <LuClock4 />
            <div>
              service on <span>{time || "Unknown Time"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
