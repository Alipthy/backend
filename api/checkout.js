<div id="checkout"></div>

<script src="https://js.stripe.com/v3/"></script>

<script>
const stripe = Stripe("YOUR_PUBLISHABLE_KEY");

fetch("https://backend.vercel.app/api/checkout", {
  method: "POST"
})
.then(res => res.json())
.then(data => {
  const checkout = stripe.initEmbeddedCheckout({
    clientSecret: data.clientSecret
  });
  checkout.mount("#checkout");
});
</script>
