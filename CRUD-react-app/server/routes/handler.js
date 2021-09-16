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
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if(!err) {
      console.log("Item deleted");
    } else {
      console.log(err)
    }
  })
})

//update route
router.put('/put/:id', (req, res) => {
  const updatedItem = {
    title: req.body.title,
    description: req.body.description,
  }
  const id = req.params.id;
  Item.findByIdAndUpdate({ _id: id }, {$set: updatedItem}, (req, res, err) => {
    if (!err) {
      console.log('Item updated');
    } else {
      console.log(err);
    }
  })
})


module.exports = router;