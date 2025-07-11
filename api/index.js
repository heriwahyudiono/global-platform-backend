const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

const corsOptions = {
  origin: ['https://globalplatform.vercel.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // penting!
app.use(express.json());
app.use('/api/payments', paymentRoutes);

module.exports = app; // untuk Vercel, ekspor app, bukan listen()
// app.listen(5000, () => {
//   console.log('✅ Server running on port 5000');
// });
