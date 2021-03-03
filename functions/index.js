const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const stripe = require("stripe")("sk_live_KFM8wCU6vutqUuKk27Is3R04");
exports.payWithStripe = functions.https.onRequest((request, response) => {

    stripe.charges.create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: request.body.token,
    }).then((charge) => {
        // asynchronously called
        response.send(charge);
    })
        .catch(err => {
            console.log(err);
        });

});