const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const paymentRoutes = require('../routes/paymentRoutes');

const app = express();
app.use(cors());
app.options('*', cors()); // tangani preflight CORS

app.use(express.json());
app.use('/payments', paymentRoutes); // ubah prefix!

module.exports.handler = serverless(app);
