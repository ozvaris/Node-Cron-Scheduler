const express = require("express");
const app = express();
const cron = require("node-cron");

app.listen(2401, () => {
  // cron.schedule('1,2,4,5 * * * * *', () => {
  //   console.log('running every minute 1, 2, 4 and 5');
  // });
  cron.schedule('1-5 * * * * *', () => {
    console.log('server2 running every second to 1 from 5'  + new Date());
  });
  console.log("Server started at port 2401");
 
});