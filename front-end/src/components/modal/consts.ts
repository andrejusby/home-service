import * as Yup from "yup";
import { bookingErrorMsg } from "./bookingErrorMsg";
import { BookingValues } from "./types";

export const bookingValidationSchema: Yup.Schema<BookingValues> =
  Yup.object().shape({
    date: Yup.date().required(bookingErrorMsg.date),
    time: Yup.string().required(bookingErrorMsg.time),
  });

// export const bookingInitialValues: BookingValues = {
//   date: date || new Date(),
//   time: '',
// }
