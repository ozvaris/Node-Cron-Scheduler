const express = require("express");
const app = express();
const cron = require("node-cron");

const PORT = 2403;

app.listen(PORT, () => {
  //https://momentjs.com/timezone/
  //America/Sao_Paulo
  //Europe/Istanbul

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  //en-US
  //en-GB
  cron.schedule(
    "*/2 * * * * *",
    () => {
      const now = new Date();
      console.log(
        "Running a job at 01:00 at Europe/Istanbul timezone " +
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

  console.log(`Server started at port ${PORT}`);

});
