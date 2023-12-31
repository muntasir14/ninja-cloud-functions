/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const {onCall, HttpsError} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

// database
const {onValueCreated, onValueWritten} = require("firebase-functions/v2/database");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// // http request 1

// exports.randomNumber = onRequest((request, response) => {
//   const number = Math.round(Math.random() * 100);
//   logger.log('new number', number);
//   response.send(number.toString());
// });


// // http request 2
// exports.toTheDojo = onRequest((request, response) => {
//     response.redirect('https://www.youtube.com');
//   });


// // http callable function
// exports.sayHello = onCall((request) => {
//   const name = request.data.name;
//   logger.log(request.data);
//   return `hello, ${name}`;
// })



// auth trigger (new user signup)
exports.newUserSignup = functions.auth.user().onCreate(user => {
  logger.log('user created', user.email, user.uid);
});


// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
  logger.log('user deleted', user.email, user.uid);
});


exports.onWrittenFunctionInstance = onValueWritten(
  {
    ref: "/AllFood",
    instance: "ninja-cloud-functions-790c4-default-rtdb"
    // This example assumes us-central1, but to set location:
    // region: "europe-west1"
  },
  (event) => {
    const val = event.data;
    logger.log('new val written', val);
  }
);

// from chat-gpt 
exports.logNewData = functions.database.ref("/AllFood")
    .onCreate((snapshot, context) => {
        // Get the new data
        const newData = snapshot.val();

        // Log the new data
        logger.log("New data:", newData);

        return null; // Return null or a promise
    });

// from chat-gpt
exports.foodModified = functions.database.ref("/AllFood")
.onUpdate((change, context) => {
    // Get the updated AllFood object
    const updatedAllFood = change.after.val();

    // Log the updated AllFood object
    console.log("Updated AllFood:", updatedAllFood);

    return null; // Return null or a promise
});