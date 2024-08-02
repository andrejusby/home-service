import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import classNames from "classnames";
import Button from "./Button";
import { useState } from "react";
import styles from "./Modal.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = Date | null;

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Value>(null);

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDateChange = (newDate: Value): void => {
    setDate(newDate);
    console.log("Pasirinkta data", newDate);
  };

  return (
    <>
      <div>
        <Button large className={styles.bookAppointment} onClick={OpenModal}>
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
            <form className={styles.modalForm}>
              <label>
                <Calendar onChange={onDateChange} value={date} />
              </label>
              <label className={styles.modalTitle}>Select Time Slot</label>
              <Button type="submit" style={{display: 'flex', justifyContent: 'center', gap: '5px'}}>
                <FaCheckCircle />
                <div>Book an service</div>
              </Button>
            </form>
          </div>
          <div className={styles.modalBackground}></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
