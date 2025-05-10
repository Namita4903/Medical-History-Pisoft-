const Stripe = require("stripe");

const stripe = Stripe("sk_test_51OAwiVSJsOEdFzx3JdWxUoqB6S2rUuHKiAxA3BhkdO29JS8UBnMgCclOTFE9QimUkZ1Qx5Oam9bHJtFs8YOpvFhm00XPlBOUUm") // Replace with your Secret Key

const payment = async (req, res, next) => {
    const { amount } = req.body;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
      });
  
      res.send({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  
};

module.exports = payment;