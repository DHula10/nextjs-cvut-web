# 🚀 Quick Production Setup Guide

## ✅ **Essential Checklist - Do These First!**

**Before Going Live:**
- [ ] Create Resend account (with the email the form submissions should be sent to) and get API key
- [ ] Have the Directus app setup

**Required File Updates (5 files):**
- [ ] Update domain in `app/layout.tsx` (line ~60 & ~89-100)
- [ ] Update domain in `app/sitemap.ts` (line ~12)  
- [ ] Update domain in `public/robots.txt` (last line)
- [ ] Update email in `app/api/contact-home/route.tsx` (line ~12)
- [ ] Update email in `app/api/contact-ingine/route.tsx` (line ~37)

## 1. 📝 Setup environment Variables (.env.local)

- [ ] Create `.env.local` using `.env.example` as example and fill in the values

## 2. 📱 Social Media Links for SEO

Update in `app/layout.tsx`:
```tsx
"sameAs": [
  "https://www.linkedin.com/company/your-linkedin",
  "https://www.facebook.com/your-facebook"
]
```

## 🎯 Deployment Command

```bash
# For Vercel
vercel --prod

# For other platforms
npm run build
```

## ✅ Post-Deploy Testing

1. Visit your domain
2. Test both contact forms
3. Check `/sitemap.xml`
4. Verify `/robots.txt`
5. Test social media preview (Facebook Debugger)

---

**That's it!** Your site should be live and fully functional. 🎉
