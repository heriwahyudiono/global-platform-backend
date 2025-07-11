console.log('1. Import express...');
const express = require('express');

console.log('2. Create app...');
const app = express();

console.log('3. Import cors...');
const cors = require('cors');

console.log('4. Import routes...');
const paymentRoutes = require('./routes/paymentRoutes');

console.log('5. Use middleware...');
app.use(cors());
app.use(express.json());
app.use('/api/payments', paymentRoutes);

console.log('6. Starting server...');
app.listen(5000, () => {
  console.log('✅ Server running on port 5000');
});
