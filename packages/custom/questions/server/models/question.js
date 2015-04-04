'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true
  },
  choices: [String]
});


QuestionSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('Question', QuestionSchema);
