<!-- GitHub Copilot Instructions -->
<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Website Development Guidelines

## Project Overview
This is a modern, responsive personal portfolio website for Srikanth Samudrala, a Software Engineer specializing in Full Stack and Angular development. Built with React, TypeScript, and Vite for optimal performance.

## Architecture
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Custom CSS with CSS Variables and animations
- **Scroll Library**: react-scroll for smooth scrolling
- **Icons**: react-icons for professional iconography

## Project Structure
```
src/
├── components/          # Reusable React components
│   ├── Navbar.tsx      # Sticky navigation bar
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About me section
│   ├── Education.tsx   # Education timeline
│   ├── Projects.tsx    # Project showcase
│   ├── Internship.tsx  # Work experience
│   ├── Skills.tsx      # Skills and proficiency
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer with social links
├── App.tsx            # Main application component
├── App.css            # App-wide styles
├── main.tsx           # React entry point
└── index.css          # Global styles and animations
```

## Key Features
1. **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
2. **Animations**: Smooth scrolling, fade-in-up, slide-in effects
3. **Accessibility**: Semantic HTML, proper color contrast, keyboard navigation
4. **Performance**: Lazy loading, optimized images, minimal dependencies
5. **SEO**: Proper heading hierarchy, semantic markup, meta tags

## Styling Guidelines
- Use CSS variables defined in `index.css` for consistency
- Follow mobile-first responsive design
- Use semantic class names (BEM-like convention)
- Implement smooth transitions with `--transition-normal` (0.3s)
- Maintain dark theme with blue accent colors

## Component Development
- Each component should be self-contained and focused
- Use TypeScript for type safety
- Include JSDoc comments for clarity
- Implement proper error boundaries
- Keep components under 200 lines if possible

## Performance Considerations
- Minimize re-renders using React.memo where appropriate
- Use CSS animations instead of JavaScript animations
- Lazy load images and components as needed
- Keep bundle size minimal

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Fallbacks for older CSS features

## Common Tasks
- **Adding new section**: Create component in src/components, add route in Navbar, import in App.tsx
- **Updating styling**: Modify component CSS file or global index.css
- **Adding icons**: Import from react-icons (already configured)
- **Smooth scrolling**: Use react-scroll Link component with duration prop
