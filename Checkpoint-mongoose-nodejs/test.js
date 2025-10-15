const {
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
} = require('./server');
const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('🟢 Connection open, lancement des tests...');

  createAndSavePerson(() => {
    createManyPeople([
      { name: 'Mary', age: 25, favoriteFoods: ['burritos'] },
      { name: 'John', age: 30, favoriteFoods: ['pizza'] }
    ], () => {
      findPeopleByName('Mary', () => {
        findOneByFood('pizza', () => {
          queryChain(() => {
            removeManyPeople(() => {
              console.log('✅ Tous les tests terminés !');
              mongoose.connection.close();
            });
          });
        });
      });
    });
  });
});
