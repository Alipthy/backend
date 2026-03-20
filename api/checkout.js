const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
  
      line_items: [
        {
          price: "price_1TCnmXQiNrsFVsySeZPdrB73",
          quantity: 1,
        },
      ],
      success_url: "https://jointhenxtlvl.com",
cancel_url: "https://jointhenxtlvl.com",
    });

    return res.status(200).json({
  url: session.url,
});
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
    }
  
