# SmartPics.ai Website

A modern, responsive Next.js website for SmartPics.ai - AI-powered image optimization for WordPress.

## 🚀 Live Demo
[smartpics.ai](https://smartpics.ai)

## 📋 Features

- **Landing Page** - Hero, Features, Pricing, Testimonials, FAQ
- **Features Page** - Detailed breakdown of all features
- **How It Works** - Step-by-step process visualization
- **Pricing Page** - Three-tier pricing with comparison
- **Blog** - 3 blog posts with SEO optimization
- **Testimonials** - Customer reviews with star ratings
- **FAQ Section** - Accordion-style frequently asked questions
- **Responsive Design** - Mobile-first with glass morphism UI
- **SEO Optimized** - Sitemap, robots.txt, meta tags
- **Dark Theme** - Consistent dark design throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/smartpics-website.git
   git push -u origin master
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "Add New Project"
   - Import your repository
   - Framework: Next.js (auto-detected)
   - Build settings will be auto-configured
   - Click "Deploy"

3. **Auto-Deploy**:
   - Vercel will auto-deploy on every push to `master`
   - Preview deploys for pull requests
   - Custom domain can be configured in Vercel dashboard

### Manual Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output will be in dist/ folder
```

## 📁 Project Structure

```
smartpics-website/
├── public/                  # Static assets
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # Homepage
│   │   ├── layout.tsx       # Root layout
│   │   ├── globals.css      # Global styles
│   │   ├── not-found.tsx    # 404 page
│   │   ├── features/
│   │   ├── how-it-works/
│   │   ├── pricing/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── docs/
│   │   ├── privacy/
│   │   └── terms/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   │   └── PageLayout.tsx
│   │   ├── sections/        # Page sections
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # UI components
│   └── lib/
│       └── utils.ts         # Utility functions
├── next.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Design System

- **Primary Colors**: Purple (#6D28D9), Blue (#3B82F6)
- **Background**: Dark gradient (#0a0a1a to #1a103c)
- **Glass Effect**: backdrop-blur with white/5% opacity
- **Typography**: Inter (body), Calistoga (display)
- **Animations**: Framer Motion for smooth transitions

## 🔧 Configuration

The `next.config.ts` is set up for static export:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};
```

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with all sections |
| `/features` | Detailed feature breakdown |
| `/how-it-works` | 4-step process page |
| `/pricing` | Pricing plans |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts |
| `/contact` | Contact form |
| `/docs` | Documentation |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## 📝 Blog Posts

1. **Why Alt Text Matters in the Age of AI**
2. **WebP vs AVIF: Which Image Format Should You Use?**
3. **The Complete WordPress Image Optimization Guide**

## 🧪 Development

```bash
# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

MIT License - feel free to use this template for your projects.

## 🤝 Contributing

Contributions welcome! Please read the contributing guidelines first.

---

Made with ❤️ by SmartPics.ai Team
