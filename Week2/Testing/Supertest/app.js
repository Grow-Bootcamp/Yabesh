const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  res.status(200).json ({
    message: "Users fetched successfully"
  });
});

module.exports = app;