const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IIrE8Jel4YTEHffw2DHvVfH6X1mwGGiOi3JacQI90fs8Sm01x8BwfFIYvql1ojFPHVcIeGjM5m3zeu5HqaRVfwP00uGtfkSYf"
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "INR",
  });

  //OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//used in payments.js frontend in stripe

// - Listen command
exports.api = functions.https.onRequest(app);
