const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Izinkan semua origin
app.use(cors());
app.use(express.json());
app.use('/api/payments', paymentRoutes);

module.exports = app; // untuk deploy di Vercel
// app.listen(5000, () => {
//   console.log('✅ Server running on port 5000');
// });
