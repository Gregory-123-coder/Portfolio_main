# Gregory Robert Portfolio - Setup and Vercel Deployment

This is a Create React App portfolio website with section-based React components, custom CSS animations, EmailJS contact support, and a production-ready Vercel configuration.

## Project Structure

```text
gregory-robert-portfolio/
|-- public/
|   |-- index.html
|   `-- Gregory_Robert_Resume.pdf
|-- src/
|   |-- components/
|   |   |-- Navbar.jsx / Navbar.css
|   |   |-- ScrollProgress.jsx / ScrollProgress.css
|   |   `-- Footer.jsx / Footer.css
|   |-- hooks/
|   |   `-- useReveal.js
|   |-- sections/
|   |   |-- Hero.jsx / Hero.css
|   |   |-- About.jsx / About.css
|   |   |-- Story.jsx / Story.css
|   |   |-- Experience.jsx / Experience.css
|   |   |-- Projects.jsx / Projects.css
|   |   |-- Skills.jsx / Skills.css
|   |   |-- Certifications.jsx / Certifications.css
|   |   |-- Achievements.jsx / Achievements.css
|   |   `-- Contact.jsx / Contact.css
|   |-- App.jsx
|   |-- index.js
|   `-- index.css
|-- package.json
|-- vercel.json
|-- render.yaml
`-- SETUP_AND_DEPLOY.md
```

## Run Locally

### Requirements

- Node.js 18 or later
- npm 9 or later

### Commands

```bash
npm install
npm start
```

The site runs at:

```text
http://localhost:3000
```

## Build Locally

Before deploying, create a production build:

```bash
npm run build
```

Optional local production preview:

```bash
npx serve -s build
```

## Deploy to Vercel

### Step 1: Push the project to GitHub

If this project is not already in a GitHub repository:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/gregory-robert-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

### Step 2: Import the project in Vercel

1. Go to [vercel.com](https://vercel.com).
2. Sign in with GitHub.
3. Click `Add New...`.
4. Choose `Project`.
5. Select your portfolio repository.
6. Click `Import`.

### Step 3: Use these Vercel settings

Vercel should auto-detect Create React App. Confirm these values:

| Setting | Value |
| --- | --- |
| Framework Preset | Create React App |
| Build Command | `npm run build` |
| Output Directory | `build` |
| Install Command | `npm install` |

The included `vercel.json` also defines the build output and SPA fallback rewrite, so direct links like `/projects` or refreshed pages still route back to `index.html`.

### Step 4: Add environment variables if you configure EmailJS

This project currently stores placeholder EmailJS keys in `src/sections/Contact.jsx`.

If you later move EmailJS keys into environment variables, add them in:

```text
Vercel Project -> Settings -> Environment Variables
```

For Create React App, environment variable names must start with `REACT_APP_`, for example:

```text
REACT_APP_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY
```

After adding variables, redeploy the site.

### Step 5: Deploy

Click `Deploy`.

Vercel will:

1. Install dependencies.
2. Run `npm run build`.
3. Serve the `build` folder.
4. Give you a live URL such as:

```text
https://gregory-robert-portfolio.vercel.app
```

Every future push to the `main` branch will trigger an automatic redeploy.

## Add a Custom Domain

1. Open your project in Vercel.
2. Go to `Settings -> Domains`.
3. Add your domain, for example `gregoryrobert.dev`.
4. Follow the DNS instructions from Vercel.
5. Wait for the SSL certificate to finish provisioning.

## EmailJS Contact Form Setup

1. Create an account at [emailjs.com](https://www.emailjs.com).
2. Add an email service, such as Gmail.
3. Create an email template with fields for `name`, `email`, `subject`, and `message`.
4. Copy your Service ID, Template ID, and Public Key.
5. Replace the placeholder constants in `src/sections/Contact.jsx`.

## Updating the Portfolio

Common edits:

| Change | File |
| --- | --- |
| Name, hero line, stats | `src/sections/Hero.jsx` |
| About copy | `src/sections/About.jsx` |
| Story chapters | `src/sections/Story.jsx` |
| Internships | `src/sections/Experience.jsx` |
| Projects and demo links | `src/sections/Projects.jsx` |
| Skills | `src/sections/Skills.jsx` |
| Certifications | `src/sections/Certifications.jsx` |
| Achievements | `src/sections/Achievements.jsx` |
| Contact details | `src/sections/Contact.jsx` |
| Colors and reveal animation | `src/index.css` |

After editing:

```bash
npm run build
git add .
git commit -m "Update portfolio"
git push
```

Vercel will redeploy automatically after the push.

## Troubleshooting

### Build fails on Vercel

Run this locally first:

```bash
npm install
npm run build
```

If it fails locally, fix the error and push again.

### Page works locally but refresh shows 404 on Vercel

Keep the `rewrites` rule in `vercel.json`. It sends all routes back to `index.html`, which is required for single-page React apps.

### Contact form does not send

Check the three EmailJS values in `src/sections/Contact.jsx`, then confirm your EmailJS template field names match the form field names.

### Resume link does not work

Make sure the resume exists here:

```text
public/Gregory_Robert_Resume.pdf
```
