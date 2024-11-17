import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import classNames from "classnames";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import styles from "./Modal.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axiosInstance from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/consts";


type Value = Date | null;

const Modal = ({ business }: { business: any }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Value>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const navigate = useNavigate()

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


  useEffect(() => {
    if (date) {
      axiosInstance
        .get("/bookings/timeslots", {
          params: { date: date.toISOString().split("T")[0] },
        })
        .then((response) => {
          setTimeSlots(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [date]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !selectedTimeSlot) {
      alert("Please add date and time");
      return;
    }

    const bookingData = {
      date: date,
      time: selectedTimeSlot,
      name: business.contactPerson,
      address: business.address,
      title: business.name,
      image: business.imageUrls[0],
      businessId: business._id,
      status: 'pending',
    };

    console.log("Booking data", bookingData);

    try {
      const response = await axiosInstance.post('/bookings/booking', bookingData);

      if (response.status === 201) {
        alert("Reservation is successful");
        navigate(ROUTES.MY_BOOKING)
        closeModal();
      }
    } catch (error) {
      console.error("Klaida siunciat rezervacija", error);
      alert("Please login, or register");
    }
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
            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <label>
                <Calendar
                  onChange={onDateChange}
                  value={date}
                  className={styles.calendar}
                />
              </label>
              <label className={styles.modalTitle}>Select Time Slot</label>

              <div className={styles.slotContainer}>
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    className={classNames(styles.slot, {
                      [styles.selectedSlot]: slot === selectedTimeSlot,
                    })}
                    onClick={() => setSelectedTimeSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <Button
                type="submit"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                }}
                
              >
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
