# Praveen Chourasia - Portfolio Website

A modern, responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

Your site will be running at `http://localhost:5173`

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 📝 Customization Guide

### Step 1: Update Your Personal Information

All your personal data is stored in **ONE FILE** for easy editing:

**File:** `src/data/portfolioData.js`

#### What to Edit:
- ✏️ **Personal Info**: Name, title, bio, location
- 🔗 **Social Links**: GitHub, LinkedIn, Twitter, Email
- 📄 **About Section**: Description paragraphs
- 💪 **Skills**: Add/remove skills in each category
- 🚀 **Projects**: Add/remove project cards
- 📧 **Contact**: Email and contact message

### Step 2: Add Your Images

Place your images in the `public` folder:

```
public/
├── profile.jpg          (Your profile photo)
├── resume.pdf          (Your resume)
├── projects/
│   ├── auv.jpg         (Autonomous Underwater Vehicle)
│   ├── drone.jpg       (Drone Delivery System)
│   └── vision.jpg      (Vision System)
```

**Image Requirements:**
- Profile photo: Square, 400x400px or larger
- Project images: 400x300px or larger
- Format: JPG, PNG, or WebP

### Step 3: Customize Colors (Optional)

The portfolio uses a cyan/blue color scheme. To change it:

**Main Colors Used:**
- Primary: `cyan-400` / `cyan-500`
- Secondary: `purple-400` / `purple-500`
- Background: `gray-900` / `gray-800`

**How to Change:**
1. Open any component file (e.g., `src/components/Hero.jsx`)
2. Find Tailwind classes like `text-cyan-400` or `bg-cyan-500`
3. Replace `cyan` with your preferred color (e.g., `emerald`, `blue`, `violet`)

**Popular Color Options:**
- `emerald` (green)
- `blue` (traditional blue)
- `violet` (purple)
- `rose` (pink)
- `amber` (orange)

### Step 4: Modify Sections

**To Add a Section:**
1. Create a new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add it between other sections

**To Remove a Section:**
1. Open `src/App.jsx`
2. Comment out or delete the component you don't want

**Example:**
```jsx
// Remove the Skills section by commenting it out
// <Skills />
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (images, resume, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # ALL YOUR CONTENT HERE
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Components Overview

### Navbar
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero
- Landing section with name and title
- Animated background
- Social media links
- Call-to-action button

### About
- Two-column layout (text + image)
- Profile photo with decorative border
- Experience stats cards
- Download resume button

### Skills
- Four skill categories with icons
- Animated skill tags
- Color-coded categories

### Projects
- Project cards with images
- Tech stack tags
- GitHub and demo links
- Featured project badges

### Contact
- Contact form (needs backend integration)
- Contact information cards
- Social media links

### Footer
- Quick navigation links
- Social media links
- Copyright information

## 🚀 Deployment on Vercel

### Method 1: Deploy via GitHub

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Vercel auto-detects Vite settings
- Click "Deploy"

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Environment Variables (if needed)
If you add a contact form backend or analytics:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add your API keys
3. Redeploy

## 🔧 Common Customizations

### Change Font
Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Update `tailwind.config.js`:
```js
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

### Add Form Backend
The contact form is frontend-only. To make it functional:

**Option 1: Formspree**
```jsx
<form action="https://formspree.io/f/your-form-id" method="POST">
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3: Netlify Forms**
Add to form tag:
```jsx
<form name="contact" method="POST" data-netlify="true">
```

### Add Google Analytics
Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Single column layout
- **Tablet**: Two column layout
- **Desktop**: Full multi-column layout

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🐛 Troubleshooting

### Issue: Images not showing
- Make sure images are in the `public` folder
- Check file paths in `portfolioData.js`
- Images must be referenced as `/filename.jpg` (with leading slash)

### Issue: Animations not working
- Clear browser cache
- Check console for errors
- Ensure Framer Motion is installed: `npm install framer-motion`

### Issue: Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

If you need help:
1. Check the code comments in each file
2. Review this README
3. Search for Tailwind CSS documentation
4. Check React documentation

---

Built with ❤️ using React + Vite + TailwindCSS + Framer Motion