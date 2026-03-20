const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      ui_mode: "embedded",
      line_items: [
        {
          price: "price_1TCnmXQiNrsFVsySeZPdrB73",
          quantity: 1,
        },
      ],
      return_url: "https://jointhenxtlvl.com",
    });

    return res.status(200).json({
      clientSecret: session.client_secret,
    });
  } catch (err) {
    console.error("Stripe embedded checkout error:", err);
    return res.status(500).json({
      error: err.message,
    });
  }
};
