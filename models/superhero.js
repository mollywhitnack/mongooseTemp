'use strict';

const mongoose = require('mongoose');

let SuperheroSchema = {
  name: String,
  powers: [String],
  nemesis: String
};

let Superhero = mongoose.model('Superhero', SuperheroSchema);

module.exports = Superhero;