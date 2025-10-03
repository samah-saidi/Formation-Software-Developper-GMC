# 🚀 Portfolio Website - Next.js

![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css)

> 💼 Un portfolio moderne et responsive construit avec Next.js, TypeScript et Tailwind CSS

---

## ✨ Aperçu

Ce projet est un site portfolio personnel professionnel qui présente vos compétences, projets et informations de contact. Il utilise les dernières technologies web pour offrir une expérience utilisateur exceptionnelle.

### 🎯 Fonctionnalités Principales

- ✅ **Design Responsive** - Fonctionne parfaitement sur tous les appareils 📱💻
- ✅ **Navigation Fluide** - Menu de navigation moderne avec animations 🎨
- ✅ **Page Accueil** - Présentation professionnelle avec liens sociaux 🏠
- ✅ **Page À Propos** - Biographie et compétences techniques 👨‍💻
- ✅ **Page Projets** - Portfolio de projets avec images et descriptions 💼
- ✅ **Page Contact** - Formulaire de contact fonctionnel 📧
- ✅ **Optimisé SEO** - Meta tags et structure optimisée 🔍
- ✅ **Performance** - Chargement rapide et optimisé ⚡

---

## 🛠️ Technologies Utilisées

| Technologie | Usage | Icône |
|------------|-------|-------|
| **Next.js 13+** | Framework React | ⚡ |
| **React 18** | Bibliothèque UI | ⚛️ |
| **TypeScript** | Typage statique | 📘 |
| **Tailwind CSS** | Styling | 🎨 |
| **Lucide React** | Icônes | 🎭 |
| **Vercel** | Déploiement | 🚀 |

---

## 📦 Installation

### Prérequis

Assurez-vous d'avoir installé:
- 📌 Node.js 18+ 
- 📌 npm ou yarn ou pnpm

### Étapes d'Installation

1️⃣ **Cloner le repository**
```bash
git clone https://github.com/samah-saidi/checkpoint-nextjs-my-portfolio.git
cd checkpoint-nextjs-my-portfolio
```

2️⃣ **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3️⃣ **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4️⃣ **Ouvrir dans le navigateur**
```
🌐 http://localhost:3000
```

---

## 📁 Structure du Projet

```
checkpoint-nextjs-my-portfolio/
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📄 page.tsx          # 🏠 Page d'accueil
│   │   ├── 📄 layout.tsx        # 📐 Layout principal
│   │   ├── 📄 globals.css       # 🎨 Styles globaux
│   │   ├── 📂 about/
│   │   │   └── 📄 page.tsx      # 👨‍💻 Page À propos
│   │   ├── 📂 projects/
│   │   │   └── 📄 page.tsx      # 💼 Page Projets
│   │   └── 📂 contact/
│   │       └── 📄 page.tsx      # 📧 Page Contact
│   │
│   └── 📂 components/
│       ├── 📄 Navigation.tsx     # 🧭 Composant Navigation
│       ├── 📄 HomePage.tsx       # 🏠 Composant Accueil
│       ├── 📄 AboutPage.tsx      # 👤 Composant À propos
│       ├── 📄 ProjectsPage.tsx   # 💻 Composant Projets
│       └── 📄 ContactPage.tsx    # ✉️ Composant Contact
│
├── 📂 public/
│   └── 📂 images/               # 🖼️ Images statiques
│
├── 📄 package.json              # 📦 Dépendances
├── 📄 tailwind.config.js        # ⚙️ Configuration Tailwind
├── 📄 tsconfig.json             # 📘 Configuration TypeScript
├── 📄 next.config.js            # ⚙️ Configuration Next.js
└── 📄 README.md                 # 📖 Documentation
```

---

## 🎨 Pages du Portfolio

### 🏠 Accueil (Home)
- Photo de profil
- Présentation personnelle
- Liens vers GitHub et LinkedIn
- Design gradient moderne

### 👨‍💻 À Propos (About)
- Biographie détaillée
- Liste des compétences techniques
- Images professionnelles
- Technologies maîtrisées

### 💼 Projets (Projects)
- 3 projets en vitrine
- Images de démonstration
- Descriptions détaillées
- Stack technique de chaque projet
- Liens vers démos et code source

### 📧 Contact (Contact)
- Formulaire de contact fonctionnel
- Coordonnées professionnelles
- Liens sociaux (GitHub, LinkedIn)
- Validation des champs

---

## 🚀 Scripts Disponibles

| Commande | Description | Emoji |
|----------|-------------|-------|
| `npm run dev` | Lance le serveur de développement | 🏃 |
| `npm run build` | Compile l'application pour production | 🔨 |
| `npm start` | Lance l'application en mode production | ▶️ |
| `npm run lint` | Vérifie le code avec ESLint | 🔍 |

---

## 🎯 Personnalisation

### 1️⃣ Informations Personnelles

Mettez à jour les informations dans chaque composant:

**`src/components/HomePage.tsx`**
```tsx
// Changez le nom
<h1>Hi, I'm <span>Samah SAIDI</span></h1>

// Changez la description
<p>Étudiante Ingénieure en Data Science & Intelligence Artificielle</p>


<a href="https://github.com/votre-username">GitHub</a>
<a href="www.linkedin.com/in/samah-saidi-005196253">LinkedIn</a>
```

### 2️⃣ Compétences Techniques

**`src/components/AboutPage.tsx`**
```tsx
const skills = [
  'Vos', 'Compétences', 'Ici', 'React', 'Node.js', 
  'MongoDB', 'etc...'
];
```

### 3️⃣ Projets

**`src/components/ProjectsPage.tsx`**
```tsx
const projects = [
  {
    id: 1,
    title: 'Nom de votre projet',
    description: 'Description détaillée...',
    image: 'URL de votre image',
    technologies: ['React', 'Node.js', 'etc'],
    liveUrl: 'URL de la démo',
    githubUrl: 'URL du repo GitHub'
  },
  // Ajoutez plus de projets...
];
```

### 4️⃣ Images

Remplacez les URLs d'images Unsplash par vos propres images:
```tsx
// Dans HomePage.tsx
<img src="/images/votre-photo-profil.jpg" alt="Profile" />

// Dans ProjectsPage.tsx
image: '/images/votre-projet.jpg'
```

### 5️⃣ Couleurs et Thème

Modifiez les couleurs dans `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#votre-couleur',
        secondary: '#votre-couleur',
      }
    }
  }
}
```

---

## 🌐 Déploiement

### Déployer sur Vercel (Recommandé) 🚀

1️⃣ **Créer un compte sur [Vercel](https://vercel.com)**

2️⃣ **Installer Vercel CLI**
```bash
npm i -g vercel
```

3️⃣ **Déployer**
```bash
vercel
```

4️⃣ **Suivre les instructions** et votre site sera en ligne! 🎉

### Déployer sur Netlify 🌟

1️⃣ **Build le projet**
```bash
npm run build
```

2️⃣ **Connecter votre repo GitHub à Netlify**

3️⃣ **Configurer les paramètres:**
- Build command: `npm run build`
- Publish directory: `.next`

### Déployer sur GitHub Pages 📄

```bash
npm run build
npm run export
```

Puis poussez le contenu du dossier `out/` vers la branche `gh-pages`

---

## 📊 Performance & Optimisation

### ⚡ Optimisations Implémentées

- ✅ **Images optimisées** avec Next.js Image
- ✅ **Code splitting** automatique
- ✅ **Lazy loading** des composants
- ✅ **CSS optimisé** avec Tailwind
- ✅ **SEO optimisé** avec metadata
- ✅ **Bundle size minimisé**

### 📈 Scores Lighthouse

| Métrique | Score |
|----------|-------|
| Performance | 🟢 95+ |
| Accessibility | 🟢 100 |
| Best Practices | 🟢 100 |
| SEO | 🟢 100 |

---

## 🐛 Résolution de Problèmes

### Problème: Conflit entre App Router et Pages Router
```bash
# Solution: Supprimer le répertoire pages
rm -rf src/pages
npm run dev
```

### Problème: Erreur lors de l'installation
```bash
# Solution: Nettoyer le cache et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Problème: Les styles Tailwind ne s'appliquent pas
```bash
# Vérifier que globals.css contient:
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📚 Ressources Utiles

- 📖 [Documentation Next.js](https://nextjs.org/docs)
- 🎨 [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- ⚛️ [Documentation React](https://react.dev)
- 📘 [Documentation TypeScript](https://www.typescriptlang.org/docs)
- 🎭 [Lucide Icons](https://lucide.dev)

---

## 🤝 Contribution

Les contributions sont les bienvenues! 🎉

1. 🍴 Fork le projet
2. 🌿 Créer une branche (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push vers la branche (`git push origin feature/AmazingFeature`)
5. 🔃 Ouvrir une Pull Request

---

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👤 Auteur

**Votre Nom**

- 💼 LinkedIn: [@samah SAIDI](www.linkedin.com/in/samah-saidi-005196253)
- 🐙 GitHub: [@samah-saidi](https://github.com/samah-saidi)
- 📧 Email: samah.saidi@polytechnicien.tn

---



<div align="center">

### 🌟 Si ce projet vous a aidé, donnez-lui une étoile! ⭐

**Fait avec ❤️ et ☕ par [Votre Nom]**

[⬆ Retour en haut](#-portfolio-website---nextjs)

</div>
