import mongoose, { Types } from 'mongoose';

interface IBooking {
  businessId: Types.ObjectId;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: 'confirmed' | 'pending' | 'cancelled';

}

const bookingSchema = new mongoose.Schema<IBooking>({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,

    ref: 'Business', // Nuoroda

    required: true, // Custom error message for require field
  },
  date: {
    type: Date,
    required: [true, 'field is required. e.g. 2022-04-28'], // Ensuring date is provided
  },
  time: {
    type: String,
    required: [true, 'field is required. e.q. 14:00'], // Time must be provided
  },
  userEmail: {
    type: String,
    required: [true, 'field is required.'], // Email is necessary for contact
    validate: {
      validator: function (email: string) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email!`, // Custom message for invalid email
    },
  },
  userName: {
    type: String,
    required: true, // Name is necessary
  },
  status: {
    type: String,
    required: [true, 'Booking status is required.'], // Status must be provided
    enum: {
      values: ['confirmed', 'pending', 'cancelled'],
      message: '{VALUE} is not supported', // Custom message if an unsupported value is provided
    },
  }, 
});

const Booking = mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;
