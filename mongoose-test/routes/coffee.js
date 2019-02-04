const express = require("express");
const coffeeRouter = express.Router();
const Coffee = require("../models/coffee");

//handle endpoints here

coffeeRouter.route("/")
  .get((req, res, next) => {
    //ask database for entire collection of coffee
    Coffee.find()
      .then(coffeeCollection => res.status(200).send(coffeeCollection))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })
  .post((req, res, next) => {
    //get the fields from req.body
    const coffeeData = req.body;
    //turn into a DOCUMENT
    const coffeeDoc = new Coffee(coffeeData);
    //save to the database
    coffeeDoc.save()
      .then(savedCoffeeDoc => res.status(201).send(savedCoffeeDoc))
      .catch(err => {
        res.status(500);
        next(err);
      })
    //send back the saved coffee doc

  })

coffeeRouter.route("./:id")
  .get((req, res, next) => {
    //get id from req params
    const id = req.params.id;
    //find by id
    Coffee.findById(id)
      .then(foundCoffee => res.status(200).send(foundCoffee))
      .catch(err => {
        res.status(500);
        next(err);
      })
    //send it back
  })
  .delete((req, res, next) => {
    const id = req.params.id;
    Coffee.findByIdAndRemove(id)
      .then(() => res.status(204).send())
      .catch(err => {
        res.status(500);
        next(err);
      })
  })
  .put((req, res, next) => {
    const id = req.params.id;
    Coffee.findByIdAndUpdate(id, updates, {new: true})
      .then(updatedCoffee => res.status(200).send(updatedCoffee))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })

module.exports = coffeeRouter;
