# Gregory Robert Portfolio — Setup & Deployment Guide

## Project Structure

```
gregory-robert-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   └── Footer.jsx / Footer.css
│   ├── hooks/
│   │   └── useReveal.js
│   ├── sections/
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Experience.jsx / Experience.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Certifications.jsx / Certifications.css
│   │   ├── Achievements.jsx / Achievements.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── render.yaml
└── .gitignore
```

---

## Step 1 — Run Locally

### Prerequisites
- Node.js v18 or later installed (`node -v` to check)
- npm v9+ (`npm -v` to check)

### Commands
```bash
# Navigate to the project folder
cd gregory-robert-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app opens at **http://localhost:3000**. Hot reload is enabled — save any file to see changes instantly.

---

## Step 2 — Set Up EmailJS (Contact Form)

This lets the contact form send emails directly to your inbox without a backend.

### 2.1 Create an EmailJS Account
1. Go to https://www.emailjs.com and sign up (free tier supports 200 emails/month).

### 2.2 Add an Email Service
1. In the EmailJS dashboard, go to **Email Services** → **Add New Service**.
2. Choose **Gmail** (recommended).
3. Connect your Gmail account (`gregorynadarrobert@gmail.com`).
4. Note down the **Service ID** (e.g., `service_abc123`).

### 2.3 Create an Email Template
1. Go to **Email Templates** → **Create New Template**.
2. Set up the template like this:

```
Subject: New message from {{name}} — {{subject}}

From: {{name}} ({{email}})

{{message}}
```

3. Set **To Email** to your Gmail address.
4. Note down the **Template ID** (e.g., `template_xyz789`).

### 2.4 Get Your Public Key
1. Go to **Account** → **General** → copy the **Public Key**.

### 2.5 Update Contact.jsx
Open `src/sections/Contact.jsx` and replace these three lines at the top:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';     // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // from Account → General
```

---

## Step 3 — Add Your Resume PDF (Optional)

If you want the "Resume ↗" nav link to work:
1. Export your resume as `Gregory_Robert_Resume.pdf`.
2. Place it in the `public/` folder.

The link in the Navbar already points to `/Gregory_Robert_Resume.pdf` which serves from `public/` automatically.

---

## Step 4 — Build for Production

```bash
npm run build
```

This creates an optimised `build/` folder. Test it locally:

```bash
npx serve -s build
```

Visit http://localhost:3000 to verify everything works before deploying.

---

## Step 5 — Deploy to Render

### 5.1 Push to GitHub
```bash
# From the project root
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

> Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### 5.2 Create a Render Account
1. Go to https://render.com and sign up with GitHub.

### 5.3 Create a New Web Service
1. Click **New** → **Web Service**.
2. Connect your GitHub repository.
3. Render will auto-detect the `render.yaml` file and fill in the settings.

If setting up manually:

| Setting | Value |
|--------|-------|
| **Name** | `gregory-robert-portfolio` |
| **Environment** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npx serve -s build -l $PORT` |
| **Node Version** | `20` |

### 5.4 Deploy
Click **Create Web Service**. Render will:
1. Clone your repository.
2. Run `npm install && npm run build`.
3. Start the server with `serve`.
4. Give you a live URL like `https://gregory-robert-portfolio.onrender.com`.

First deploy takes ~3 minutes. Every future `git push` to `main` triggers an automatic redeploy.

---

## Step 6 — Custom Domain (Optional)

1. In your Render service dashboard, go to **Settings** → **Custom Domains**.
2. Add your domain (e.g., `gregoryrobert.dev`).
3. Add the CNAME record your domain registrar requires.
4. Render provisions a free SSL certificate automatically.

---

## Updating the Site

To update any content (new cert, project, etc.):
1. Edit the relevant `.jsx` file in `src/sections/`.
2. Run `git add . && git commit -m "update" && git push`.
3. Render redeploys automatically.

---

## Customisation Quick Reference

| What to change | File |
|---|---|
| Name, tagline, stats | `src/sections/Hero.jsx` |
| About text | `src/sections/About.jsx` |
| Internships | `src/sections/Experience.jsx` |
| Projects & demo links | `src/sections/Projects.jsx` |
| Skills & proficiency % | `src/sections/Skills.jsx` |
| Certifications | `src/sections/Certifications.jsx` |
| Achievements | `src/sections/Achievements.jsx` |
| Contact EmailJS keys | `src/sections/Contact.jsx` |
| Color palette | `src/index.css` (`:root` variables) |
| Nav links | `src/components/Navbar.jsx` |

---

## Troubleshooting

**`npm install` fails** — Ensure Node.js v18+ is installed.

**Contact form doesn't send** — Double-check the three EmailJS constants in `Contact.jsx`.

**Render build fails** — Check the Render logs tab. Most common cause: wrong Node version. Ensure `NODE_VERSION: 20` is set in environment variables.

**Site shows blank page on Render** — The start command must be `npx serve -s build -l $PORT`. The `$PORT` variable is required by Render; hardcoding 3000 will cause it to fail.
