import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Button from "./Button";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import classNames from "classnames";
import styles from "./Modal.module.scss";
import BookingForm from "../modal/BookingForm";

const Modal = ({ business }: { business: any }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <Button large className={styles.bookAppointment} onClick={openModal}>
          <HiOutlinePencilSquare />
          book appointment
        </Button>
      </div>

      <div
        className={classNames(styles.modalOverlay, {
          [styles.open]: isModalOpen,
        })}
        onClick={closeModal}
      >
        <div
          className={classNames(styles.modal, { [styles.open]: isModalOpen })}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalContent}>
            <h2>Book an service</h2>
            <p>Select Date and Time slot to book service</p>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <p>Select Date</p>

            <BookingForm business={business} onClose={closeModal} />
          </div>
          <div className={styles.modalBackground}></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
