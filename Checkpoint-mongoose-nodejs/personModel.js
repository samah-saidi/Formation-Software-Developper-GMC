// personModel.js

const mongoose = require('mongoose');

// Définition du schéma Person
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// Création du modèle
const Person = mongoose.model('Person', personSchema);

// Exportation du modèle
module.exports = Person;
