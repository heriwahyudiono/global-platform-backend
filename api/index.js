const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const paymentRoutes = require('../routes/paymentRoutes');

dotenv.config();

const app = express();

// ✅ Setup CORS global + preflight
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// ✅ Tangani semua preflight agar tidak error
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

// ✅ Route utama
app.use('/payments', paymentRoutes);

module.exports.handler = serverless(app);
