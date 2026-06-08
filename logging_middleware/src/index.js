const express = require("express");
const Log = require("./logger");

const app = express();

app.use(express.json());

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

app.get("/error", async (req, res) => {

  await Log(
    "backend",
    "error",
    "handler",
    "test error route called"
  );

  res.status(500).json({
    message: "something went wrong"
  });

});

app.post("/users", async (req, res) => {

  await Log(
    "backend",
    "info",
    "controller",
    "create user request"
  );

  res.json({
    success: true,
    user: req.body
  });

});

app.listen(3000, () => {
  console.log("Server running");
});