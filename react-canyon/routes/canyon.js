const express = require("express");
const canyonRouter = express.Router();
const Canyon = require("../models/canyon");

//handle endpoints here

canyonRouter.route("/")
  .get((req, res, next) => {
    //ask database for entire collection of canyons
    Canyon.find()
      .then(canyonCollection => res.status(200).send(canyonCollection))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })
  .post((req, res, next) => {
    //get the fields from req.body
    const canyonData = req.body;
    //turn into a DOCUMENT
    const canyonDoc = new Canyon(canyonData);
    //save to the database
    canyonDoc.save()
      .then(savedCanyonDoc => res.status(201).send(savedCanyonDoc))
      .catch(err => {
        res.status(500);
        next(err);
      })
    //send back the saved canyon doc

  })

canyonRouter.route("./:id")
  .get((req, res, next) => {
    //get id from req params
    const id = req.params.id;
    //find by id
    Canyon.findById(id)
      .then(foundCanyon => res.status(200).send(foundCanyon))
      .catch(err => {
        res.status(500);
        next(err);
      })
    //send it back
  })
  .delete((req, res, next) => {
    const id = req.params.id;
    Canyon.findByIdAndRemove(id)
      .then(() => res.status(204).send())
      .catch(err => {
        res.status(500);
        next(err);
      })
  })
  .put((req, res, next) => {
    const id = req.params.id;
    Canyon.findByIdAndUpdate(id, updates, {new: true})
      .then(updatedCanyon => res.status(200).send(updatedCanyon))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })

module.exports = canyonRouter;
