import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import axiosInstance from "../../config/axios";
import Button from "../common/Button";
// import Calendar from "react-calendar";
import MaterialUiCalendar from "./MaterialUiCalendar";
import { ModalBookingForm, BookingValues } from "./types";
import "react-calendar/dist/Calendar.css";
import styles from "./BookingForm.module.scss";
import { bookingValidationSchema } from "./consts";
import { FaCheckCircle } from "react-icons/fa";
import classNames from "classnames";

const BookingForm = ({ business, onClose }: ModalBookingForm) => {
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const navigate = useNavigate();

  const fetchTimeSlots = async (date: Date) => {
    try {
      const response = await axiosInstance.get("/bookings/timeslots", {
        params: { date: date.toISOString().split("T")[0] },
      });
      setTimeSlots(response.data);
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  const handleSubmit = async (values: BookingValues) => {
    const bookingData = {
      ...values,
      name: business.contactPerson,
      address: business.address,
      title: business.name,
      image: business.imageUrls[0],
      businessId: business._id,
      status: "pending",
    };

    try {
      const response = await axiosInstance.post(
        "/bookings/booking",
        bookingData
      );
      if (response.status === 201) {
        alert("Reservation is successful");
        navigate(ROUTES.MY_BOOKING);
        onClose();
      }
    } catch (error) {
      console.error("Error submitting booking", error);
      alert("Please login or register");
    }
  };

  return (
    <Formik
      initialValues={{ date: null, time: "" }}
      validationSchema={bookingValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, isSubmitting }) => (
        <Form className={styles.modalForm}>
          {/* <Calendar
            onChange={(date: Date) => {
              setFieldValue("date", date);
              fetchTimeSlots(date);
              setFieldValue("time", "");
            }}
            onChange={(value, event) => {
              if (value instanceof Date) {
                setFieldValue("date", value);
                fetchTimeSlots(value);
                setFieldValue("time", "");
              } else {
                console.warn("Unsupported calendar value:", value);
              }
            }}
            value={values.date}
            className={styles.calendar}
          /> */}

          <MaterialUiCalendar
            value={values.date}
            onChange={(newValue) => {
              if (newValue) {
                setFieldValue("date", newValue);
                fetchTimeSlots(newValue);
                setFieldValue("time", "");
              }
            }}
          />

          <label className={styles.modalTitle}>Select Time Slot</label>
          <div className={styles.slotContainer}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={classNames(styles.slot, {
                  [styles.selectedSlot]: values.time === slot,
                })}
                onClick={() =>
                  setFieldValue("time", values.time === slot ? "" : slot)
                }
              >
                {slot}
              </button>
            ))}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || !values.date || !values.time}
            className={styles.submitButton}
          >
            <FaCheckCircle />
            Book Service
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
