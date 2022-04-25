const express = require("express");

const PORT = 8080;
const HOST = '0.0.0.0';

const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});