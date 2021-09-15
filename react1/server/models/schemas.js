const mongoose = require('mongoose');
const noteSchema = {
  title: {type: String, require: true},
  content: {type: String, require: true}
}

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;