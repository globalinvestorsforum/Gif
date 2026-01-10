# GAIS Project SEO Flow

## Overview
This document outlines the complete SEO implementation strategy for the Global AI Summit (GAIS) website.

---

## 1. **Static Base SEO** (index.html)

### Entry Point: `index.html`
```html
<title>Global AI Summit 2026 | Berlin</title>
<meta name="description" content="Global AI Summit 2026 (GAIS) in Berlin — bringing together global AI leaders, investors, and innovators for talks, networking, and collaboration." />
<link rel="canonical" href="https://www.global-investors-forum.com/" />
<meta name="robots" content="index, follow" />
```

**Purpose:**
- Provides default meta tags for initial page load
- Search engines first crawl `index.html` for basic SEO signals
- Fallback if component-level SEO fails

---

## 2. **Provider Setup** (src/main.jsx)

### Code:
```jsx
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

**Purpose:**
- `HelmetProvider` wraps the entire app
- Enables `react-helmet-async` to manage `<head>` tags dynamically
- Allows per-page SEO overrides at component level

---

## 3. **SEO Component** (src/components/SEO.jsx)

### Core Logic:
```jsx
const SEO = ({ title, description, url, image }) => {
  const canonicalUrl = url
    ? url.split("?")[0].split("#")[0]  // Strip query/fragments
    : "https://www.global-investors-forum.com";

  const metaImage = image
    ? image
    : "https://www.global-investors-forum.com/default-social.png";

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL - prevents duplicate content issues */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph - for Facebook, LinkedIn, etc. */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card - for Twitter/X shares */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD - structured data for rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};
```

**Features:**
- **Canonical URL Cleaning**: Removes query params & fragments to avoid SEO dilution
- **Social Media Optimization**: Open Graph + Twitter Card for rich previews
- **Structured Data**: JSON-LD schema.org for search engines
- **Fallback Defaults**: Safe defaults if props missing

---

## 4. **Layout Default SEO** (src/components/Layout.jsx)

### Code:
```jsx
<SEO
  title="GAIS — Global AI Summit"
  description="Global AI Summit (GAIS) — conferences, speakers, attendees and events focused on AI applications across industries."
  url="https://www.global-investors-forum.com/"
/>
```

**Purpose:**
- Provides default meta tags for layout wrapper
- Catches pages that don't define their own SEO
- Fallback for nested routes

---

## 5. **Page-Level SEO** (Per Page)

### Pages with SEO:
Each page imports and uses the `<SEO />` component with tailored meta tags.

#### a) **Homepage** (`src/pages/Homepage/Homepage.jsx`)
```jsx
<SEO
  title="Global AI Summit — Home"
  description="Global AI Summit (GAIS): conferences, speakers, and attendees shaping the future of AI. Join us in Berlin."
  url="https://www.global-investors-forum.com/"
/>
```

#### b) **Speakers** (`src/pages/Speaker/Speakers.jsx`)
```jsx
<SEO
  title="Speakers — Global AI Summit"
  description="Discover the speaker lineup for the Global AI Summit — world-class founders, researchers, and practitioners."
  url="https://www.global-investors-forum.com/gais/speakers"
/>
```

#### c) **Attendees** (`src/pages/Speaker/AllAttendees.jsx`)
```jsx
<SEO
  title="Attendees — Global AI Summit"
  description="Meet the global attendees for GAIS: founders, researchers, investors and industry leaders attending the summit."
  url="https://www.global-investors-forum.com/gais/attendees"
/>
```

#### d) **Speaker Details** (`src/pages/Speaker/SpeakerDetails.jsx`) — Dynamic
```jsx
<SEO
  title={`${attendee.name} — ${attendee.company} | GAIS`}
  description={`${attendee.position} at ${attendee.company}. Learn more about ${attendee.name} at GAIS.`}
  url={typeof window !== 'undefined' ? window.location.href : `https://www.global-investors-forum.com/gais/speaker/${id}`}
  image={attendee.personImage}
/>
```
**Note:** Uses dynamic attendee data for personalized meta tags per speaker.

#### e) **Awards** (`src/pages/Award/Award.jsx`)
```jsx
<SEO
  title="GAIEA — Global AI Excellence Awards"
  description="GAIEA celebrates excellence in AI across industries. Learn about categories, timelines, and how to nominate."
  url="https://www.global-investors-forum.com/gais/award"
/>
```

#### f) **Contact** (`src/pages/Contact/Contact.jsx`)
```jsx
<SEO
  title="Contact — GAIS"
  description="Get in touch with the Global AI Summit team for sponsorship, press, and partnership inquiries."
  url="https://www.global-investors-forum.com/gais/contact"
/>
```

---

## 6. **Sitemap & Robots** (Static Discovery)

### robots.txt (`public/robots.txt`)
```
User-agent: *
Disallow:
Sitemap: /sitemap.xml
```

### sitemap.xml (`public/sitemap.xml`)
```xml
<urlset>
  <url>
    <loc>https://www.global-investors-forum.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.global-investors-forum.com/gais/award</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... more routes ... -->
</urlset>
```

**Purpose:**
- Tell search engines which pages to crawl
- Provide update frequency hints
- Set page priority signals

---

## 7. **Flow Diagram**

```
User visits https://www.global-investors-forum.com/
         ↓
   [1] Browser loads index.html
         ↓
   [2] index.html has base meta tags (fallback)
         ↓
   [3] React loads, HelmetProvider wraps app
         ↓
   [4] App mounts, Layout renders with default SEO
         ↓
   [5] Route changes, specific Page loads
         ↓
   [6] Page renders <SEO /> with custom props
         ↓
   [7] Helmet updates <head> with page-specific meta
         ↓
   [8] Search engine crawls updated <head>
         ↓
   [9] Social media previews use og:/twitter: tags
         ↓
  [10] JSON-LD provides rich snippet data
```

---

## 8. **URL Strategy**

All pages use hardcoded, production URLs to avoid dynamic issues:

| Page | URL |
|------|-----|
| Home | `https://www.global-investors-forum.com/` |
| Speakers | `https://www.global-investors-forum.com/gais/speakers` |
| Attendees | `https://www.global-investors-forum.com/gais/attendees` |
| Award | `https://www.global-investors-forum.com/gais/award` |
| Contact | `https://www.global-investors-forum.com/gais/contact` |
| Speaker Detail | `https://www.global-investors-forum.com/gais/speaker/{id}` |

---

## 9. **Social Image Strategy**

- **Default:** `https://www.global-investors-forum.com/default-social.png`
- **Speaker Pages:** Uses `attendee.personImage` for personalized social preview

---

## 10. **SEO Best Practices Implemented**

✅ **Canonical URLs** - Prevents duplicate content penalties  
✅ **Robots Meta** - Explicit crawl directives  
✅ **Structured Data (JSON-LD)** - Rich snippets for search engines  
✅ **Open Graph** - Facebook, LinkedIn, Pinterest sharing  
✅ **Twitter Card** - Twitter/X preview optimization  
✅ **Sitemap.xml** - Guides search engines  
✅ **robots.txt** - Crawl rules  
✅ **Descriptive Titles** - Includes main keyword (GAIS, AI Summit)  
✅ **Meta Descriptions** - Compelling, action-oriented  
✅ **Dynamic Pages** - Per-speaker/attendee personalization  
✅ **Hardcoded URLs** - Avoids window.location inconsistencies  

---

## 11. **Testing SEO**

### Check Meta Tags:
```bash
npm run dev
# Visit page and inspect <head> in DevTools
# Look for updated title, meta description, og: tags
```

### Use SEO Tools:
- **Google Search Console**: Monitor indexing
- **Facebook Sharing Debugger**: Test OG tags
- **Twitter Card Validator**: Verify Twitter preview
- **Schema.org Validator**: Check JSON-LD syntax

---

## 12. **Common Tweaks**

### Add SEO to New Pages:
```jsx
import SEO from '../../components/SEO'

export default MyPage = () => {
  return (
    <>
      <SEO
        title="My Page Title"
        description="Compelling description with keywords"
        url="https://www.global-investors-forum.com/path"
        image="optional-image-url"
      />
      {/* Page content */}
    </>
  )
}
```

### Update Sitemap:
Add new URLs to `public/sitemap.xml` with `<changefreq>` and `<priority>`.

### Change Social Image:
- Add image to `public/` folder
- Update URL in SEO component or per-page props

---

## Summary

**3-Layer SEO Architecture:**

1. **Static Layer** (`index.html`) → Default meta tags for initial crawl
2. **Provider Layer** (`HelmetProvider`) → React integration for dynamic updates
3. **Component Layer** (`<SEO />` + pages) → Page-specific, customized meta tags

This ensures every page is SEO-optimized for search engines and social media, with a fallback strategy if component-level SEO fails.
