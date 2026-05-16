landing-page/
├── package.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── images/   # Hero, Features, Testimonials
├── src/
│   ├── pages/
│   │   ├── index.jsx        # Home page
│   │   └── _app.jsx         # Global app wrapper
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx   # Wraps all sections
│   ├── styles/
│   │   └── globals.css      # Tailwind base + custom styles
│   ├── utils/
│   │   └── animations.js    # Framer Motion variants
│   └── data/
│       └── testimonials.js  # Static data for testimonials



{
  "name": "modern-landing-page",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "tailwindcss": "3.4.3",
    "autoprefixer": "10.4.19",
    "postcss": "8.4.38",
    "framer-motion": "11.0.0",
    "lucide-react": "0.344.0"
  },
  "devDependencies": {
    "eslint": "8.57.0",
    "eslint-config-next": "14.2.3"
  }
}
