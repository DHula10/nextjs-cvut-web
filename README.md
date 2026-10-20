# Transfer Technologií ČVUT - Web Application

A comprehensive web application for ČVUT Technology Transfer, built with Next.js 15, featuring form handling, content management via Directus, and comprehensive SEO optimization.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [Production Deployment](#-production-deployment)
- [Features](#-features)
- [SEO Configuration](#-seo-configuration)
- [Security Features](#-security-features)
- [Content Management](#-content-management)
- [Maintenance](#-maintenance)

## 🎯 Project Overview

This application serves as the main website for ČVUT Technology Transfer, featuring:
- **Homepage** - Main landing page with contact forms and references
- **Ingine** - Fundraising preparation service
- **Transfer** - Idea validation service  
- **Inqbay** - Digital library with articles, lectures, and podcasts

### 👥 Team & Collaboration

This project was developed in close collaboration between two developers with a clear separation of concerns:

* **Dominik Hula ([@DHula10](https://github.com/DHula10))**
* **Martin Pastvinský ([@martin-pastvinsky](https://github.com/martin-pastvinsky))**

Both authors worked closely together on the system design, frontend implementation in Next.js, and content management integration via Directus CMS.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Email**: Resend API
- **CMS**: Directus (headless CMS)
- **Carousel**: Embla Carousel
- **Security**: Rate limiting, honeypot fields
- **SEO**: Comprehensive meta tags, structured data, sitemap

## 📁 Project Structure

```
├── app/
│   ├── (home)/                    # Homepage route group
│   │   ├── components/            # Homepage-specific components
│   │   │   ├── carousel.tsx       # References carousel
│   │   │   ├── contactForm.tsx    # Main contact form
│   │   │   └── ...
│   │   └── page.tsx              # Homepage
│   ├── (pages)/                   # Other pages route group
│   │   ├── ingine/               # Fundraising service
│   │   ├── transfer/             # Idea validation service
│   │   ├── inqbay/              # Digital library
│   │   │   ├── article/[slug]/   # Dynamic article pages
│   │   │   ├── lecture/[slug]/   # Dynamic lecture pages
│   │   │   └── podcast/[slug]/   # Dynamic podcast pages
│   │   └── error/               # Error page
│   ├── api/                      # API routes
│   │   ├── contact-home/         # Homepage contact form API
│   │   └── contact-ingine/       # Ingine contact form API
│   ├── components/               # Shared components
│   │   ├── form/                # Form components
│   │   ├── emails/              # Email templates
│   │   └── ...
│   ├── lib/                     # Utility functions
│   │   ├── directus.ts          # Directus client
│   │   ├── directusAssets.ts    # Asset URL utilities
│   │   ├── rateLimiter.ts       # Rate limiting
│   │   ├── structuredData.ts    # SEO structured data
│   │   └── apiRequests.ts       # API request functions
│   ├── styles/                  # Global styles
│   ├── favicon.ico             # Main favicon
│   ├── layout.tsx              # Root layout with SEO
│   ├── not-found.tsx           # 404 page
│   └── sitemap.ts              # Dynamic sitemap
├── public/                      # Static assets
│   ├── images/                 # Images
│   ├── logos/                  # Logo files
│   ├── fonts/                  # Custom fonts
│   ├── robots.txt             # Search engine instructions
│   ├── manifest.json          # PWA manifest
│   └── browserconfig.xml      # Microsoft tiles
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Directus CMS instance running
- Resend account for email functionality

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd cvut-transfer-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Configure environment variables** (see [Environment Configuration](#-environment-configuration))

5. **Run development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Configuration

Create a `.env.local` file with the following variables:

```env
# Directus CMS Configuration
NEXT_PUBLIC_DIRECTUS_URL=http://127.0.0.1:8055/
NEXT_PUBLIC_DIRECTUS_TOKEN=your-directus-static-token

# Email Configuration (Resend)
RESEND_API_KEY=your-resend-api-key

# Site Configuration (for production)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Getting Configuration Values:

1. **Directus Setup**
   - Install and configure Directus CMS
   - Create collections: `references`, `articles`, `lectures`, `podcasts`, `categories`
   - Generate a static token in Directus settings
   - Update `NEXT_PUBLIC_DIRECTUS_URL` and `NEXT_PUBLIC_DIRECTUS_TOKEN`

2. **Resend Email Setup**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard
   - Update `RESEND_API_KEY`

3. **Domain Configuration**
   - Update `NEXT_PUBLIC_SITE_URL` when you have your production domain

## 🌐 Production Deployment

### Pre-Deployment Checklist

1. **Domain Configuration**
   - [ ] Update `NEXT_PUBLIC_SITE_URL` in environment variables
   - [ ] Update canonical URLs in `app/layout.tsx`
   - [ ] Update sitemap base URL in `app/sitemap.ts`
   - [ ] Update robots.txt sitemap URL

2. **SEO Setup**
   - [ ] Replace "your-domain.cz" with actual domain in all files
   - [ ] Add Google Search Console verification code
   - [ ] Set up Google Analytics (if needed)
   - [ ] Create and upload Open Graph images (1200x630px)

3. **Email Configuration**
   - [ ] Update email "from" addresses in API routes
   - [ ] Update recipient email addresses
   - [ ] Test contact forms in staging environment

4. **Assets**
   - [ ] Upload all favicon variants (`favicon.ico`, `icon.png`, `apple-icon.png`)
   - [ ] Verify all images are optimized
   - [ ] Check Directus asset URLs are working

### Deployment Platforms

#### Vercel (Recommended)

1. **Deploy to Vercel**
```bash
npm i -g vercel
vercel
```

2. **Configure environment variables in Vercel dashboard**
3. **Set up custom domain**
4. **Enable analytics (optional)**

#### Other Platforms

- **Netlify**: Works with Next.js static export
- **Railway**: Good for full-stack applications
- **DigitalOcean App Platform**: Docker-based deployment

### Domain Setup Steps

When you get your domain:

1. **Update environment variables**
```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

2. **Update canonical URLs** in `app/layout.tsx`:
```tsx
<link rel="canonical" href="https://your-actual-domain.com" />
```

3. **Update structured data** in `app/layout.tsx`:
```tsx
"url": "https://your-actual-domain.com",
```

4. **Update sitemap** in `app/sitemap.ts`:
```tsx
const baseUrl = 'https://your-actual-domain.com'
```

5. **Update robots.txt**:
```
Sitemap: https://your-actual-domain.com/sitemap.xml
```

## ✨ Features

### 🏠 Homepage
- Hero section with call-to-action
- References carousel (powered by Directus)
- Process section
- Mission statement
- Contact form with validation

### 💰 Ingine (Fundraising Service)
- Hero section
- Interactive checklist
- Support information
- Specialized contact form with file upload
- File size validation (5MB limit)

### 🔄 Transfer (Idea Validation)
- Validation process explanation
- Step-by-step guide
- Service overview
- Contact integration

### 📚 Inqbay (Digital Library)
- Dynamic content from Directus
- Articles with categories
- Video lectures (YouTube integration)
- Podcasts
- Pagination
- Search functionality (ready for implementation)

### 📧 Contact Forms
- **Homepage Form**: Name, email, phone, availability, message
- **Ingine Form**: Full project details with file uploads
- **Validation**: Email format, phone format, required fields
- **Security**: Honeypot fields, rate limiting
- **Email Templates**: Custom React email templates

## 🔍 SEO Configuration

### Current SEO Features
- ✅ Meta titles and descriptions for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ PWA manifest
- ✅ Optimized 404 page
- ✅ Favicon and app icons

### SEO Tasks for Production
1. **Google Search Console**
   - Add verification code to `app/layout.tsx`
   - Submit sitemap
   - Monitor indexing

2. **Social Media**
   - Update social media URLs in structured data
   - Create Open Graph images (1200x630px)

3. **Analytics**
   - Add Google Analytics code (optional)
   - Set up conversion tracking

## 🔒 Security Features

### Implemented Security
- **Rate Limiting**: 3 requests per 15 minutes per IP
- **Honeypot Fields**: Bot detection and prevention
- **Form Validation**: Server-side validation
- **File Upload Security**: Size limits, type checking
- **CSRF Protection**: Built-in Next.js protection

### Security Configuration
- Rate limiting configured in `app/lib/rateLimiter.ts`
- Honeypot validation in all contact forms
- File size limits enforced server-side (5MB)

## 📊 Content Management

### Directus CMS Structure

#### Collections Required:
1. **references**
   - `id` (Primary Key)
   - `sortId` (Integer)
   - `companyName` (String)
   - `companyMessage` (Text)
   - `logo` (File)
   - `img` (File)

2. **articles**
   - `id` (Primary Key)
   - `title` (String)
   - `slug` (String, unique)
   - `content` (Rich Text)
   - `img` (File)
   - `categoryId` (Many-to-One with categories)

3. **lectures**
   - `id` (Primary Key)
   - `title` (String)
   - `content` (Rich Text)
   - `img` (File)
   - `slug` (String, unique)
   - `link` (String, YouTube URL)

4. **podcasts**
   - `id` (Primary Key)
   - `title` (String)
   - `slug` (String, unique)
   - `author` (String)
   - `link` (String)

5. **categories**
   - `id` (Primary Key)
   - `name` (String)

### Content Management Tips
- Use descriptive slugs for better SEO
- Optimize images before upload
- Keep content fresh and updated
- Use categories to organize articles

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Adding New Features

1. **New Pages**: Create in appropriate route group
2. **New Components**: Add to `app/components/`
3. **New API Routes**: Add to `app/api/`
4. **Styling**: Use Tailwind CSS classes
5. **SEO**: Add metadata to new pages

### Code Style
- Use TypeScript for all new files
- Follow existing component patterns
- Use Tailwind for styling
- Implement proper error handling

## 🚨 Troubleshooting

### Common Issues

1. **Directus Connection Errors**
   - Check `NEXT_PUBLIC_DIRECTUS_URL` and `NEXT_PUBLIC_DIRECTUS_TOKEN`
   - Verify Directus server is running
   - Check network connectivity

2. **Email Not Sending**
   - Verify `RESEND_API_KEY` is correct
   - Check Resend dashboard for errors
   - Verify recipient email addresses

3. **Build Failures**
   - Run `npm run type-check` to find TypeScript errors
   - Check for missing environment variables
   - Verify all imports are correct

4. **Asset Loading Issues**
   - Check Directus asset URLs
   - Verify image paths in public folder
   - Check network policies for external assets

## 📞 Support & Maintenance

### Regular Maintenance Tasks
- [ ] Update dependencies monthly
- [ ] Monitor SEO performance
- [ ] Check contact form submissions
- [ ] Update content regularly
- [ ] Monitor site performance
- [ ] Backup Directus data

### Monitoring
- Set up uptime monitoring
- Monitor form submission rates
- Track SEO rankings
- Monitor page load speeds

---

## 📝 Additional Notes

- The application uses custom fonts (Technika family)
- All forms include comprehensive validation
- The site is optimized for Czech language and market
- Responsive design works on all device sizes
- Built with accessibility best practices

For additional questions or support, refer to the codebase comments and the SEO-GUIDE.md file for detailed SEO configuration instructions.
