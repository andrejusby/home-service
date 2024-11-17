import express, { Router } from 'express';
import Booking from '../models/Booking';
import Business from '../models/Business';
import authMiddleware from '../middlewares/authMiddleware';
import User from '../models/User';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: 'Error creating booking', error: (err as Error)?.message ?? err });
  }
});

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings for the user', error: err });
  }
});

router.get('/user/:email', async (req, res) => {
  try {
    const userBookings = await Booking.find({ userEmail: req.params.email });
    res.json(userBookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings for the user', error: err });
  }
});

router.get('/timeslots', async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: 'Date is required' });
  }

  const availableTimeSlots = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
  ];

  res.json(availableTimeSlots);
});

router.post('/booking', authMiddleware, async (req, res) => {
  try {
    const { businessId, date, time, status } = req.body;

    console.log('Gauti duomenys is frontend', req.body);
    

    if(!businessId || !date || !time || !status) {
      return res.status(400).json({ message: 'All fields required'})
    }

    const userId = req.currentUser?.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found'})
    }

    // Verslas pagal ID
    const business = await Business.findById(businessId);
    if (!business) {
      return res.status(404).json({ message: 'Business not found'})
    }

    //Nauja rezervacija
    const newBooking = new Booking({
      businessId,
      businessName: business.name,
      businessAddress: business.address,
      contactPerson: business.contactPerson,
      date: new Date(date),
      time,
      userEmail: user.email,
      userName: user.name,
      status,
    })

    await newBooking.save();
    res.status(201).json(newBooking)

  } catch (err) {
    console.error('Klaida kuriant uzsakyma', err);
    res.status(400).json({ message: 'Error creating booking', error: (err as Error)?.message ?? err})
  }
})


router.get('/bookings', authMiddleware, async (req, res) => {
  try {
    const userEmail = req.currentUser?.email; // Vartotojo email is middleware
    if (!userEmail) {
      return res.status(400).json({ message: 'User email is required'})
    }

    const bookings = await Booking.find({ userEmail }).populate('businessId') // Siunciama visas rezervacijas pagal email, naudoti, populate, jei reikia gauti susijusiu dokumentu duomenys
    res.status(200).json(bookings)

  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error})
  }
})

export default router;
