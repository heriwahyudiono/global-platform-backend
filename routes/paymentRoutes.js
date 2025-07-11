const express = require('express');
const router = express.Router();
const { createTransaction } = require('../controllers/paymentController');

// ✅ Tambahkan handler untuk preflight request (OPTIONS)
router.options('/create-transaction', (req, res) => {
  res.sendStatus(200);
});

// ✅ Handler utama POST
router.post('/create-transaction', createTransaction);

module.exports = router;
