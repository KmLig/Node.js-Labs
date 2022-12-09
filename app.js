const http = require("http");

const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("In anothe middleware!");
  res.send("<p>The Middleware that handles just /users</p>"); 
  // when we have already send an respond, no need to use next();
  //next(); // allow req to continue to the next middleware in line
});
app.use("/", (req, res, next) => {
  console.log("In the middleware!");
  res.send("<p>The Middleware that handles just /</p>");
});

app.listen(3000);
