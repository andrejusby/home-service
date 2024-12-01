import { useQuery } from "@tanstack/react-query";
import { fetchBookings } from "./api";

export const BOOKINGS_KEY = "BOOKINGS_KEY";

export const useBookings = () => {
  return useQuery({
    queryKey: [BOOKINGS_KEY],
    queryFn: fetchBookings,
  });
};
