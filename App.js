//DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const transactions = require("./Controllers/transactionsController");

//CONFIGURATION
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

//ROUTES
app.get("/", (req, res) => {
  res.send("tashawnee is awesome");
});

app.use("/transactions", transactions);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
