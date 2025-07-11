const midtransClient = require('midtrans-client');

exports.createTransaction = async (req, res) => {
  try {
    // Pindahkan inisialisasi Snap ke dalam handler agar tidak crash di awal
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const { items, user } = req.body;

    const order_id = 'ORDER-' + Date.now();
    const discount = 0.1;

    const gross_amount = items.reduce((total, item) => {
      const priceAfterDiscount = item.products.price * (1 - discount);
      return total + priceAfterDiscount * item.quantity;
    }, 0);

    const item_details = items.map(item => {
      const priceAfterDiscount = item.products.price * (1 - discount);
      return {
        id: item.products.id,
        price: priceAfterDiscount,
        quantity: item.quantity,
        name: item.products.product_name.slice(0, 50),
      };
    });

    const parameter = {
      transaction_details: { order_id, gross_amount },
      customer_details: {
        first_name: user.name,
        email: user.email,
      },
      item_details,
    };

    const transaction = await snap.createTransaction(parameter);
    res.json({ token: transaction.token });

  } catch (err) {
    console.error('❌ Midtrans error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
