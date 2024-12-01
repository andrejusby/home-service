import axiosInstance from "../../config/axios";
import { Bookings } from "./types";

export const fetchBookings = async (): Promise<Bookings[]> => {
  const response = await axiosInstance.get("/bookings/bookings");
  return await response.data;
};
