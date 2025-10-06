# Quick Start Guide

## 🚀 Immediate Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open http://localhost:4321/ in your browser.

### 3. Update Content

#### Replace Placeholder Images
- `public/logo.png` - Your actual logo (400×100px recommended)
- `public/og-image.png` - Social media image (1200×630px)

#### Update Formspree ID
1. Sign up at https://formspree.io
2. Create a new form
3. Copy your form ID
4. Update in:
   - `src/content/site.en.json`
   - `src/content/site.fr.json`
   
   Change `"formspree_id": "YOUR_FORM_ID"` to your actual ID.

#### Update Social Links
In both `site.en.json` and `site.fr.json`:
```json
"social": {
  "github": "https://github.com/your-org",
  "linkedin": "https://www.linkedin.com/company/your-company/"
}
```

### 4. Build for Production
```bash
npm run build
npm run preview
```

### 5. Deploy to GitHub Pages

#### One-Time Setup
1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: **GitHub Actions** (not branch)

4. Configure custom domain (optional):
   - In GitHub: Settings → Pages → Custom domain → Enter `datasciencetech.ca`
   - In your DNS provider, add CNAME record:
     ```
     Type: CNAME
     Name: @ (or www)
     Value: your-username.github.io
     ```

#### Deploy Updates
Just push to main:
```bash
git add .
git commit -m "Your update message"
git push
```

The site will automatically rebuild and deploy in ~2 minutes.

## 📝 Common Tasks

### Change Colors
Edit `tailwind.config.js`:
```js
primary: {
  DEFAULT: '#2C7A7B',  // Change this
  // ...
}
```

### Edit Text Content
All text is in:
- `src/content/site.en.json` (English)
- `src/content/site.fr.json` (French)
- `src/content/cases.json` (Case studies)

### Add a New Case Study
Edit `src/content/cases.json` and add a new entry following the existing format.

## 🔍 Testing

### Check Build
```bash
npm run build
```

### Run Lighthouse
1. Build: `npm run build`
2. Preview: `npm run preview`
3. Open Chrome DevTools → Lighthouse
4. Run audit (mobile & desktop)

Target: All scores ≥95

## 📦 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ⬜ Replace placeholder images
4. ⬜ Update Formspree ID
5. ⬜ Update social links
6. ⬜ Customize content
7. ⬜ Push to GitHub
8. ⬜ Enable GitHub Pages
9. ⬜ Configure custom domain

## 🆘 Need Help?

See the full README.md for detailed documentation.

For questions: info@datasciencetech.ca
