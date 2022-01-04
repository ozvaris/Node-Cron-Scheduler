const express = require("express");
const app = express();
const cron = require("node-cron");

app.listen(2403, () => {
  //https://momentjs.com/timezone/
  //America/Sao_Paulo
  //Europe/Istanbul

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  //en-US
  //en-GB
  cron.schedule(
    "0 36 * * * *",
    () => {
      const now = new Date();
      console.log(
        "Running a job at 01:00 at Europe/Istanbul timezone" +
          now.toLocaleString("en-GB", {
            timeZone: "Europe/Istanbul",
          })
      );
    },
    {
      scheduled: true,
      timezone: "Europe/Istanbul",
    }
  );
});
