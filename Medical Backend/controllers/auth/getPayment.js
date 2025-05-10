const Stripe = require("stripe");
const stripe = Stripe("sk_test_51OAwiVSJsOEdFzx3JdWxUoqB6S2rUuHKiAxA3BhkdO29JS8UBnMgCclOTFE9QimUkZ1Qx5Oam9bHJtFs8YOpvFhm00XPlBOUUm");

const getPaymentStatus = async (req, res) => {
  const { cartItems } = req.body;

  if (!cartItems || !Array.isArray(cartItems)) {
    return res.status(400).json({ error: "Invalid cart items." });
  }

  // Calculate total amount in cents
  const amount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0) * 100;
console.log(amount)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    console.log(paymentIntent)

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe payment intent error:", err.message);
    res.status(500).send({ error: err.message });
  }
};

module.exports = getPaymentStatus;
