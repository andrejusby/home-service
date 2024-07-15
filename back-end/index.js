const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const businessRoutes = require('./routes/bookingRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const { connectToDb, PORT } = require('./db');

app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.use('/businesses', businessRoutes);
app.use('/bookings', bookingRoutes);

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
  });
