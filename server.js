const express = require("express");
const app = express();
const cron = require("node-cron");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const auth = (email, password) => {
  let url = process.env.API_URL + "users/login";
  console.log(url);

  axios
    .post(url, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data.token);
    })
    .catch((err) => {
      console.log(err);
    });
};

app.listen(2400, () => {
  cron.schedule("*/10 * * * * *", () => {
    auth(process.env.USER_NAME, process.env.PASSWORD);
    console.log("Task is running every second " + new Date());
  });
  console.log("Server started at port 2400");
});
