export interface ModalBookingForm {
  business: {
    contactPerson: string;
    address: string;
    name: string;
    imageUrls: string[];
    _id: string;
    status: 'confirmed' | 'pending' | 'cancelled';
  };
  onClose: () => void;
  
}

export interface BookingValues {
  date: Date | null;
  time: string;
}
