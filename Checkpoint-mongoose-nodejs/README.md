# 🐍 Checkpoint Mongoose & Node.js vs MongoDB

## 🎯 Objectif du projet
Ce projet a pour but de **manipuler une base de données MongoDB** à l'aide de **Mongoose** et de **Node.js**.  
Vous allez apprendre à :

- Créer et sauvegarder des documents
- Lire des données
- Mettre à jour des documents
- Supprimer des documents
- Utiliser les query helpers de Mongoose

---

## 🛠️ Technologies utilisées

- Node.js 🔹
- MongoDB Atlas ou local 🗄️
- Mongoose 🐘
- dotenv 🔐 pour les variables d'environnement

---

## ⚡ Installation

1. Cloner le projet :

```bash
git clone <ton-repo-url>
cd Checkpoint-mongoose-nodejs
```

2. Installer les dépendances :
```bash
npm install
```

Créer un fichier .env à la racine du projet et ajouter votre URI MongoDB :

MONGODB_URI="mongodb://localhost:27017/checkpoint-mongoose"


⚠️ Remplacez par votre URI si vous utilisez MongoDB Atlas.

## 🚀 Lancer le projet

Pour lancer le serveur avec Node.js :
```bash
node server.js
```

Pour lancer avec nodemon (rechargement automatique) :
```bash
npm run dev
```

Vous devriez voir dans le terminal :

🌐 MongoDB URI: mongodb://localhost:27017/checkpoint-mongoose
✅ MongoDB Connected
📝 Creating a new person...
✅ Person saved: { ... }

## 📝 Fonctionnalités du projet

1️⃣ Create and Save a Person

Crée un document Person et le sauvegarde dans la base.
```bash
const savedPerson = await createAndSavePerson();
```

2️⃣ Create Many Records

Créer plusieurs documents à la fois :
```bash
const people = await createManyPeople([
  { name: 'Mary', age: 25, favoriteFoods: ['burritos'] },
  { name: 'John', age: 30, favoriteFoods: ['pizza'] }
]);
```
3️⃣ Find People by Name

Rechercher toutes les personnes portant un nom précis :
```bash
const people = await findPeopleByName('Mary');
```

4️⃣ Find One by Favorite Food

Rechercher une personne par son plat préféré :
```bash
const person = await findOneByFood('pizza');
```

5️⃣ Find Person by ID

Rechercher une personne par son _id :
```bash
const person = await findPersonById('id-de-la-personne');
```

6️⃣ Classic Update: Find, Edit, Save

Ajouter un plat à favoriteFoods d’une personne :
```bash
const updatedPerson = await findEditThenSave('id-de-la-personne');
```

7️⃣ New Update: findOneAndUpdate

Mettre à jour l’âge d’une personne par son nom :
```bash
const updatedPerson = await findAndUpdate('John Doe');
```

8️⃣ Delete One Document by ID

Supprimer une personne par _id :
```bash
const removedPerson = await removeById('id-de-la-personne');
```

9️⃣ Delete Many Documents

Supprimer toutes les personnes portant un nom précis :
```bash
const result = await removeManyPeople();
```

🔟 Chain Query Helpers

Trouver des personnes qui aiment un plat, trier, limiter et sélectionner des champs :
```bash
const data = await queryChain();
```

## 📚 Ressources

Mongoose Documentation

MongoDB Atlas

Node.js

## 🎉 Conclusion

Ce checkpoint te permet de maîtriser les opérations CRUD sur MongoDB avec Mongoose, et de préparer le terrain pour des projets Node.js plus complexes comme des API REST ou des applications fullstack.