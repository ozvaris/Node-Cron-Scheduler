const express = require("express");
const app = express();
const cron = require("node-cron");

app.listen(2402, () => {
  // cron.schedule('1,2,4,5 * * * * *', () => {
  //   console.log('running every minute 1, 2, 4 and 5');
  // });
  cron.schedule('*/2 * * * * *', () => {
    console.log('server3 running every second to second'  + new Date());
  });
  console.log("Server started at port 2400");
 
});