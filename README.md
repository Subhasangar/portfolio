# SUBHASANGAR - Modern React Portfolio

A modern, dynamic, and animated portfolio website built with React, Framer Motion, and Tailwind CSS.

## 🚀 Features

- **Dynamic Animations**: Smooth transitions and animations using Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean and professional design with glow effects
- **Interactive Components**: Hover effects, form validation, and smooth scrolling
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📦 Tech Stack

- **React 18** - UI Framework
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **React Icons** - Icon library
- **PostCSS** - CSS transformations

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to project directory**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 📝 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── images/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ Key Features Implemented

### 1. **Navbar**
- Sticky navigation with smooth animations
- Mobile responsive hamburger menu
- Animated logo with glow effect

### 2. **Hero Section**
- Full-screen introduction with animations
- Rotating animated circles with floating icon
- Call-to-action buttons with hover effects

### 3. **About Section**
- Image with zoom hover effect
- Animated background cards
- Rotating education icon

### 4. **Skills Section**
- Grid layout with 7 technical skills
- Hover animations with color gradients
- Icon rotation on hover
- Bottom accent line animation

### 5. **Projects Section**
- Animated project carousel
- Smooth slide transitions
- Auto-play with manual pause on hover
- Responsive layout

### 6. **Contact Section**
- Animated contact form
- Form submission feedback
- Contact information cards with hover effects
- Icon rotation animations

### 7. **Footer**
- Social media links with animations
- Gradient line animation
- Responsive layout

## 🎨 Color Theme

The portfolio uses a modern dark theme with neon green accents:

- **Primary (Dark)**: `#0a0a0a`
- **Secondary (Darker)**: `#111111`
- **Accent (Neon Green)**: `#39ff14`
- **Accent Dark**: `#2bd411`
- **Accent Light**: `#5cff47`

## 🔧 Customization

### Modify Colors
Edit `tailwind.config.js` to change the color theme:
```javascript
colors: {
  primary: "#0a0a0a",
  secondary: "#111111",
  accent: "#39ff14",
  "accent-dark": "#2bd411",
  "accent-light": "#5cff47",
}
```

### Update Content
Edit individual component files in `src/components/` to update:
- Personal information in Hero and Contact sections
- Skills in Skills.jsx
- Projects in Projects.jsx
- Contact details in Contact.jsx

### Add Social Links
Update social media links in `src/components/Footer.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Subhasangar S** - Full Stack Developer

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

- **Email**: ssubhasangar@gmail.com
- **Phone**: +91 8428487274

---

Made with ❤️ using React & Framer Motion
