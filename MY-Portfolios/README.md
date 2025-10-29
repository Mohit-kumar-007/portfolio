# 🚀 Mohit Kumar - Portfolio Website

A modern, responsive portfolio website showcasing my projects, achievements, and professional experience as a Full Stack Developer.

## ✨ Features

- **Modern UI/UX**: Beautiful gradient animations and interactive dot grid background
- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)
- **Dynamic Content**: Project showcases with images/videos, achievement cards, and certificates
- **Contact Form**: Integrated EmailJS for direct communication
- **Toast Notifications**: Real-time feedback for user interactions
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 5.4.21
- **Animations**: GSAP 3.12.5
- **3D Graphics**: Three.js
- **Routing**: React Router DOM
- **Form Handling**: EmailJS
- **State Management**: React Query

## 📁 Project Structure

```
MY-Portfolios/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # UI primitives (Button, Card, Badge, etc.)
│   │   ├── DotGrid.jsx # Interactive background animation
│   │   ├── LiquidEther.jsx # WebGL fluid animation
│   │   └── footer.jsx  # Footer component
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certificates.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohit-kumar-007/portfolio.git
cd MY-Portfolios
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Key Features Breakdown

### Home Page
- Animated gradient name display
- Profile image with glowing border
- Responsive two-column layout
- Quick navigation to projects and contact

### Projects Page
- Grid layout showcasing projects
- Image/video previews
- Technology badges
- GitHub and live demo links
- Modern pill-shaped buttons

### Achievements Page
- Hackathon wins and recognitions
- Trophy badges with rankings
- Expandable image previews
- Prize and participant details

### Certificates Page
- Professional certifications display
- Organized by category
- High-quality certificate images

### Experience Page
- Work history and internships
- Company details and responsibilities
- Timeline layout

### Contact Page
- EmailJS integration for direct messaging
- Toast notifications for form submission
- Response time indicators
- Social media links

## 🎯 Performance Optimizations

- **Lazy Loading**: Pages are lazy-loaded for faster initial load
- **Code Splitting**: Vendor chunks separated (React, Three.js, animations)
- **Image Optimization**: Proper image sizing and lazy loading
- **Minification**: Terser for JavaScript compression
- **CSS Optimization**: Tailwind CSS purging unused styles

## 📧 Contact

- **Email**: mohitsunariya@gmail.com
- **LinkedIn**: [Mohit Kumar](https://linkedin.com/in/mohitkumar007)
- **GitHub**: [Mohit-kumar-007](https://github.com/Mohit-kumar-007)
- **Twitter**: [@MohitKu77945356](https://x.com/MohitKu77945356)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by GSAP and Three.js
- UI components built with Tailwind CSS

---

**Made with ❤️ by Mohit Kumar**
