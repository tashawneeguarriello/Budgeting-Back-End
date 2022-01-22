const express = require("express");
const transactionsData = require("../Models/transactions");
const transactions = express.Router();

transactions.get("/", (_, res) => {
  console.log(transactionsData);
  res.json(transactionsData);
});
transactions.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(transactionsData[id]);
});

transactions.post("/", (req, res) => {
  transactionsData.push(req.body);
  res.json(transactionsData);
});

transactions.put("/:id", (req, res) => {
  // console.log(req.body);
  // console.log(req.params.id);
  transactionsData[req.params.id] = req.body;
  res.status(200).json(transactionsData);
});

transactions.delete("/:arrayId", (req, res) => {
  const deletedTransaction = transactionsData.splice(req.params.arrayId, 1);
  res.status(200).json(deletedTransaction);
});

module.exports = transactions;
