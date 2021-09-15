const express = require('express');
const router = express.Router();
const Item = require('../models/schemas');

//read route
router.get('/items', (req, res) => {
  Item.find()
  .then(items => res.json(items))
  .catch(err => res.status(400).json("Error: " + err));
})

//create route
router.post('/newitem', (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
  })
  newItem.save()
  .then(item => console.log('Note saved to Database'))
  .catch(err => res.status(400).json("Error: " + err))
})
//delete route

//update route

module.exports = router;