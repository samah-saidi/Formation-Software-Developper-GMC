# 📝 React Redux Todo App

Une application de gestion de tâches moderne et élégante construite avec React et Redux, offrant une expérience utilisateur fluide et intuitive.

![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-5.0.1-purple?style=for-the-badge&logo=redux)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🚀 Fonctionnalités

### ✨ **Gestion des Tâches**
- ➕ **Ajout de tâches** avec validation en temps réel
- ✏️ **Édition en ligne** avec support clavier (Entrée/Échap)
- ✅ **Marquage comme terminé** avec checkbox
- 🗑️ **Suppression de tâches** avec confirmation visuelle
- 🔄 **Persistance automatique** dans le localStorage

### 🎯 **Filtrage et Organisation**
- 🔍 **Filtres intelligents** : Toutes, Terminées, En cours
- 📊 **Compteurs en temps réel** pour chaque catégorie
- 📈 **Statistiques visuelles** avec indicateurs colorés

### 🎨 **Interface Utilisateur**
- 🌈 **Design moderne** avec gradient et glassmorphism
- 📱 **Responsive design** adapté à tous les écrans
- ⚡ **Animations fluides** pour une expérience premium
- 🎭 **États vides** avec messages encourageants
- 🌙 **Thème cohérent** avec palette de couleurs harmonieuse

### ♿ **Accessibilité**
- 🎯 **Navigation clavier** complète
- 🗣️ **Labels ARIA** pour les lecteurs d'écran
- 👁️ **Contraste optimisé** pour la lisibilité
- 🎪 **Focus visible** sur tous les éléments interactifs

## 🛠️ Technologies Utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| ⚛️ **React** | 19.1.1 | Bibliothèque UI pour l'interface utilisateur |
| 🔄 **Redux** | 5.0.1 | Gestion d'état prévisible |
| 🔗 **React-Redux** | 9.2.0 | Liaison entre React et Redux |
| 🎨 **CSS3** | - | Styles modernes avec animations |
| 📦 **UUID** | 8.3.2 | Génération d'identifiants uniques |
| 🧪 **Testing Library** | 16.3.0 | Tests unitaires et d'intégration |

## 📦 Installation

### Prérequis
- 📌 **Node.js** (version 14 ou supérieure)
- 📌 **npm** ou **yarn**

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/samah-saidi/Formation-Software-Developper-GMC/tree/main/react-redux-todo-app
   cd react-redux-todo-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer l'application**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🎮 Utilisation

### 📝 **Ajouter une Tâche**
1. Saisissez votre tâche dans le champ de texte
2. Appuyez sur **Entrée** ou cliquez sur le bouton "➕ Ajouter"
3. La tâche apparaît instantanément dans la liste

### ✏️ **Modifier une Tâche**
1. Cliquez sur l'icône **📝** à côté de la tâche
2. Modifiez le texte dans le champ d'édition
3. Appuyez sur **Entrée** pour valider ou **Échap** pour annuler

### ✅ **Marquer comme Terminé**
- Cochez la case à côté de la tâche
- La tâche sera barrée et déplacée dans les statistiques "Terminées"

### 🗑️ **Supprimer une Tâche**
- Cliquez sur l'icône **🗑️** à côté de la tâche
- La tâche sera supprimée définitivement

### 🔍 **Filtrer les Tâches**
- **Toutes** : Affiche toutes les tâches
- **Terminées** : Affiche uniquement les tâches complétées
- **En cours** : Affiche uniquement les tâches non terminées

## 🏗️ Architecture du Projet

```
src/
├── 📁 Components/           # Composants React
│   ├── 📄 AddTask.js       # Composant d'ajout de tâche
│   ├── 📄 ListTask.js      # Composant de liste des tâches
│   └── 📄 Task.js          # Composant de tâche individuelle
├── 📁 Redux/               # Configuration Redux
│   ├── 📄 actions.js       # Actions Redux
│   ├── 📄 actions-types.js # Types d'actions
│   ├── 📄 reducer.js       # Reducer principal
│   └── 📄 store.js         # Configuration du store
├── 📄 App.js               # Composant principal
├── 📄 App.css              # Styles de l'application
└── 📄 index.js             # Point d'entrée de l'application
```

## 🔧 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | 🚀 Lance l'application en mode développement |
| `npm test` | 🧪 Lance les tests en mode interactif |
| `npm run build` | 🏗️ Construit l'application pour la production |
| `npm run eject` | ⚠️ Éjecte la configuration (irréversible) |

## 🎨 Personnalisation

### 🎨 **Modifier les Couleurs**
Éditez le fichier `src/App.css` pour personnaliser :
- 🌈 Palette de couleurs
- 🎭 Thème de l'application
- ✨ Animations et transitions

### 🔧 **Ajouter de Nouvelles Fonctionnalités**
1. Définissez les nouveaux types d'actions dans `actions-types.js`
2. Créez les actions correspondantes dans `actions.js`
3. Implémentez la logique dans le `reducer.js`
4. Mettez à jour les composants pour utiliser les nouvelles fonctionnalités

## 🚀 Déploiement

### 🌐 **Netlify**
1. Construisez l'application : `npm run build`
2. Déployez le dossier `build/` sur Netlify

### ☁️ **Vercel**
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration React

### 🔥 **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. 🍴 **Fork** le projet
2. 🌿 Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. 💾 Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push vers la branche (`git push origin feature/AmazingFeature`)
5. 🔄 Ouvrez une **Pull Request**

## 📋 Roadmap

### 🔮 **Fonctionnalités Futures**
- [ ] 🌙 Mode sombre/clair
- [ ] 🏷️ Système de catégories/tags
- [ ] 📅 Dates d'échéance
- [ ] 🔔 Rappels et notifications
- [ ] 📊 Graphiques de productivité
- [ ] 👥 Collaboration en équipe
- [ ] 📱 Application mobile (React Native)
- [ ] ☁️ Synchronisation cloud

## 🐛 Problèmes Connus

- ⚠️ Les tâches très longues peuvent déborder sur mobile
- ⚠️ Le localStorage a une limite de ~5-10MB

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👩‍💻 Auteur

Samah Saidi - Développeur Data Science

📧 Contact: samah.saidi@polytechnicien.tn

🔗 GitHub: https://github.com/samah-saidi

## 🙏 Remerciements

- ⚛️ Équipe React pour cette incroyable bibliothèque
- 🔄 Équipe Redux pour la gestion d'état
- 🎨 Communauté open source pour l'inspiration
- 📚 GoMyCode pour la formation

---

<div align="center">

### ⭐ N'oubliez pas de donner une étoile si ce projet vous a aidé !

**Fait avec ❤️ et beaucoup de ☕**

</div>
