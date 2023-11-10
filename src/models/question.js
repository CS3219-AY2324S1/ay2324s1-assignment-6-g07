const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  complexity: { type: String, required: true },
  categories: { type: Array, required: true },
});

const Question = mongoose.model('questions', QuestionSchema);

module.exports = { Question };
