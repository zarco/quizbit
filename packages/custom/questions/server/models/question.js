'use strict';

var random = require('mongoose-simple-random');

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

QuestionSchema.plugin(random);


QuestionSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('Question', QuestionSchema);
