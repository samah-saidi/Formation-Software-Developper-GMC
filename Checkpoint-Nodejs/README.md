# 🟢 Node.js Checkpoint

Ce projet contient les exercices du checkpoint Node.js. Chaque exercice est dans un fichier séparé et montre différentes fonctionnalités de Node.js.

## 📁 Structure du projet
```bash
Checkpoint-Nodejs/
│
├─ hello-world.js           # Affiche "HELLO WORLD" dans la console
├─ server.js                # Serveur HTTP qui répond sur le port 3000
├─ file-operations.js       # Lecture et écriture de fichiers
├─ password-generator.js    # Générateur de mots de passe aléatoires
├─ email-sender.js          # Envoi d’email avec Nodemailer
├─ package.json             # Informations du projet et dépendances
└─ node_modules/            # Dossier contenant les packages installés
``` 

## ⚡ Installation

Cloner le projet (ou créer ton dossier et copier les fichiers) :
```bash
git clone https://github.com/samah-saidi/Formation-Software-Developper-GMC/tree/main/Checkpoint-Nodejs
cd Checkpoint-Nodejs
```

### Initialiser le projet Node.js (si ce n’est pas déjà fait) :
```bash
npm init -y
```

### Installer les dépendances :
```bash
npm install generate-password nodemailer
``` 

## 📝 Exécution des fichiers

#### 1️⃣ Hello World
```bash
node hello-world.js
```

💡 Affiche : HELLO WORLD

#### 2️⃣ Serveur HTTP
```bash
node server.js
```

🌐 Ouvrir http://localhost:3000
 pour voir : <h1>Hello Node!!!!</h1>

#### 3️⃣ File Operations

node file-operations.js

📄 Crée welcome.txt et lit le contenu de hello.txt.

#### 4️⃣ Password Generator
```bash
node password-generator.js
```

🔑 Génère un mot de passe aléatoire sécurisé avec lettres, chiffres et symboles.

Exemple de sortie :
```bash
Generated Password: H8#kL2!wQp
```

#### 5️⃣ Email Sender
```bash
node email-sender.js
```

📧 Envoie un email de test.
⚠️ N’oublie pas d’utiliser un mot de passe d’application et un compte de test.

## 🛠️ Technologies et Packages utilisés

| Technologie | Usage |
|-------------|-------|
| Node.js 💻 | Exécution de scripts JavaScript côté serveur |
| npm 📦 | Gestionnaire de packages pour installer et gérer les dépendances |
| http 🌐 | Création de serveur web simple et gestion des requêtes HTTP |
| fs 📂 | Lecture et écriture de fichiers sur le système de fichiers |
| generate-password 🔑 | Génération de mots de passe aléatoires sécurisés |
| nodemailer ✉️ | Envoi d’emails via Node.js |


## 🎯 Objectifs du projet

Apprendre à utiliser Node.js de manière pratique

Manipuler les fichiers et le système de fichiers

Créer un serveur HTTP simple

Générer des mots de passe aléatoires

Envoyer des emails avec Node.js

## 🏆 À améliorer

Ajouter la gestion des erreurs plus robuste

Créer un formulaire web pour générer les mots de passe

Créer un serveur qui envoie un email automatiquement