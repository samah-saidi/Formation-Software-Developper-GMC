# 🧠 React Debug Checkpoint

Welcome to the **React Debug Checkpoint App**!  
This simple React application was purposefully built with bugs and used as a playground to explore **React Developer Tools** and practice **debugging** real-world issues in React.

## 🚀 Purpose

This project was part of a debugging checkpoint designed to:

- Analyze and fix common bugs in React components
- Understand state and props flow
- Use React Developer Tools effectively

---

## 🔍 Debug Process Overview

### 1. Initial Setup

- Created with `create-react-app`
- Includes:
  - A `Counter` component with state
  - A `Profile` component that receives `user` props

### 2. Bugs Discovered

| Component | Bug | Fix |
|----------|-----|-----|
| Profile.js | `user.nam` used instead of `user.name` | Corrected prop name |
| General | No prop validation | Added `PropTypes` to validate props |
| Counter | Edge cases not handled | Optional improvements added |

### 3. Tools Used

- 🔧 **React Developer Tools** (Chrome Extension)
- 🧪 Console for debugging messages
- 🧰 Manual inspection of props/state in the Components panel

---

## ✅ Final State

After debugging:
- All components render correctly
- Props and state are accurately tracked
- No console errors
- The app is functionally correct

---

## 📁 File Structure

```bash
react-debugging-checkpoint/
├── public/
├── src/
│ ├── components/
│ │ ├── Counter.js
│ │ └── Profile.js
│ ├── App.js
│ └── index.js
└── README.md
```

## 👩‍💻 Auteur

Samah Saidi - Développeur Data Science

📧 Contact: samah.saidi@polytechnicien.tn

🔗 GitHub: https://github.com/samah-saidi