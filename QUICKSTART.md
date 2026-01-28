# Quick Start Guide - Portfolio Website

## 🚀 Getting Started

### 1. **First Time Setup**
```bash
# Navigate to the project
cd /Users/srikanthsamudrala/SrikanthProtfilo

# Install dependencies (already done if this is a fresh clone)
npm install
```

### 2. **Development**
```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5173/
```

### 3. **Building for Production**
```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

### 4. **Linting**
```bash
# Check for code quality issues
npm run lint
```

## 📁 Project Structure Overview

```
src/
├── components/           # All React components
│   ├── Navbar.tsx       # Navigation bar (sticky)
│   ├── Hero.tsx         # Hero/landing section
│   ├── About.tsx        # About me section
│   ├── Education.tsx    # Education timeline
│   ├── Projects.tsx     # Projects showcase
│   ├── Internship.tsx   # Work experience
│   ├── Skills.tsx       # Skills display
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── App.tsx              # Main app component
├── index.css            # Global styles
└── main.tsx             # Entry point
```

## 🎨 Customization Guide

### **Change Color Scheme**
Edit `src/index.css` CSS variables:
```css
:root {
  --primary-color: #0f172a;
  --accent-color: #3b82f6;
  --accent-light: #60a5fa;
  /* ... other colors ... */
}
```

### **Update Personal Information**
- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Contact**: Edit `src/components/Contact.tsx`
- **Footer**: Edit `src/components/Footer.tsx`

### **Add New Section**
1. Create a new component in `src/components/NewSection.tsx`
2. Create corresponding style file `src/components/NewSection.css`
3. Import it in `src/App.tsx`
4. Add navigation link in `src/components/Navbar.tsx`

### **Update Fonts**
Edit the `--font-family` variable in `src/index.css`

### **Add Images**
Place images in `public/` folder and reference them:
```jsx
<img src="/image-name.jpg" alt="description" />
```

## 🔧 Key Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 5** - Build tool
- **react-scroll** - Smooth scrolling
- **react-icons** - Icon library
- **CSS3** - Styling with animations

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
# Kill the process on port 5173
# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Then restart
npm run dev
```

### Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# TypeScript compilation issues
npm run lint

# Clear Vite cache
rm -rf dist .vite
npm run build
```

## 📚 Useful Links

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [react-scroll](https://www.npmjs.com/package/react-scroll)
- [react-icons](https://react-icons.github.io/react-icons/)

## 💡 Tips & Best Practices

1. **Performance**: Use CSS animations instead of JavaScript when possible
2. **Accessibility**: Always include alt text for images and semantic HTML
3. **Mobile First**: Design for mobile first, then add desktop styles
4. **Code Organization**: Keep components small and focused (under 200 lines)
5. **Comments**: Add JSDoc comments to components for clarity

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Push the `dist/` folder to `gh-pages` branch

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## ✨ Next Steps

1. ✅ Project setup complete
2. ⬜ Customize personal information
3. ⬜ Update contact email and social links
4. ⬜ Add resume download link
5. ⬜ Deploy to production
6. ⬜ Share portfolio with others

---

For more details, refer to `README.md` and `.github/copilot-instructions.md`
