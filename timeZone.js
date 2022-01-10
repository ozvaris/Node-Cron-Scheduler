const express = require("express");
const app = express();
const cron = require("node-cron");

const PORT = 2403;
const CONST_TIME_ZONE=3

const getDateZoneNow = () =>
  Date.now() + parseInt(CONST_TIME_ZONE, 10) * 60 * 60 * 1000;
const getDateZone = new Date(getDateZoneNow());

app.listen(PORT, () => {
  //https://momentjs.com/timezone/
  //America/Sao_Paulo
  //Europe/Istanbul

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  //en-US
  //en-GB
  console.log(`Server started at port ${PORT}`);
  console.log(`Server started at port ${getDateZone}`);
 
});
