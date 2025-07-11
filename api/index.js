const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const paymentRoutes = require('../routes/paymentRoutes');

const app = express();
app.use(cors());
app.options('*', cors()); // penting untuk preflight

app.use(express.json());
app.use('/api/payments', paymentRoutes);

// ❗ PENTING: ekspor untuk Vercel
module.exports.handler = serverless(app);

// app.listen(5000, () => {
//   console.log('✅ Server running on port 5000');
// });
