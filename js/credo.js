let Credo = require("credo-node");

CREDO_SECRET_KEY = "sk_demo-0mk9DBfgoOBbdaMyawuRltYADFSjC8.6S2F1wp0bR-d";

const secretKey = process.env.CREDO_SECRET_KEY;

// When your environment is "development" or "local", the SDK will use the sandbox API
const environment = process.env.NODE_ENV;
const credo = new Credo(secretKey, environment);

const start = document.querySelector(".button");

fetch("https://api.credocentral.com/credo-payment/v1")
  .then((response) => response.json())
  .then((data) => console.log(data));

document.querySelector("#btn").addEventListener("click", function () {
  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const transRef = `iG27f${generateRandomNumber(
    10,
    60
  )}hvc${generateRandomNumber(10, 90)}`;
  console.log(transRef);

  function makePayment() {
    CredoCheckout({
      transRef, //Please generate your own transRef that is unique for each transaction
      amount: 1000,
      redirectUrl: "/pricing.html",
      paymentOptions: ["CARDS", "BANK"],
      currency: "NGN",
      customerName: "Ciroma Chukwuma Adekunle",
      customerEmail: "cirochwukunle@example.com",
      customerPhoneNo: "08032698425",
      onClose: function () {
        console.log("Modal closed");
      },
      callback: function () {
        console.log("Payment Successful");
      },
      publicKey: "pk_demo-qhuHZyFwf4Qgu6NNjhitZaJx8Z44wu.SNuihBvIZd-u", // You should store your API key as an environment variable
    });
  }

  //   fetch("https://api.credocentral.com/credo-payment/v1")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //   fetch("https://api.credocentral.com/credo-payment/v1", {
  //     method: "GET", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   credo
  //     .initiatePayments({
  //       amount: 100,
  //       currency: "NGN",
  //       redirectUrl: "/",
  //       transRef: "hytry5",
  //       paymentOptions: "CARD,BANK,USSD",
  //       customerEmail: "customer@something.com",
  //       customerName: "John Doe",
  //       customerPhoneNo: "+234 813 000 000",
  //     })
  //     .then((response) => {
  //       console.log(response.body);
  //     });
});

const data = { username: "example" };
