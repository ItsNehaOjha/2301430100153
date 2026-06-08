const express = require("express");
const Log = require("./logger");

const app = express();

app.get("/health", async (req, res) => {

  await Log(
    "backend",
    "info",
    "route",
    "health endpoint called"
  );

  res.json({
    status: "ok"
  });

});

app.listen(3000, () => {
  console.log("Server running");
});