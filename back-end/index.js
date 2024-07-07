const express = require('express');
const app = express();
app.use(express.json());

const Category = require('./models/Category');
const Business = require('./models/Business');
const Booking = require('./models/Booking');
const { connectToDb, PORT } = require('./db');

app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err });
  }
});

app.get('/businesses', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching business', error: err });
  }
});

app.post('/businesses', async (req, res) => {
  const business = req.body;
  try {
    const categoryExists = await Category.findOne({ name: business.category });
    if (!categoryExists) {
      return res.status(400).json({
        message: 'Failed to add business: specified category does not exist.',
      });
    }
    const newBusiness = new Business(business);

    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    res.status(500).json({
      message: 'Server error while adding business',
      error: err.message,
    });
  }
});

app.get('/businesses/category/:category', async (req, res) => {
  try {
    const filteredBusiness = await Business.find({
      category: req.params.category.toLowerCase(),
    });
    res.json(filteredBusiness);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching businesses by category', error: err });
  }
});

app.get('/business/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business) {
      res.json(business);
    } else {
      res.status(404).send('Business not found');
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching business', error: err });
  }
});

app.post('/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: 'Error creating booking', error: err?.message ?? err });
  }
});

app.get('/businesses/:businessId/bookings/date/:date', async (req, res) => {
  try {
    const slots = await Booking.find({
      businessId: req.params.businessId,
      date: new Date(req.params.date),
    });
    res.json(slots);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching bookings for the specified date and business',
      error: err,
    });
  }
});

app.get('/bookings/user/:email', async (req, res) => {
  try {
    const userBookings = await Booking.find({ userEmail: req.params.email });
    res.json(userBookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings for the user', error: err });
  }
});

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
  });
