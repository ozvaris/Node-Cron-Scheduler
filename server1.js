const express = require("express");
const app = express();
const cron = require("node-cron");

app.listen(2400, () => {
  // cron.schedule('1,2,4,5 * * * * *', () => {
  //   console.log('running every minute 1, 2, 4 and 5');
  // });
  cron.schedule("1,2,4,5 * * * * *", () => {
    console.log("Task is running every 1,2,3,4,5 second " + new Date());  });
  console.log("Server started at port 2400");
});

