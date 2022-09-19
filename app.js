const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let todayDate = `${date.getDate()}-${date.getMonth() + 1}-${
    date.getFullYear
  }`;
  response.send(todayDate);
});
module.exports = app;
app.listen(3000);
