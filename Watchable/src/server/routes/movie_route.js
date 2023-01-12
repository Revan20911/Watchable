
const express = require("express");
const movie_route = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Movie = require("../models/movies");


//TODO: Adjust routes to include API URL

movie_route.get('/movies', async (req, res) => {
  const response = await Movie.find()
  res.json(response);
});

movie_route.get("/Movies/:MovieId",  (req, res) => {
  Movie.findOne({_id: ObjectId(req.params.id)}, (err, result) =>{
    if(err) throw err;
    res.json(result);
  });
});


module.exports = movie_route;