import styles from "./BookingCard.module.scss";
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";

const BookingCard = ({
  booking,
  isCompact,
  showImage = true,
}: {
  booking: any;

  isCompact?: boolean;
  showImage?: boolean;
}) => {
  if (!booking) {
    return <p>No booking data available</p>;
  }

  const business = booking.businessId; //populate
  const { date, time } = booking;

  return (
    <div className={isCompact ? styles.compactCard : styles.card}>
      <div className={styles.cardWrapper}>
        {showImage && (
          <div className={styles.imagesSection}>
            <img
              src={business.imageUrls[0]}
              alt={business.name || "Booking"}
              className={styles.img}
            />
          </div>
        )}
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
              <span>
                {date ? new Date(date).toLocaleDateString() : "Unknown date"}
              </span>
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
