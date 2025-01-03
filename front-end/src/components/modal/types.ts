import { Dayjs } from "dayjs";

export interface ModalBookingForm {
  business: {
    contactPerson: string;
    address: string;
    name: string;
    imageUrls: string[];
    _id: string;
    status: "confirmed" | "pending" | "cancelled";
  };
  onClose: () => void;
}

export interface BookingValues {
  date: Date | null;
  time: string;
}

export interface MaterialUICalendarProps {
  // value: Date | null;
  value: Dayjs | null;
  onChange: (newValue: Date | Dayjs | null) => void;
}
