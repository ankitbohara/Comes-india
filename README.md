# CO.ME.S India – React TypeScript Website

Official website for **COMES India**, the authorised COMES Italy partner for stone polishing machine heads and services in India.

---

## 🏗️ Project Architecture

```
src/
├── api/                        # Data layer (products, services)
│   ├── products.ts             # Product definitions + getProductBySlug()
│   └── services.ts             # Services, process steps, FAQs
│
├── assets/
│   └── global.css              # CSS variables, utility classes, animations
│
├── components/
│   ├── common/
│   │   └── SectionHeader.tsx   # Reusable section label + title block
│   └── ui/
│       ├── WhatsAppButton.tsx  # WhatsApp enquiry CTA (full / icon variants)
│       └── LanguageSwitcher.tsx # Dropdown language selector
│
├── features/
│   ├── products/
│   │   ├── HeroSection.tsx     # Homepage hero with ticker
│   │   ├── AboutSection.tsx    # About + feature grid
│   │   └── ProductCard.tsx     # Product card with WhatsApp + View Details
│   └── services/
│       ├── ServicesSection.tsx # Services grid + Process steps
│       ├── FaqSection.tsx      # Accordion FAQ
│       └── ContactSection.tsx  # Contact info + form
│
├── hooks/
│   ├── useTranslation.ts       # Shorthand hook for t(), language, setLanguage
│   └── useWhatsApp.ts          # enquire(message) hook
│
├── i18n/
│   ├── en.ts                   # English translations
│   ├── hi.ts                   # Hindi translations
│   ├── ta.ts                   # Tamil translations
│   ├── mr.ts                   # Marathi translations
│   ├── te.ts                   # Telugu translations
│   └── index.ts                # Aggregator + translate() function
│
├── layouts/
│   ├── Navbar.tsx              # Fixed nav with lang switcher + mobile menu
│   ├── Footer.tsx              # Footer with WhatsApp CTA
│   └── MainLayout.tsx          # Wraps page content + floating WhatsApp bubble
│
├── pages/
│   ├── HomePage.tsx            # Full homepage (Hero + About + Products + Services + FAQ + Contact)
│   ├── ProductsPage.tsx        # Products listing grid
│   ├── ProductDetailPage.tsx   # Full product detail (gallery, specs, applications, related)
│   └── NotFoundPage.tsx        # 404 page
│
├── routes/
│   └── AppRouter.tsx           # React Router v6 route definitions
│
├── services/
│   └── whatsapp.ts             # openWhatsApp(message), buildWhatsAppUrl(), WA number
│
├── store/
│   └── AppContext.tsx          # Context API: language state + t() translator
│
├── types/
│   └── index.ts                # TypeScript: Language, Product, Service, AppContextType, etc.
│
├── utils/
│   └── ScrollToTop.tsx         # Scroll to top on route change
│
├── App.tsx                     # Root: BrowserRouter + AppProvider + AppRouter
└── main.tsx                    # ReactDOM.createRoot entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Multilingual Support (5 Languages)

Language selection is managed via **React Context API** (`AppContext`).

| Language | Code | Script |
|----------|------|--------|
| English  | `en` | Latin |
| Hindi    | `hi` | देवनागरी |
| Tamil    | `ta` | தமிழ் |
| Marathi  | `mr` | मराठी |
| Telugu   | `te` | తెలుగు |

Language preference is **persisted in `localStorage`**.

### Adding a new language
1. Create `src/i18n/xx.ts` with all translation keys
2. Import and add to `translations` object in `src/i18n/index.ts`
3. Add to `LANGUAGE_OPTIONS` array in `src/i18n/index.ts`

---

## 📱 WhatsApp Integration

Each product has a **pre-filled WhatsApp message** with the product name.

- **Product Card** → WhatsApp Enquiry button
- **Product Detail page** → Inline CTA box + Gold banner CTA
- **Navbar CTA** → General enquiry
- **Footer** → General enquiry
- **Floating bubble** → General enquiry (bottom right, all pages)

WhatsApp number and helpers are in `src/services/whatsapp.ts`.

---

## 🛍️ Products

| Product | Slug | Type |
|---------|------|------|
| HTS-6 V14 | `hts-6-v14` | High Torque Spindle, 14th Gen |
| RG6 | `rg6` | Rigid Gear Head, Professional |
| STORM5 V14 | `storm5-v14` | Independent Oscillating Spindle, 14th Gen |

Product detail pages: `/products/:slug`

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--gold` | `#c9a84c` |
| `--bg` | `#0a0a0a` |
| `--white` | `#f5f2ee` |
| `--font-display` | Bebas Neue |
| `--font-body` | Rajdhani |
| `--font-mono` | Space Mono |

---

## 📞 Contact Info

- **Address:** H-163, Vinayak City, RIICO Industrial Area, Bindayaka, Jaipur, Rajasthan 302041
- **Phone:** +91-83066 65561 / +91 9929765563
- **Email:** info@comesindia.com
- **Hours:** Mon–Sat 10 AM – 6 PM IST
