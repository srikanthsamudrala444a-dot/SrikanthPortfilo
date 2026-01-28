# 🎯 CUSTOMIZATION CHECKLIST

Complete this checklist to personalize your portfolio before going live.

## ✏️ PERSONAL INFORMATION

### Email & Contact
- [ ] Update email in `src/components/Contact.tsx` (replace `srikanth@example.com`)
- [ ] Update email in `src/components/Footer.tsx`
- [ ] Add real phone number (optional)

### Social Media & Links
- [ ] Update LinkedIn URL in `src/components/Contact.tsx`
- [ ] Update LinkedIn URL in `src/components/Footer.tsx`
- [ ] Update GitHub URL in `src/components/Contact.tsx`
- [ ] Update GitHub URL in `src/components/Footer.tsx`

### Resume Download
- [ ] Add resume PDF to `public/` folder
- [ ] Update resume link in `src/components/Hero.tsx`
  - Change `href="#"` to `href="/resume.pdf"` (or your filename)

### About Section
- [ ] Review and update `src/components/About.tsx` if needed
- [ ] Ensure interests are accurate

### Education
- [ ] Verify education details in `src/components/Education.tsx`
- [ ] Add/remove education entries if needed

### Projects
- [ ] Update project details in `src/components/Projects.tsx`
- [ ] Add real project links
- [ ] Update project descriptions
- [ ] Verify technologies listed

### Internship/Experience
- [ ] Update company name in `src/components/Internship.tsx`
- [ ] Update role and achievements
- [ ] Add dates if different

### Skills
- [ ] Review skills in `src/components/Skills.tsx`
- [ ] Update proficiency percentages
- [ ] Add/remove skills as needed

---

## 🎨 VISUAL CUSTOMIZATION (Optional)

### Colors
Edit `src/index.css` to change colors:
```css
:root {
  --primary-color: #0f172a;      /* Dark background */
  --accent-color: #3b82f6;        /* Blue accent */
  --accent-light: #60a5fa;        /* Light blue */
  --text-primary: #f1f5f9;        /* Light text */
  --text-secondary: #cbd5e1;      /* Gray text */
}
```

### Fonts
To change fonts, modify in `src/index.css`:
```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Import Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Favicon
- [ ] Replace `public/vite.svg` with your favicon
- [ ] Update `index.html` favicon link if needed

---

## 📝 METADATA & SEO

Edit `index.html`:

```html
<title>Srikanth Samudrala | Software Engineer - Portfolio</title>
<meta name="description" content="Software Engineer portfolio showcasing projects in React, Angular, and Full Stack development">
<meta name="keywords" content="web developer, software engineer, react, angular, portfolio">
<meta name="author" content="Srikanth Samudrala">
```

Update Open Graph tags for social sharing:
```html
<meta property="og:title" content="Srikanth Samudrala - Portfolio">
<meta property="og:description" content="Full Stack & Angular Developer">
<meta property="og:image" content="https://yourportfolio.com/og-image.jpg">
<meta property="og:url" content="https://yourportfolio.com">
```

---

## 🧪 TESTING CHECKLIST

### Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge

### Device Testing
- [ ] Test on desktop (1920x1080)
- [ ] Test on laptop (1440x900)
- [ ] Test on tablet (iPad, 768px)
- [ ] Test on mobile (iPhone, 375px)
- [ ] Test on small mobile (320px)

### Functionality Testing
- [ ] Navigation links work
- [ ] Smooth scrolling works
- [ ] All social links open correctly
- [ ] Resume download works
- [ ] Email link works
- [ ] Hover effects work on cards
- [ ] Mobile menu toggle works
- [ ] Animations load properly

### Performance Testing
- [ ] Run `npm run build`
- [ ] Check build output size
- [ ] Preview production build: `npm run preview`
- [ ] Test load time
- [ ] Check console for errors
- [ ] Verify all images load

---

## 📋 PRE-DEPLOYMENT VERIFICATION

### Code Quality
- [ ] Run ESLint: `npm run lint`
- [ ] Fix any warnings
- [ ] Review code comments
- [ ] Check for console errors

### Build Verification
- [ ] Run `npm run build` successfully
- [ ] dist/ folder created
- [ ] All files present in dist/
- [ ] No build errors or warnings

### Content Verification
- [ ] All personal info updated
- [ ] No placeholder text remaining
- [ ] All links working
- [ ] Resume file present
- [ ] Images loading (if added)
- [ ] Colors look good
- [ ] Animations smooth

### Documentation
- [ ] README.md reviewed
- [ ] DEPLOYMENT.md reviewed
- [ ] QUICKSTART.md reviewed
- [ ] Ready to share?

---

## 🚀 DEPLOYMENT CHECKLIST

Choose your deployment platform:

### Option 1: Vercel (Recommended)
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Deploy via Vercel dashboard
- [ ] Add custom domain (optional)
- [ ] Enable auto-deployment

### Option 2: Netlify
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Deploy
- [ ] Add custom domain (optional)

### Option 3: GitHub Pages
- [ ] Update vite.config.ts with repo name
- [ ] Run `npm run build`
- [ ] Push to GitHub
- [ ] Enable Pages in settings

### Option 4: Traditional Hosting
- [ ] Upload dist/ folder via FTP
- [ ] Configure .htaccess for SPA routing
- [ ] Test live URL
- [ ] Verify all pages work

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 📊 CUSTOMIZATION PRIORITY

### MUST DO (Required)
1. ✅ Update email address
2. ✅ Update social links
3. ✅ Update resume link
4. ✅ Fix any broken links
5. ✅ Test all sections

### SHOULD DO (Recommended)
6. ⭕ Add resume PDF file
7. ⭕ Verify all content accuracy
8. ⭕ Test on mobile
9. ⭕ Update favicon
10. ⭕ Test navigation

### NICE TO DO (Optional)
11. ⭕ Customize colors
12. ⭕ Add profile photo (optional)
13. ⭕ Change fonts
14. ⭕ Add more projects
15. ⭕ Add testimonials

---

## 🔄 WORKFLOW EXAMPLE

```bash
# 1. Make changes
# Edit files in src/components/

# 2. Test locally
npm run dev
# Open http://localhost:5173 in browser

# 3. Verify build
npm run build
npm run preview

# 4. Check quality
npm run lint

# 5. Deploy
# Follow deployment option from DEPLOYMENT.md
```

---

## 📋 QUICK EDIT LOCATIONS

| What to Change | File Location |
|---|---|
| Email | Contact.tsx, Footer.tsx |
| LinkedIn | Contact.tsx, Footer.tsx |
| GitHub | Contact.tsx, Footer.tsx |
| Resume Link | Hero.tsx |
| About Text | About.tsx |
| Projects | Projects.tsx |
| Internship Info | Internship.tsx |
| Skills | Skills.tsx |
| Colors | index.css |
| Fonts | index.css |
| Meta Tags | index.html |

---

## 💡 HELPFUL TIPS

### Before Publishing
- Test all links work
- Verify on mobile
- Check spelling
- Review all content
- Optimize images (if added)
- Check console for errors

### After Publishing
- Share with friends
- Get feedback
- Monitor for issues
- Update regularly
- Keep content fresh

### Keep It Updated
- Update skills as you learn
- Add new projects
- Update experience
- Refresh accomplishments
- Keep contact info current

---

## ✅ FINAL GO-LIVE CHECKLIST

Before making your portfolio public:

- [ ] Email updated
- [ ] Social links working
- [ ] Resume accessible
- [ ] No broken links
- [ ] Mobile version tested
- [ ] All animations work
- [ ] No console errors
- [ ] Build successful
- [ ] Content accurate
- [ ] Ready to deploy!

---

## 🎉 YOU'RE READY!

Once all items are checked, you're ready to:
1. Deploy to production (see [DEPLOYMENT.md](./DEPLOYMENT.md))
2. Share your portfolio
3. Apply for jobs
4. Impress potential employers!

---

## 📞 NEED HELP?

- Check [QUICKSTART.md](./QUICKSTART.md) for quick answers
- See [README.md](./README.md) for full details
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment
- Check [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) for all guides

---

**Happy Customizing! 🚀**

Remember: Your portfolio is a living document. Keep it updated and fresh!
