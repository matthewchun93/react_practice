const express = require('express');
const router = express.Router();
const Note = require('../models/schemas');

router.post('/createnote', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const newNote = new Note({
    title,
    content,
  })

  newNote.save()
  .then(() => {
    console.log("Note sent to database")
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get('/notes', (req, res) => {
  Note.find()
  .then(foundNotes => res.json(foundNotes))
})
module.exports = router;