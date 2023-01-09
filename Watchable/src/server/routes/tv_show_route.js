
const express = require("express");
const tv_show_route = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Show = require("../models/tv_shows");

tv_show_route.get('/TV_Shows', async (req, res) => {
  const response = await Show.find()
  res.json(response);
});

tv_show_route.get("/TV_Shows/:ShowId",  (req, res) => {
  Show.findOne({_id: ObjectId(req.params.id)}, (err, result) =>{
    if(err) throw err;
    res.json(result);
  });
});


module.exports = tv_show_route;