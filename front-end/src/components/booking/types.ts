// export interface Bookings {
//   businessId: string;
//   date: string;
//   time: string;
//   userEmail: string;
//   userName: string;
//   status: string
// }

export interface Bookings {
  businessId: {
    imageUrls: string[];
    name: string;
    contactPerson: string;
    address: string;
  };
  date: string;
  time: string;
  userEmail: string;
  userName: string;
  status: string;
}
