# Deployment Guide - Vercel

This guide will walk you through deploying your portfolio to Vercel step by step.

## Prerequisites

- GitHub account (free)
- Vercel account (free) - sign up at [vercel.com](https://vercel.com)
- Your portfolio code ready

## Step-by-Step Deployment

### Option 1: Deploy via GitHub (Recommended)

#### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Name your repository (e.g., `portfolio` or `praveen-portfolio`)
4. Choose **Public** or **Private**
5. **Do NOT** initialize with README (we already have one)
6. Click **"Create repository"**

#### Step 2: Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Set main branch
git branch -M main

# Add your GitHub repository (replace with YOUR repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/praveenchourasia/portfolio.git
git push -u origin main
```

#### Step 3: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** and choose **"Continue with GitHub"**
3. After logging in, click **"Add New..."** → **"Project"**
4. You'll see a list of your GitHub repositories
5. Find your portfolio repository and click **"Import"**

#### Step 4: Configure Project

Vercel will auto-detect your settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

**You don't need to change anything!** Just click **"Deploy"**

#### Step 5: Wait for Deployment

- Vercel will build and deploy your site (takes 1-2 minutes)
- You'll see a progress screen
- Once done, you'll get a live URL like: `your-portfolio.vercel.app`

#### Step 6: Visit Your Site

Click the **"Visit"** button or the URL to see your live portfolio!

---

### Option 2: Deploy via Vercel CLI

If you prefer using the command line:

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

#### Step 3: Deploy

```bash
# Run from your project directory
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → Choose a name
- **Directory?** → Press Enter (current directory)
- **Override settings?** → No

#### Step 4: Deploy to Production

```bash
vercel --prod
```

Your site is now live!

---

## Custom Domain (Optional)

### Add Your Own Domain

1. Go to your Vercel Dashboard
2. Select your project
3. Click **"Settings"** → **"Domains"**
4. Click **"Add"**
5. Enter your domain (e.g., `praveenchourasia.com`)
6. Follow the instructions to update your domain's DNS settings

**Popular Domain Providers:**
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

---

## Automatic Deployments

Once connected to GitHub, Vercel automatically deploys when you:
1. Push to the `main` branch
2. Merge a pull request
3. Make any changes to your repository

### How to Update Your Live Site

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Update portfolio content"
git push
```

Vercel will automatically rebuild and deploy! ✨

---

## Environment Variables

If you add features that need API keys (contact form, analytics, etc.):

1. Go to Vercel Dashboard → Your Project
2. Click **"Settings"** → **"Environment Variables"**
3. Add your variables:
   - Name: `VITE_API_KEY`
   - Value: `your-api-key-here`
   - Environment: Production, Preview, Development
4. Click **"Save"**
5. Redeploy your site

**Example in Code:**
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## Troubleshooting

### Build Failed

**Issue:** Build fails on Vercel

**Solutions:**
1. Check your Node.js version (use 18.x or higher)
2. Make sure `package.json` has all dependencies
3. Test build locally: `npm run build`
4. Check Vercel build logs for specific errors

### Images Not Loading

**Issue:** Images show locally but not on Vercel

**Solutions:**
1. Ensure images are in the `public` folder
2. Use paths starting with `/` (e.g., `/profile.jpg` not `profile.jpg`)
3. Check image file names match exactly (case-sensitive)
4. Clear Vercel cache and redeploy

### Contact Form Not Working

**Issue:** Contact form doesn't send emails

**Solutions:**
The form is frontend-only. Choose a backend:

**Option 1 - Formspree (Easiest)**
```jsx
<form action="https://formspree.io/f/your-id" method="POST">
```

**Option 2 - EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3 - Netlify Forms**
Deploy to Netlify instead and use their forms feature

---

## Performance Optimization

### Make Your Site Faster

1. **Optimize Images**
   - Use WebP format
   - Compress images with TinyPNG
   - Use lazy loading

2. **Enable Vercel Analytics**
   - Go to Project Settings → Analytics
   - Enable Web Analytics (free)

3. **Add Caching Headers**
   Create `vercel.json`:
   ```json
   {
     "headers": [
       {
         "source": "/assets/(.*)",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "public, max-age=31536000, immutable"
           }
         ]
       }
     ]
   }
   ```

---

## Monitoring Your Site

### Vercel Dashboard Features

1. **Analytics** - See visitor stats
2. **Deployments** - View deployment history
3. **Logs** - Check for errors
4. **Speed Insights** - Performance metrics

### Add Google Analytics (Optional)

1. Create a Google Analytics account
2. Get your Measurement ID
3. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Next Steps After Deployment

✅ **Share Your Portfolio**
- Add to your resume
- Share on LinkedIn
- Add to GitHub profile README
- Tweet about it!

✅ **SEO Optimization**
- Submit to Google Search Console
- Create a sitemap
- Add meta descriptions
- Use semantic HTML

✅ **Maintenance**
- Update projects regularly
- Keep dependencies updated: `npm update`
- Monitor site performance
- Check for broken links

---

## Useful Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Check Vercel deployment status
vercel list
```

---

## Support

**Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
**Vercel Support:** [vercel.com/support](https://vercel.com/support)

---

🎉 **Congratulations!** Your portfolio is now live on the internet!

Your live URL will be something like:
- `your-portfolio.vercel.app`
- Or your custom domain if you added one

Share it with the world! 🚀