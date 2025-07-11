const express = require('express');
const cors = require('cors');
const paymentRoutes = require('../routes/paymentRoutes');

const app = express();

// ✅ CORS: Izinkan semua origin (sementara, bisa dibatasi nanti)
app.use(cors());

// ✅ Tangani preflight request manual (penting!)
app.options('*', cors()); 

app.use(express.json());
app.use('/api/payments', paymentRoutes);

// ✅ Untuk Vercel, ekspor app
module.exports = app;

// app.listen(5000, () => {
//   console.log('✅ Server running on port 5000');
// });
