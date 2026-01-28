# Installation & Setup Instructions

## Prerequisites

Before you start, make sure you have:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - Check with `npm --version`
- **A code editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)

---

## Step-by-Step Installation

### 1️⃣ Check Node.js Installation
Open PowerShell or Command Prompt and run:
```bash
node --version
npm --version
```

You should see version numbers like:
- Node: v18.16.0 (or higher)
- npm: 9.6.7 (or higher)

### 2️⃣ Navigate to Portfolio Directory
```bash
cd "C:\Users\SUBHASANGAR  S FSD\Music\Portfolio"
```

### 3️⃣ Install Dependencies
This installs all required packages (React, Framer Motion, Tailwind CSS, etc.):
```bash
npm install
```

⏳ This may take 2-3 minutes on first run.

You should see:
```
added XXX packages in X.XXs
```

### 4️⃣ Start Development Server
```bash
npm run dev
```

You should see:
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### 5️⃣ Open in Browser
Click the link or open: **http://localhost:3000/**

🎉 Your portfolio is now running!

---

## Available Scripts

Once dependencies are installed, you can use these commands:

### Development
```bash
npm run dev
```
- Starts the development server
- Hot reload - changes appear instantly
- Accessible at http://localhost:3000

### Production Build
```bash
npm run build
```
- Creates optimized `dist` folder
- Ready for deployment
- Minified and compressed code

### Preview Build
```bash
npm run preview
```
- Preview the production build locally
- Test before deploying

---

## File Structure Summary

```
Portfolio/
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx               # Main app
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── images/                   # Project images
├── index.html                # HTML entry
├── package.json              # Dependencies
├── vite.config.js            # Vite config
├── tailwind.config.js        # Tailwind config
└── postcss.config.js         # PostCSS config
```

---

## 📦 What Gets Installed?

Your `package.json` includes:

**Core Dependencies:**
- `react@18.2.0` - UI framework
- `react-dom@18.2.0` - React for web
- `framer-motion@10.16.4` - Smooth animations
- `react-icons@4.12.0` - Beautiful icons
- `react-intersection-observer@9.5.2` - Scroll detection

**Build Tools:**
- `vite@5.0.0` - Lightning fast build tool
- `@vitejs/plugin-react@4.2.0` - React support for Vite
- `tailwindcss@3.3.6` - CSS framework
- `postcss@8.4.31` - CSS transformer
- `autoprefixer@10.4.16` - Browser prefixes

---

## Folder & File Explanations

### `src/components/` - React Components
Each component is a separate file:
- **Navbar.jsx** - Navigation bar with mobile menu
- **Hero.jsx** - Hero section with intro
- **About.jsx** - About me section
- **Skills.jsx** - Technical skills grid
- **Projects.jsx** - Project carousel
- **Contact.jsx** - Contact form
- **Footer.jsx** - Footer with social links

### `src/App.jsx` - Main Component
Combines all components and applies global animations.

### `src/main.jsx` - Entry Point
Loads React and mounts the app to `index.html`.

### `src/index.css` - Global Styles
Tailwind directives and custom animations.

### Configuration Files
- **vite.config.js** - Vite build settings
- **tailwind.config.js** - Tailwind customization
- **postcss.config.js** - PostCSS plugins
- **package.json** - Project dependencies

---

## 🎨 Customization Quick Tips

### Update Your Name
In `src/components/Hero.jsx`, change:
```jsx
<span className="block">SUBHASANGAR</span>
// To:
<span className="block">YOUR NAME</span>
```

### Change Color Theme
In `tailwind.config.js`, modify:
```javascript
colors: {
  accent: "#39ff14",      // Change this neon green!
}
```

### Add More Skills
In `src/components/Skills.jsx`, add to the `skills` array.

### Update Contact Info
In `src/components/Contact.jsx`, update contact details.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 2: Netlify
1. Run: `npm run build`
2. Drag `dist` folder to [Netlify](https://netlify.com)

### Option 3: GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run: `npm run build`
3. Push `dist` to `gh-pages` branch

---

## Troubleshooting

### "npm is not recognized"
- **Solution:** Node.js not installed properly
- Install from: https://nodejs.org/

### "Port 3000 already in use"
- **Solution:** Change port in `vite.config.js`
```javascript
server: {
  port: 3001,  // or any free port
}
```

### "Module not found errors"
- **Solution:** Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Images not showing"
- **Solution:** Ensure images are in `images/` folder
- Update image paths in components

### "Slow animations"
- **Solution:** Lower system graphics or browser extensions
- Try disabling extensions or using another browser

---

## 🔄 Day-to-Day Usage

**Every time you want to work:**

1. Open PowerShell in portfolio folder
2. Run: `npm run dev`
3. Click http://localhost:3000/
4. Edit files (changes appear instantly!)
5. Press `Ctrl+C` to stop server

**When done working:**

1. Press `Ctrl+C` to stop server
2. Run: `npm run build` to create production version
3. Deploy using Vercel/Netlify

---

## 📚 Resources

- [Framer Motion](https://www.framer.com/motion/) - Animation docs
- [Tailwind CSS](https://tailwindcss.com/) - Styling docs
- [React](https://react.dev/) - React documentation
- [Vite](https://vitejs.dev/) - Vite documentation

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Portfolio opens at localhost:3000
- [ ] All animations working smoothly
- [ ] Updated with your name
- [ ] Updated contact information
- [ ] Ready to deploy!

---

## 🎉 You're Ready!

Your modern React portfolio is fully set up and ready to use.

**Next Step:** See [QUICKSTART.md](./QUICKSTART.md) for customization guide.

For detailed info, see [README.md](./README.md)

Happy coding! 🚀
