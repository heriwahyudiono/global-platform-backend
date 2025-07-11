const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const paymentRoutes = require('../routes/paymentRoutes');

dotenv.config();

const app = express();

app.use(cors());                 // Wajib di atas!
app.use(express.json());
app.use('/payments', paymentRoutes);

app.options('*', cors());        // Tambahan fallback
module.exports.handler = serverless(app);
