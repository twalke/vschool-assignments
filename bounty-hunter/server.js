const express = require("express");
require("dotenv").config();

const app = express();
const database = require("./database");

app.use(express.json());

//GET
app.get("/bounty", (req, res) => {
  const foundBounties = database.find();
  res.status(200).send(foundBounties);
})

//POST
app.post("/bounty", (req, res) => {
  const newContract = req.body;
  const saveContract = database.save(newContract);
  res.send(201).send(saveContract);
})

//DELETE
app.delete("/bounty/:id", (req, res) => {
  const id = req.params.id;
  const updatedContract = database.findByIdAndRemove(id);
  res.status(204).send(updatedContract);
})

app.listen(process.env.PORT, () => console.log("Server is listening on PORT ${process.env.PORT}"))
