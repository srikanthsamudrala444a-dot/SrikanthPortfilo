# Deployment Guide

## 📦 Production Build

Before deploying, ensure your project builds successfully:

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## 🚀 Deployment Options

### 1. **Vercel (Recommended - Easiest)**

**Pros**: Zero-config, automatic deployments, free tier available
**Cons**: None really, it's great!

**Steps:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

Or connect your GitHub repository:
1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### 2. **Netlify**

**Pros**: Easy GitHub integration, good free tier
**Cons**: Slightly more steps than Vercel

**Steps:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or via GitHub:
1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### 3. **GitHub Pages**

**Pros**: Free, integrated with GitHub
**Cons**: Requires manual setup for custom domains

**Steps:**

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/', // Replace with your repo name
  plugins: [react()],
})
```

2. Deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push origin main
```

3. In GitHub settings:
   - Go to "Pages"
   - Select "Deploy from a branch"
   - Choose "main" branch and `/dist` folder

### 4. **AWS Amplify**

**Steps:**
1. Install AWS Amplify CLI: `npm install -g @aws-amplify/cli`
2. Run `amplify init`
3. Follow prompts
4. Run `amplify publish`

### 5. **Docker Deployment**

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### 6. **Traditional Web Hosting (cPanel, Bluehost, etc.)**

1. Run `npm run build`
2. Upload contents of `dist/` folder via FTP/File Manager
3. Set index.html as your main page

**Note:** If your app doesn't load properly:
- Create a `.htaccess` file in the `dist/` folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🌐 Custom Domain Setup

### For Vercel:
1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)

### For Netlify:
1. In Netlify → Site settings → Domain management
2. Add custom domain
3. Update DNS records

### For GitHub Pages:
1. Add `CNAME` file to `dist/` with your domain
2. Update DNS A records to GitHub's IP addresses

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder email with real email
- [ ] Add real LinkedIn profile link
- [ ] Add real GitHub profile link
- [ ] Add resume download link (or update link)
- [ ] Test all links work correctly
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run preview`
- [ ] Update favicon (replace default Vite icon)
- [ ] Add meta tags for SEO in `index.html`

## 📈 Post-Deployment

### SEO Optimization

Add meta tags to `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="web developer, react, portfolio">
<meta name="author" content="Srikanth Samudrala">
<meta property="og:title" content="Srikanth Samudrala - Portfolio">
<meta property="og:description" content="Portfolio description">
<meta property="og:url" content="https://yourportfolio.com">
```

### Analytics

Add Google Analytics to track visits:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance

- Use [Google PageSpeed Insights](https://pagespeed.web.dev)
- Check [GTmetrix](https://gtmetrix.com)
- Monitor uptime with [UptimeRobot](https://uptimerobot.com)

## 🔄 Continuous Deployment

Most platforms (Vercel, Netlify) support automatic deployments:
- Connect your GitHub repository
- Every `push` to `main` automatically deploys
- Set up preview deployments for pull requests

## 🚨 Troubleshooting Deployments

### "Cannot find module" errors
- Ensure all dependencies are listed in `package.json`
- Run `npm install` locally and commit `package-lock.json`

### Blank page after deployment
- Check browser console for errors
- Verify build command: `npm run build`
- Check if `dist/` folder contains `index.html`

### Styling not loading
- Check CSS file paths are relative
- Ensure CSS imports use correct paths
- Verify no console errors about missing files

### Links not working
- Single Page App (SPA) routing requires special config
- Use the `.htaccess` solution mentioned above
- Or use platform-specific SPA settings

## 📞 Support

If you encounter deployment issues:
1. Check platform documentation
2. Review build logs for errors
3. Test locally with `npm run preview`
4. Check GitHub Issues or StackOverflow

---

**Happy Deploying!** 🎉
