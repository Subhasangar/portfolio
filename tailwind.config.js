/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090807",
        secondary: "#13100d",
        tertiary: "#211a12",
        accent: "#f0c66e",
        "accent-dark": "#b8862f",
        "accent-light": "#fff1bd",
        "text-primary": "#f8efe0",
        "text-secondary": "#cdbf9f",
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 10px #d9b76f, 0 0 20px rgba(217,183,111,0.65), 0 0 30px rgba(217,183,111,0.35)' },
          '50%': { textShadow: '0 0 20px #ffe2a3, 0 0 40px rgba(217,183,111,0.7), 0 0 60px rgba(159,121,50,0.45)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'parallax-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-8px) translateX(4px)' },
          '50%': { transform: 'translateY(-12px) translateX(0px)' },
          '75%': { transform: 'translateY(-8px) translateX(-4px)' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(10deg) rotateY(10deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
        },
        'depth-pulse': {
          '0%, 100%': { transform: 'translateZ(0px) scale(1)' },
          '50%': { transform: 'translateZ(20px) scale(1.02)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'parallax-float': 'parallax-float 6s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 4s ease-in-out infinite',
        'depth-pulse': 'depth-pulse 3s ease-in-out infinite',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      backgroundImage: {
        'hero-bg': "url('/images/bg-hero.svg')",
        'about-bg': "url('/images/bg-about.svg')",
        'skills-bg': "url('/images/bg-skills.svg')",
        'projects-bg': "url('/images/bg-projects.svg')",
        'contact-bg': "url('/images/bg-contact.svg')",
      },
    },
  },
  plugins: [],
}
