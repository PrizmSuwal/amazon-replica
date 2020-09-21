const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HTocUHEXMOEK7NOrefNp5qGO1EWD5D7zb7IpZCunoX2m6MNP5j3k8JnKZ84pPNZBcQo43RAzgQKmpV78GynBG5300h5MdBAuI');


//API
//App config
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());


//Api Routes
app.get('/', (request, response) => 
  response.status(200).send('hell0'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received', total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})  

//Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-a844a/us-central1/api