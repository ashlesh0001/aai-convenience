# AAI Convenience Store Website

A modern, responsive website for AAI Convenience Store located in Scarborough, Toronto.

## 🌐 Live Website

**Production:** [https://ashlesh0001.github.io/aai-convenience/](https://ashlesh0001.github.io/aai-convenience/)

## 📍 Store Information

- **Address:** 3256 Eglinton Ave E, Scarborough, ON M1J 2H6, Canada
- **Phone:** (416) 267-2648
- **Hours:** Open daily 10:00 AM to 8:00 PM

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with smooth animations and transitions
- ♿ Accessible (WCAG compliant with ARIA labels)
- 🔍 SEO optimized with meta tags and Open Graph
- 📧 Contact form with client-side validation
- 🗺️ Embedded Google Maps location
- 🍔 Mobile hamburger menu
- ⚡ Fast loading with optimized assets

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **Vanilla JavaScript** - No frameworks, lightweight
- **GitHub Pages** - Free hosting
- **Google Fonts** - Fraunces & Space Grotesk

## 📂 Project Structure

```
aai-landing/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and media
│   ├── storefront-sign.png
│   ├── redbull-grid.png
│   ├── olg-lotto.png
│   ├── soda-cans.png
│   └── lays.png
├── .gitignore          # Git ignore rules
├── BRANCHING.md        # Git workflow documentation
└── README.md           # This file
```

## 🚀 Development

### Prerequisites

- Git
- A modern web browser
- (Optional) GitHub CLI for easier workflow

### Local Setup

```bash
# Clone the repository
git clone https://github.com/ashlesh0001/aai-convenience.git
cd aai-convenience

# Open in browser
open index.html
# or use a local server (recommended)
python -m http.server 8000
# then visit http://localhost:8000
```

### Making Changes

This project follows a structured Git workflow. Please read [BRANCHING.md](BRANCHING.md) for details.

**Quick start:**

```bash
# 1. Create a feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feat/your-feature-name

# 2. Make your changes
# 3. Commit and push
git add .
git commit -m "Add your feature"
git push -u origin feat/your-feature-name

# 4. Create a pull request on GitHub
```

### Branch Protection

- **`main`** branch is protected - requires pull request with 1 approval
- All changes must go through **`develop`** first
- See [BRANCHING.md](BRANCHING.md) for the complete workflow

## 📦 Deployment

The site automatically deploys to GitHub Pages when changes are merged to the `main` branch.

**Deployment URL:** https://ashlesh0001.github.io/aai-convenience/

Changes typically take 1-2 minutes to go live after merging.

## 🎯 Sections

1. **Hero** - Store introduction with call-to-action
2. **Services** - What we offer (drinks, snacks, tobacco, lottery, etc.)
3. **Promotions** - Current deals and special offers
4. **About** - Store information and history
5. **Products** - Featured product categories with images
6. **Testimonials** - Customer reviews
7. **Payment Methods** - Accepted payment types
8. **Contact** - Contact form and store details
9. **Map** - Google Maps embed for directions
10. **Footer** - Store info and legal notices

## 🎨 Customization

### Updating Store Information

Edit the relevant sections in `index.html`:
- Phone numbers, address, hours
- Promotional offers
- Testimonials
- Product information

### Changing Colors

The color palette is defined in CSS variables at the top of `styles.css`:

```css
:root {
  --brand: #a66a1f;      /* Primary brand color */
  --brand-dark: #8b5a1a;  /* Darker brand color */
  --sun: #f4b942;         /* Accent color */
  --cream: #f8f1e4;       /* Background color */
  --ink: #111211;         /* Text color */
}
```

### Adding New Sections

1. Add HTML in `index.html`
2. Style in `styles.css`
3. Add interactivity in `script.js` if needed
4. Test responsiveness on mobile/tablet

## 📧 Contact Form

The contact form uses a `mailto:` fallback. For production, consider integrating:
- [Formspree](https://formspree.io/) - Free form backend
- [Netlify Forms](https://www.netlify.com/products/forms/) - If migrating to Netlify
- Backend API - Custom solution

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2024 AAI Convenience Store. All rights reserved.

## 🤝 Contributing

1. Read [BRANCHING.md](BRANCHING.md) for workflow guidelines
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Wait for review and approval

## 💡 Future Enhancements

- [ ] Online ordering system
- [ ] Newsletter signup
- [ ] Product catalog with prices
- [ ] Google Analytics integration
- [ ] Custom domain name
- [ ] Social media feed integration
- [ ] Customer loyalty program info
- [ ] Store events calendar

---

Built with ❤️ for AAI Convenience Store
