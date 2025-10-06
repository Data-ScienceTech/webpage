# Data Science Technologies - Landing Site

A production-ready bilingual (EN/FR) landing site built with Astro, React, TypeScript, and Tailwind CSS. Deployed to GitHub Pages with a custom domain.

## 🚀 Features

- **Bilingual Support**: Full English and French translations with language switcher
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **SEO Optimized**: Meta tags, OpenGraph, Twitter cards, sitemap, and robots.txt
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Accessible**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Lighthouse score ≥95 on mobile and desktop
- **Static Export**: No server required - deploys to GitHub Pages
- **Form Integration**: Contact form via Formspree

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Pages deployment workflow
├── public/
│   ├── favicon.svg
│   ├── logo.png               # Replace with your actual logo
│   ├── og-image.png           # Replace with your actual OG image
│   ├── robots.txt
│   └── CNAME                  # Custom domain: datasciencetech.ca
├── src/
│   ├── assets/
│   │   └── logos/             # Tech stack logos (placeholders)
│   ├── components/
│   │   ├── Header.astro       # Site header with navigation
│   │   ├── Footer.astro       # Site footer
│   │   ├── LangSwitch.tsx     # Language switcher (React)
│   │   ├── CTA.astro          # Call-to-action button
│   │   ├── CaseCard.astro     # Case study card
│   │   └── FeatureCard.astro  # Value proposition card
│   ├── content/
│   │   ├── site.en.json       # English content
│   │   ├── site.fr.json       # French content
│   │   └── cases.json         # Case studies (bilingual)
│   ├── layouts/
│   │   └── MainLayout.astro   # Main page layout
│   ├── pages/
│   │   ├── index.astro        # Root redirect to preferred language
│   │   ├── 404.astro          # 404 page (bilingual)
│   │   ├── en/
│   │   │   ├── index.astro    # English homepage
│   │   │   └── privacy.astro  # Privacy policy
│   │   └── fr/
│   │       ├── index.astro    # French homepage
│   │       └── confidentialite.astro  # Privacy policy (FR)
│   └── styles/
│       └── globals.css        # Global styles with Tailwind
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.json
├── astro.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd data-science-tech
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## ✏️ Editing Content

All site content is stored in JSON files for easy editing without touching code:

### Site Content

- **English**: `src/content/site.en.json`
- **French**: `src/content/site.fr.json`

Edit these files to update:
- Hero section text
- Value propositions
- Services list
- Contact information
- Navigation labels
- Footer content

### Case Studies

Edit `src/content/cases.json` to update case studies. Each entry includes:
- Title (EN/FR)
- Industry
- Impact metric
- Summary
- Technologies used
- CTA label and link

### Images

Replace placeholder images in the `public/` folder:
- `logo.png` - Your company logo (recommended: 400×100px)
- `og-image.png` - Social media preview image (1200×630px)

## 🚀 Deployment to GitHub Pages

### One-Time Setup

1. **Create a GitHub repository** for your project

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions

3. **Update Formspree ID**:
   - Sign up at [Formspree.io](https://formspree.io)
   - Create a new form
   - Copy the form ID
   - Update in `src/content/site.en.json` and `site.fr.json`:
     ```json
     "contact": {
       "formspree_id": "YOUR_ACTUAL_FORM_ID"
     }
     ```

4. **Custom Domain (Optional)**:
   - Add your domain in repository Settings → Pages → Custom domain
   - Update DNS records with your domain provider:
     ```
     Type: CNAME
     Name: @ (or www)
     Value: <your-username>.github.io
     ```

### Deploying Updates

Simply push to the `main` branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

The GitHub Actions workflow (`.github/workflows/pages.yml`) will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Make it live at `https://datasciencetech.ca`

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change brand colors:

```js
colors: {
  primary: {
    DEFAULT: '#2C7A7B',  // Your primary color
    // ... other shades
  },
  secondary: {
    DEFAULT: '#0F172A',  // Your secondary color
    // ... other shades
  },
}
```

### Fonts

The site uses system fonts by default for optimal performance. To use custom fonts:

1. Add font files to `public/fonts/`
2. Update `tailwind.config.js`:
   ```js
   fontFamily: {
     sans: ['YourFont', 'sans-serif'],
   }
   ```
3. Add `@font-face` declarations in `src/styles/globals.css`

### Dark Mode

Dark mode toggle is in the header. The preference is stored in localStorage. To customize dark mode colors, edit Tailwind classes with `dark:` prefix throughout the components.

## 📊 SEO & Analytics

### SEO Features Included

- ✅ Semantic HTML
- ✅ Meta tags (title, description)
- ✅ OpenGraph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt
- ✅ Alt text for images
- ✅ ARIA labels

### Adding Analytics

To add Google Analytics or other analytics:

1. Add the tracking code to `src/layouts/MainLayout.astro` in the `<head>` section
2. Wrap in a `<script is:inline>` tag for client-side execution

## 🧪 Testing

### Lighthouse

Run Lighthouse tests:

```bash
pnpm build
pnpm preview
```

Then open Chrome DevTools → Lighthouse and run audit.

Target scores:
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear cache: `rm -rf node_modules .astro dist`
2. Reinstall: `pnpm install`
3. Rebuild: `pnpm build`

### Language Switch Not Working

Ensure:
- JavaScript is enabled
- localStorage is not blocked
- Browser supports localStorage

### Contact Form Not Submitting

1. Verify Formspree ID is correct
2. Check browser console for errors
3. Ensure form action URL is correct

## 📝 License

Copyright © 2025 Data Science Technologies. All rights reserved.

## 🤝 Contributing

This is a private company website. For questions or support, contact: info@datasciencetech.ca

---

**Built with** ❤️ **using Astro, React, TypeScript, and Tailwind CSS**
