// Import de mongoose
const mongoose = require('mongoose');

// Définition du schéma utilisateur
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, required: true, unique: true }
});

// Export du modèle pour l'utiliser dans server.js
module.exports = mongoose.model('User', userSchema);
