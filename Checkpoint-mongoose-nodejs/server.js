// server.js

require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./personModel');

// Vérification de l'URI
console.log('🌐 MongoDB URI:', process.env.MONGODB_URI);

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ Connection Error:', err));

/* ----------------------------
   1. Create and Save a Record
---------------------------- */
const createAndSavePerson = async () => {
  try {
    console.log('📝 Creating a new person...');
    const person = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['pizza', 'pasta'],
    });

    const savedPerson = await person.save();
    console.log('✅ Person saved:', savedPerson);
    return savedPerson;
  } catch (err) {
    console.error('❌ Error saving person:', err);
  }
};

/* ----------------------------------
   2. Create Many Records at Once
---------------------------------- */
const createManyPeople = async (arrayOfPeople) => {
  try {
    console.log('📝 Creating many people...');
    const people = await Person.create(arrayOfPeople);
    console.log('✅ Many people created:', people);
    return people;
  } catch (err) {
    console.error('❌ Error creating people:', err);
  }
};

/* -------------------------------------
   3. Find all people with a given name
------------------------------------- */
const findPeopleByName = async (personName) => {
  try {
    console.log(`🔍 Searching for people named "${personName}"...`);
    const people = await Person.find({ name: personName });
    console.log('✅ People found:', people);
    return people;
  } catch (err) {
    console.error('❌ Error finding people:', err);
  }
};

/* ----------------------------------------------------
   4. Find one person by favorite food using findOne()
---------------------------------------------------- */
const findOneByFood = async (food) => {
  try {
    console.log(`🔍 Searching for one person who likes "${food}"...`);
    const person = await Person.findOne({ favoriteFoods: food });
    console.log('✅ Found one person by food:', person);
    return person;
  } catch (err) {
    console.error('❌ Error finding person:', err);
  }
};

/* -------------------------------------------------
   5. Find a person by _id using findById()
------------------------------------------------- */
const findPersonById = async (personId) => {
  try {
    console.log(`🔍 Searching for person with ID "${personId}"...`);
    const person = await Person.findById(personId);
    console.log('✅ Found person by ID:', person);
    return person;
  } catch (err) {
    console.error('❌ Error finding person by ID:', err);
  }
};

/* -------------------------------------------------------------
   6. Classic Update: Find, Edit, then Save
------------------------------------------------------------- */
const findEditThenSave = async (personId) => {
  try {
    console.log(`✏️ Adding "hamburger" to favoriteFoods of person ID "${personId}"...`);
    const person = await Person.findById(personId);
    person.favoriteFoods.push('hamburger');
    const updatedPerson = await person.save();
    console.log('✅ Updated person:', updatedPerson);
    return updatedPerson;
  } catch (err) {
    console.error('❌ Error updating person:', err);
  }
};

/* ----------------------------------------------------------
   7. New Update: findOneAndUpdate()
---------------------------------------------------------- */
const findAndUpdate = async (personName) => {
  try {
    console.log(`✏️ Updating age to 20 for person named "${personName}"...`);
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log('✅ Person updated:', updatedPerson);
    return updatedPerson;
  } catch (err) {
    console.error('❌ Error updating person:', err);
  }
};

/* ----------------------------------------------------------
   8. Delete One Document Using findByIdAndRemove()
---------------------------------------------------------- */
const removeById = async (personId) => {
  try {
    console.log(`🗑️ Removing person with ID "${personId}"...`);
    const removedPerson = await Person.findByIdAndRemove(personId);
    console.log('✅ Person removed:', removedPerson);
    return removedPerson;
  } catch (err) {
    console.error('❌ Error removing person:', err);
  }
};

/* ----------------------------------------------------------
   9. Delete Many Documents Using deleteMany()
---------------------------------------------------------- */
const removeManyPeople = async () => {
  try {
    console.log('🗑️ Removing all people named "Mary"...');
    const result = await Person.deleteMany({ name: 'Mary' });
    console.log('✅ People removed:', result);
    return result;
  } catch (err) {
    console.error('❌ Error removing people:', err);
  }
};

/* ----------------------------------------------------------------
   🔟 Chain Query Helpers: find(), sort(), limit(), select(), exec()
---------------------------------------------------------------- */
const queryChain = async () => {
  try {
    console.log('🔍 Finding people who like "burritos" (limit 2, sorted by name)...');
    const data = await Person.find({ favoriteFoods: 'burritos' })
      .sort('name')
      .limit(2)
      .select('-age');
    console.log('✅ Query Chain result:', data);
    return data;
  } catch (err) {
    console.error('❌ Error in query chain:', err);
  }
};

// Export all functions
module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain,
};
