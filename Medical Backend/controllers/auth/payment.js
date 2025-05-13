const Stripe = require("stripe");

const stripe = Stripe("sk_test_51OAwiVSJsOEdFzx3JdWxUoqB6S2rUuHKiAxA3BhkdO29JS8UBnMgCclOTFE9QimUkZ1Qx5Oam9bHJtFs8YOpvFhm00XPlBOUUm");

const payment = async (req, res, next) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Sample Product',
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/success', // Replace with your success URL
            cancel_url: 'http://localhost:5173/cancel', // Replace with your cancel URL
        });
        console.log(paymentIntent.url,"paymentIntent.url")

        res.send({ url: paymentIntent.url });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = payment;
