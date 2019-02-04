const express = require("express");
require("dotenv").config();

const app = express();
const database = require("./database");

app.use(express.json());

//GET
app.get("/transformers", (req, res) => {
  const foundTransformers = database.find();
  res.status(200).send(foundTransformers);
})

//GET ONE
app.get("/transformers/:id", (req, res) => {
  const id = req.params.id;
  const foundTransformer = database.findOne(id);
  res.status(200).send(foundTransformer);
})

//POST
app.post("/transformers", (req, res) => {
  //access request body
  const newTransformer = req.body;
  //save to Database
  const saveBot = database.save(newTransformer);
  //send back confirmation
  res.send(201).send(saveBot);
})

//PUT
app.put("/transformers", (req, res) => {
  //retrieve the id from url params
  const id = req.params.id;
  //update item in Database
  const updates = req.body;
  const updatedBot = database.findByIdAndUpdate(id, updates);
  //send response containing
  res.status(200).send(updatedBot);
})

//DELETE
app.delete("/transformers/id", (req, res) => {
  //finds the id form url params
  const id = req.params.id;
  //deletes from database
  database.findByIdAndRemove(id);
  //send back confirmation with 204 status
  res.status(204).send(updatedBot);
})

app.listen(process.env.PORT, () => console.log("Server is listening on PORT ${process.env.PORT}"))
