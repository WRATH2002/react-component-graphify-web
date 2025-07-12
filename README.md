# 📦 React-Component-Graphify

**Visualize your React component hierarchy like a pro.**

React-Component-Graphify scans your React project's `src/` directory, identifies import relationships between components, and generates a clean, readable tree diagram — written to a `componentsTree.txt` file. Perfect for understanding, documenting, and maintaining large React codebases.

> ✅ Zero-runtime · 🧠 Intuitive CLI · ⚡ Instant Output · 🛠️ No config needed

---

### 📍 Live Website

🌐 [react-component-graphify.vercel.app](https://react-component-graphify.vercel.app/)

---

## 📖 Features

- 🔍 Scans your `src/` folder for all components
- 🔗 Maps all import relationships
- ✍️ Outputs to `componentsTree.txt` inside a dedicated `graphify/` folder
- 📁 Shows line numbers of where components are imported
- ♻️ Watches for real-time changes (optional with `concurrently`)
- ⚙️ Zero setup — just install and run!

---

## 🚀 Installation

### 1. Create your React project (if not already)

We recommend Vite:

```bash
npm create vite@latest my-project
cd my-project
```

## 2. Install the package

```bash
npm i react-component-graphify
```

## 3. Run the tool

```bash
npx react-component-graphify
```

This will:

Instantly scan your React project's src/ folder

Generate a beautifully structured componentsTree.txt file

Output will be available at:
src/graphify/componentsTree.txt

## ⚡ Optional: Auto-run on project start

You can automate the graph generation using concurrently:

```bash
npm i concurrently --save-dev
```

Update your package.json like this:

```bash
"scripts": {
  "start": "concurrently \"vite\" \"npx react-component-graphify\""
}
```

Replace vite with react-scripts start or whatever command your project uses.

## 🧾 Output Example

```bash
└── 📁 src
    ├── 📦 App.jsx
    │   ├── Header.jsx           ← line 3
    │   └── Footer.jsx           ← line 10
    │
    └── 📁 components
        |
        ├── 📦 Header.jsx
        ├── 📦 Footer.jsx
        └── 📦 Sidebar.jsx
            └── Navigation.jsx   ← line 5
```

## 📚 Use Cases

- 🧩 Understand legacy codebases
- 📓 Improve documentation
- 👨‍💻 Onboard new developers faster
- 🛠 Refactor confidently

## ❤️ Like this project?

Drop a ⭐ on GitHub (replace with actual)!

```bash

---

### ✅ Things to Replace Before Publishing:
- `yourusername` → Your actual GitHub username
- GitHub repo links → Add actual repo URLs if hosted on GitHub
- Optional badges (like NPM version, license, etc.) if you want them

Let me know if you'd like this in a downloadable file or want to include GIF demos, badges, or dark mode previews.
```
