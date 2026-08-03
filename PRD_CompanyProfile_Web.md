# PRD — Modern Product Packaging Printing & Custom Client Order Platform

**Version:** 1.1 (Context Updated: Custom Product Packaging Manufacturing & Printing Industry)  
**Target Platform:** Web (Desktop & Mobile Responsive)  
**Tech Stack Summary:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, React Hook Form, Zod  
**Agent Workflow:** Follow phase-locked build order section by section. Never skip phases or fabricate component specs.

---

## 0. AGENT INSTRUCTIONS

You are an **Expert Senior Frontend Engineer & UI/UX Specialist** building a **High-Conversion Modern Company Profile & Packaging Inquiry Web Application** for a premier **Product Packaging Manufacturer & Printing House** (Spesialis Percetakan Kemasan Produk Custom).

Follow this PRD section by section. **NEVER skip phases.**  
**NEVER generate placeholder logic** — every component, button, modal, form field, and interactive mockup calculator must be fully wired and functional with state handling, error validation, and interactive feedback.  
**ALWAYS use the design tokens** defined in Section 1 before writing any UI code.  
If a section references a specific library (`framer-motion`, `lucide-react`, `react-hook-form`), use that exact library — do not fabricate custom unstyled lookalikes.

After each phase, output:
> "✅ Phase [N] complete. Ready for review."

Wait for explicit approval before continuing to the next phase.

---

## 1. BRAND & DESIGN SYSTEM

### 1.1 Color Tokens

Prefix token namespace: `pkg-`

```ts
// /lib/tokens.ts
export const colors = {
  // Base Palette (Eco-Modern & Luxury Industrial Print Aesthetic)
  'pkg-bg':           '#0D1117',  // Matte Dark Charcoal background
  'pkg-surface':      '#161B22',  // Elevated card & section surface
  'pkg-surface-hover':'#21262D',  // Hover state surface
  'pkg-border':       '#30363D',  // Subtle border line
  'pkg-border-bright':'#484F58',  // Highlighted border
  'pkg-accent':       '#10B981',  // Emerald Green / Premium Eco Accent & CTA
  'pkg-accent-hover': '#059669',  // Deep Emerald hover state
  'pkg-accent-glow':  'rgba(16, 185, 129, 0.20)', // Soft glowing accent aura
  'pkg-amber':        '#F59E0B',  // Warm Crafting Gold Accent
  'pkg-text':         '#F0F6FC',  // Crisp primary text
  'pkg-text-muted':   '#8B949E',  // Subdued secondary text
  'pkg-text-dark':    '#6E7681',  // Caption & technical metadata text

  // Semantic mappings
  'bg-primary':    'var(--pkg-bg)',
  'bg-surface':    'var(--pkg-surface)',
  'text-primary':  'var(--pkg-text)',
  'text-muted':    'var(--pkg-text-muted)',
  'accent':        'var(--pkg-accent)',

  // Status indicators
  'success': '#10B981',
  'warning': '#F59E0B',
  'error':   '#EF4444',
  'info':    '#3B82F6',
}
```

### 1.2 Typography

* **Display / Headings:** `Plus Jakarta Sans` (Google Font, weights 600, 700, 800)
* **Body / UI Labels:** `Inter` (Google Font, weights 400, 500, 600)
* **Mono / Packaging Specs:** `JetBrains Mono` (Google Font, weight 500)

**Type Scale:**
* `text-display`: `clamp(2.5rem, 5vw, 4.5rem)` / line-height: `1.1` / tracking: `-0.02em`
* `text-h1`: `clamp(2rem, 4vw, 3.25rem)` / line-height: `1.15` / tracking: `-0.015em`
* `text-h2`: `clamp(1.5rem, 3vw, 2.25rem)` / line-height: `1.2`
* `text-h3`: `1.25rem` (20px) / line-height: `1.4`
* `text-body`: `1rem` (16px) / line-height: `1.6`
* `text-sm`: `0.875rem` (14px) / line-height: `1.5`
* `text-caption`: `0.75rem` (12px) / tracking: `0.05em` (uppercase)

### 1.3 Motion Tokens (`framer-motion`)

```ts
// /lib/animations.ts
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: 'easeOut' }
};

export const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
```

### 1.4 Global UI & Layout Rules

1. **Background Alternation:** Base background `#0D1117` alternates with `#161B22` elevated containers.
2. **Max Container Width:** `1280px` (`max-w-7xl`), centered with `px-4 sm:px-6 lg:px-8`.
3. **Border Radius Scale:** `sm: 6px`, `md: 12px`, `lg: 20px`, `xl: 28px`, `full: 9999px`.
4. **Primary CTA Buttons:** Pill shape (`rounded-full`), Emerald Green fill with subtle hover glow (`hover:scale-[1.02] active:scale-[0.98] transition-transform`).
5. **Secondary Buttons:** Glassmorphic translucent border (`border border-white/15 bg-white/5 hover:bg-white/10 text-white`).

---

## 2. PROJECT ARCHITECTURE

### 2.1 Directory Structure

```
/
├── app/
│   ├── layout.tsx             # Root layout with fonts, metadata, providers
│   ├── page.tsx               # Main single-page packaging company profile & inquiry hub
│   ├── globals.css            # Global styles, Tailwind base, design token variables
│   └── api/
│       └── submit-inquiry/
│           └── route.ts       # API handler for packaging order inquiry submissions
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky frosted navigation header
│   │   └── Footer.tsx         # Footer with quick links, factory location & contact details
│   ├── sections/
│   │   ├── HeroSection.tsx    # Perkenalan Perusahaan Percetakan Packaging
│   │   ├── ServicesSection.tsx# Apa Yang Kami Lakukan (Jenis & Produk Packaging)
│   │   ├── WhyUsSection.tsx   # Mengapa Bermitra Dengan Kami (Keunggulan Cetak)
│   │   ├── ProcessSection.tsx # Cara Kami Bekerja (Alur Dari Mockup ke Produksi Masal)
│   │   ├── PortfolioSection.tsx # Karya Terpilih Kami (Katalog Showroom Packaging & Case Study)
│   │   ├── AboutFounders.tsx  # Tentang Kami & Profil Founder Percetakan
│   │   ├── FAQSection.tsx     # Pertanyaan Yang Sering Diajukan (MOQ, Material, Proofing)
│   │   └── InquirySection.tsx # Mulai Proyek Pesanan Anda (Client Expectation + Form Pesanan Custom)
│   ├── ui/
│   │   ├── Button.tsx         # Reusable design system button
│   │   ├── Input.tsx          # Reusable styled text input
│   │   ├── Select.tsx         # Reusable dropdown select component
│   │   ├── Card.tsx           # Glassmorphic container card
│   │   ├── Modal.tsx          # Packaging detail lightbox modal
│   │   └── Toast.tsx          # Submission status toast notification
│   └── icons/
│       └── PackagingIcons.tsx # Custom packaging SVG icons (Box, Pouch, Label, Eco Leaf, Printing Press)
├── lib/
│   ├── tokens.ts              # Exported color & design token objects
│   ├── animations.ts          # Framer motion variants
│   ├── validation.ts          # Zod schema definitions for packaging inquiry form
│   └── api.ts                 # Typed fetch client helper
├── types/
│   └── index.ts               # TypeScript data interfaces for packaging domain
├── mock/
│   └── data.ts                # Production-grade Indonesian packaging mock data
├── public/
│   └── images/                # Packaging mockup thumbnails, factory photos, founder avatars
├── tailwind.config.ts         # Tailwind configuration with token mappings
└── package.json               # Dependency declarations
```

---

## 3. NAVIGATION & GLOBAL SHELL

### 3.1 Header / Navbar (`Navbar.tsx`)

* **Type:** Sticky header with `backdrop-blur-md bg-[#0D1117]/85 border-b border-white/10`.
* **Left:** Packaging Brand Logo + Tagline (`PAXPRINT — Industrial Packaging & Printing`).
* **Center Anchor Links:**
  1. `Perkenalan` (`#hero`)
  2. `Produk & Layanan` (`#services`)
  3. `Keunggulan Cetak` (`#why-us`)
  4. `Alur Produksi` (`#process`)
  5. `Katalog Packaging` (`#portfolio`)
  6. `Tentang Kami` (`#about`)
  7. `FAQ` (`#faq`)
* **Right CTA:** Pill button `"Mulai Pesanan Custom"` -> Scrolls directly to `#inquiry`.

---

## 4. SCREEN & SECTIONS BREAKDOWN

### 4.1 Section: Hero / Perkenalan Perusahaan (`HeroSection.tsx`)

* **Anchor ID:** `#hero`
* **Badge:** Translucent pill badge `📦 Pabrik Percetakan & Manufaktur Packaging Produk Custom`.
* **Heading (H1):** `"Mewujudkan Packaging Produk Premium, High-Impact, & Ramah Lingkungan untuk Brand Anda."`
* **Sub-headline:** `"Dari Dus Karton Food-Grade, Hardbox Elegant, hingga Standing Pouch High-Barrier. Kami hadirkan standar cetak presisi tinggi dengan teknologi offset & digital printing mutakhir."`
* **CTAs:**
  * Primary CTA: `"Konsultasikan Pesanan Packaging"` (Scrolls to `#inquiry`)
  * Secondary CTA: `"Lihat Katalog Packaging"` (Scrolls to `#portfolio`)
* **Metrics Counter Strip:**
  * `10.000.000+` Pcs Kemasan Diproduksi
  * `500+` Brand UMKM & Enterprise
  * `99.2%` Akurasi Presisi Warna (CMYK/Pantone)
  * `Food Grade` FDA & Halal Compliant Materials

### 4.2 Section: Apa Yang Kami Lakukan / Produk & Layanan (`ServicesSection.tsx`)

* **Anchor ID:** `#services`
* **Headline:** `"Solusi & Produk Packaging Custom Kami"`
* **Sub-headline:** `"Pilihan bahan, teknik cetak, dan konstruksi kemasan yang dirancang presisi sesuai karakteristik produk Anda."`
* **Grid Layout (6 Category Cards):**
  1. **Rigid Box & Hardbox Premium:** Dus keras untuk gift box, skincare mewah, hampers, & produk elektronik (Magnet Box, Sliding Box, Hinged Box).
  2. **Folding Box & Dus Kemasan:** Dus folding karton (Duplex, Ivory, Eco-Kraft) untuk makanan, kosmetik, & obat-obatan dengan finishing Foil/UV.
  3. **Flexible Packaging & Standing Pouch:** Pouch berbahan Alufoil, Kraft Pouch, Zipper Lock, & Spout Pouch (Cairan/Bubuk) berteknologi High-Barrier.
  4. **Label Sticker & Shrink Sleeve:** Stiker rill/lembaran, Die-Cut Vinyl, Hologram, & Shrink Wrap botol minuman beresolusi cetak tajam.
  5. **Sustainable & Eco-Friendly Packaging:** Kemasan ramah lingkungan berbahan kertas daur ulang (Recyclable Kraft, FSC Certified Paper, Biodegradable).
  6. **Desain Pola Dieline & Prototipe Mockup:** Layanan pembuatan pola potong (dieline 2D/3D) dan cetak sampel fisik sebelum produksi masal.

### 4.3 Section: Mengapa Bermitra Dengan Kami (`WhyUsSection.tsx`)

* **Anchor ID:** `#why-us`
* **Headline:** `"Mengapa Ratusan Brand Mempercayakan Percetakan Packaging Kepada Kami?"`
* **Value Pillars (4 Feature Columns):**
  1. **Akurasi Warna & Presisi Cetak Tinggi:** Menggunakan mesin cetak German Offset (Heidelberg) & Digital Press terkini dengan kalibrasi Pantone 99% akurat.
  2. **Sample Mockup Fisik Gratis:** Bebas khawatir salah spesifikasi. Kami sediakan proofing fisik untuk Anda setujui sebelum naik cetak masal.
  3. **Material Food-Grade & Sertifikasi Keamanan:** Jaminan keamanan kontak langsung dengan makanan (Sertifikat FDA, Halal, & Greaseproof).
  4. **Kapasitas Produksi Pabrik Skala Besar:** Mampu menangani pesanan dari 500 pcs (batch uji coba) hingga jutaan pcs/bulan dengan jaminan deadline tepat waktu.

### 4.4 Section: Cara Kami Bekerja / Alur Produksi (`ProcessSection.tsx`)

* **Anchor ID:** `#process`
* **Headline:** `"4 Langkah Mudah Proses Pesanan Cetak Packaging"`
* **Interactive Timeline Component:**
  * **Step 01 — Konsultasi & Penentuan Spesifikasi:** Pembahasan dimensi (PxLxT), jenis bahan, spesifikasi produk, dan jumlah pesanan.
  * **Step 02 — Pembuatan Dieline & Sample Proofing:** Pembuatan pola potong gratis dan pengiriman sampel mockup fisik ke alamat Anda untuk persetujuan.
  * **Step 03 — Produksi Cetak Masal & QC:** Cetak masal dengan mesin presisi, dilanjutkan proses cutting, laminasi, & sortir Quality Control (QC) ketat.
  * **Step 04 — Packing Safe & Pengiriman:** Pengemasan rapi anti-air dan pengiriman langsung ke gudang/pabrik Anda seluruh Indonesia.

### 4.5 Section: Karya Terpilih Kami / Katalog Packaging (`PortfolioSection.tsx`)

* **Anchor ID:** `#portfolio`
* **Headline:** `"Katalog & Showroom Packaging Terpilih"`
* **Filter Tabs:** `[ Semua, Hardbox Premium, Dus Karton, Standing Pouch, Label & Sleeve, Eco Packaging ]`
* **Grid Layout (6 Project Showcase Cards):**
  * Cover Image Packaging
  * Category Badge
  * Product Title & Impact Metric (cth: *"Meningkatkan Sales 200% via Unboxing Experience"*)
  * Material Chips (`Ivory 350gsm`, `Gold Foil Stamping`, `Laminasi Doff`, `Food Grade`)
  * `"Detail Spesifikasi Packaging"` Button -> Opens Lightbox Modal.
* **Lightbox Modal Content:** Deskripsi produk klien, jenis bahan kertas/pouch, dimensi, teknik finishing, fitur pengunci, & sertifikasi bahan.

### 4.6 Section: Tentang Kami / Founders (`AboutFounders.tsx`)

* **Anchor ID:** `#about`
* **Headline:** `"Para Pakar Industri Percetakan Di Balik Kami"`
* **Sub-headline:** `"Didirikan oleh kombinasi teknolog percetakan, spesialis material kemasan, dan desainer struktur packaging berpengalaman."`
* **Founder Cards Grid (3 Cards):**
  * **Founder 1:** Septiawan Hadi — CEO & Master Printing Technologist (Bio: 15+ tahun mengelola pabrik cetak offset & digital packaging).
  * **Founder 2:** Amanda Putri — COO & Packaging Materials Expert (Bio: Spesialis pengadaan material kertas FSC, Alufoil barrier, & rantai pasok manufaktur).
  * **Founder 3:** Reza Pratama — Head of Packaging Structural & Graphic Design (Bio: Spesialis perancang pola potong dieline 3D & estetika kemasan unboxing).

### 4.7 Section: Pertanyaan Yang Sering Diajukan / FAQ (`FAQSection.tsx`)

* **Anchor ID:** `#faq`
* **Headline:** `"Pertanyaan Yang Sering Diajukan (FAQ Packaging)"`
* **Accordion Items (6 Essential Packaging FAQs):**
  1. *Berapa Minimum Order Quantity (MOQ) cetak packaging di percetakan Anda?* (Jawab: MOQ kami mulai dari 500 pcs untuk dus karton & standing pouch, dan 100 pcs untuk Hardbox Premium).
  2. *Apakah saya bisa memesan sampel/mockup cetak sebelum produksi masal?* (Jawab: Ya! Kami menyediakan sampel mockup fisik untuk penyesuaian dimensi & uji coba produk).
  3. *Berapa lama estimasi waktu produksi cetak masal?* (Jawab: Rata-rata 7-14 hari kerja setelah proofing sampel fisik disetujui).
  4. *Apakah bahan kemasan yang digunakan aman untuk makanan (Food Grade)?* (Jawab: Ya, kami memiliki pilihan bahan sertifikasi FDA, Greaseproof, & Halal compliant).
  5. *Bagaimana jika terjadi cacat warna atau kerusakan saat pengiriman?* (Jawab: Kami memberikan Garansi Cetak Ulang 100% jika hasil tidak sesuai sampel yang telah disetujui).
  6. *Apakah tim Anda bisa membantu membuatkan pola dieline & desain grafis kemasan dari nol?* (Jawab: Ya, tim desainer struktur kami siap membuatkan pola dieline presisi secara gratis).

### 4.8 Section: Mulai Proyek Pesanan Anda / Client Order Inquiry (`InquirySection.tsx`)

* **Anchor ID:** `#inquiry`
* **Headline:** `"Mulai Proyek Pesanan Packaging Anda"`
* **Part A: Guide Pemahaman & Keuntungan Klien (Left Column)**
  * **Keuntungan Memesan Di Tempat Kami:**
    * 🆓 **Bebas Konsultasi Material & Pola Dieline:** Kami bantu hitungkan efisiensi ukuran kertas agar harga per pcs paling efisien.
    * 📦 **Garansi Sampel Mockup Fisik:** Anda dapat memegang & menguji langsung produk Anda di dalam kemasan sebelum cetak masal.
    * ⚡ **Penawaran Harga Transparan (<24 Jam):** Rincian biaya bahan, cetak, finishing, & pengiriman tanpa biaya tersembunyi.
* **Part B: Interactive Packaging Inquiry Form (Right Column)**

| Field Name | Type | Validation Rules | Options / Specifications |
|---|---|---|---|
| `clientName` | Text Input | Min 3 chars, Required | Nama Lengkap Klien / PIC Brand |
| `companyName` | Text Input | Min 2 chars, Required | Nama Brand Produk / Perusahaan |
| `email` | Email Input | Valid Email, Required | Alamat Email Aktif |
| `phoneNumber` | Tel Input | Valid Phone (Min 10 digits) | Nomor WhatsApp Aktif (untuk kirim penawaran) |
| `orderType` | Multi-select Checkboxes | At least 1 selected | Options: `Rigid Box / Hardbox`, `Folding Box / Dus Karton`, `Flexible Packaging / Standing Pouch`, `Label Sticker & Sleeve`, `Eco-Friendly Packaging`, `Custom Dieline & Prototyping` |
| `requestScale` | Select Dropdown | Required | Options: `500 - 1.000 Pcs (Skala Uji Coba / Launch)`, `1.000 - 5.000 Pcs`, `5.000 - 20.000 Pcs`, `20.000 - 100.000 Pcs`, `> 100.000 Pcs (Skala Pabrik / Industri)` |
| `estimatedBudget` | Select Dropdown | Required | Options: `< Rp 10 Juta`, `Rp 10 Juta - Rp 25 Juta`, `Rp 25 Juta - Rp 50 Juta`, `Rp 50 Juta - Rp 100 Juta`, `> Rp 100 Juta` |
| `projectNotes` | Textarea | Min 20 chars, Required | Dimensi (PxLxT mm), jenis finishing (Foil/Emboss/UV/Laminasi), target siap edar, & catatan spesifik |

---

## 5. DATA SCHEMAS & MOCK DATA

### 5.1 TypeScript Interfaces (`/types/index.ts`)

```ts
export type PackagingCategory = 
  | 'Rigid Box / Hardbox' 
  | 'Folding Box / Dus Karton' 
  | 'Flexible Packaging / Standing Pouch' 
  | 'Label Sticker & Sleeve' 
  | 'Eco-Friendly Packaging' 
  | 'Custom Dieline & Prototyping';

export interface ServiceItem {
  id: string;
  title: string;
  category: PackagingCategory;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: PackagingCategory;
  thumbnail: string;
  impactMetric: string;
  shortSummary: string;
  materialSpecs: string;
  finishingTech: string[];
  liveUrl?: string;
}

export interface FounderItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  specialization: string;
  linkedInUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InquiryFormData {
  clientName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  orderType: PackagingCategory[];
  requestScale: string;
  estimatedBudget: string;
  projectNotes: string;
}
```

### 5.2 Mock Data Seed (`/mock/data.ts`)

```ts
import { ServiceItem, PortfolioItem, FounderItem, FAQItem } from '@/types';

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Rigid Box & Hardbox Premium',
    category: 'Rigid Box / Hardbox',
    shortDescription: 'Dus keras mewah berbahan board tebal berlapis art paper untuk gift set & skincare.',
    fullDescription: 'Konstruksi kemasan kokoh dengan opsi penutup magnet, sliding drawer, serta inner foam custom untuk proteksi maksimal.',
    iconName: 'Box',
    deliverables: ['Board 2mm - 3mm Thick', 'Custom Inner Sponge/EVA', 'Gold/Silver Foil Stamping', 'Magnet Lock Mechanism']
  },
  {
    id: 'srv-2',
    title: 'Folding Box & Dus Kemasan Custom',
    category: 'Folding Box / Dus Karton',
    shortDescription: 'Dus lipat karton Ivory, Duplex, & Eco Kraft untuk produk kosmetik, obat, & makanan.',
    fullDescription: 'Cetak offset warna tajam dengan pilihan cetak luar-dalam, window mika benang, serta laminasi water-resistant.',
    iconName: 'Package',
    deliverables: ['Kertas Ivory 300-350gsm', 'Window Mika Transparan', 'Laminasi Doff/Glossy', 'Food Grade Coating']
  },
  {
    id: 'srv-3',
    title: 'Flexible Packaging & Standing Pouch',
    category: 'Flexible Packaging / Standing Pouch',
    shortDescription: 'Pouch kemasan bubuk, kopi, & cairan dengan zipper lock & material High-Barrier.',
    fullDescription: 'Lapisan Aluminium Foil / MetPET perlindungan dari udara, kelembaban, & sinar UV agar produk tahan lama.',
    iconName: 'Layers',
    deliverables: ['Material Alufoil / MetPET', 'Zipper Lock Klip', 'V-Cut Easy Tear Spot', 'Spout Cap Liquid Valve']
  },
  {
    id: 'srv-4',
    title: 'Label Sticker & Shrink Sleeve',
    category: 'Label Sticker & Sleeve',
    shortDescription: 'Label stiker botol, toples, & shrink wrap plastik melingkar 360 derajat.',
    fullDescription: 'Stiker vinyl waterproof, transparan bening, hologram anti-pemalsuan, serta shrink label botol presisi.',
    iconName: 'Tag',
    deliverables: ['Stiker Vinyl Waterproof', 'High-Gloss / Matte Varnish', 'Die-Cut Custom Shape', 'Shrink Sleeve Bottle Wrap']
  },
  {
    id: 'srv-5',
    title: 'Sustainable & Eco-Friendly Packaging',
    category: 'Eco-Friendly Packaging',
    shortDescription: 'Kemasan kertas daur ulang ramah lingkungan yang dapat terurai secara alami.',
    fullDescription: 'Solusi kemasan serat alami Kraft cokelatzertifikasi FSC dengan tinta kedelai (Soy-based Ink) bebas bahan kimia berbahaya.',
    iconName: 'Leaf',
    deliverables: ['FSC Certified Recycled Paper', 'Soy-based Eco Ink', '100% Biodegradable Material', 'Unbleached Kraft Board']
  },
  {
    id: 'srv-6',
    title: 'Desain Pola Dieline & Prototipe Mockup',
    category: 'Custom Dieline & Prototyping',
    shortDescription: 'Pembuatan pola potong presisi & sampel fisik sebelum masuk tahap cetak masal.',
    fullDescription: 'Tim engineer packaging kami merancang pola 2D/3D gratis untuk memastikan ukuran produk pas sempurna.',
    iconName: 'Ruler',
    deliverables: ['Format File Dieline AI/PDF', 'Mockup 3D Render High-Res', 'Cetak Sample Fisik 1:1', 'Uji Beban & Ketahanan Kemasan']
  }
];

export const MOCK_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Luxe Botanicals Skincare Hardbox',
    client: 'Luxe Botanicals Indonesia',
    category: 'Rigid Box / Hardbox',
    thumbnail: '/images/portfolio/skincare_hardbox.jpg',
    impactMetric: 'Meningkatkan Sales 215% via Premium Unboxing',
    shortSummary: 'Hardbox magnetik berlapis kain beludru inner dengan cetak Gold Foil Embossed.',
    materialSpecs: 'Yellow Board 2.5mm + Art Paper 150gsm',
    finishingTech: ['Gold Foil Stamping', 'Soft-Touch Matte', 'Custom Velvet Tray'],
    liveUrl: 'https://luxebotanicals.com'
  },
  {
    id: 'port-2',
    title: 'Kopi Gourmet Standing Pouch Zipper',
    client: 'Kopi Ancala Roastery',
    category: 'Flexible Packaging / Standing Pouch',
    thumbnail: '/images/portfolio/coffee_pouch.jpg',
    impactMetric: 'Memperpanjang Shelf-Life Produk Hingga 18 Bulan',
    shortSummary: 'Standing pouch matt black dengan One-Way Degassing Valve & klip zipper presisi.',
    materialSpecs: 'PET / ALU / LLDPE High-Barrier 120 Micron',
    finishingTech: ['Degassing Valve', 'Zipper Lock', 'Matte Finish + Spot UV']
  },
  {
    id: 'port-3',
    title: 'Artisan Pastry Food-Grade Box',
    client: 'Maison de Patisserie',
    category: 'Folding Box / Dus Karton',
    thumbnail: '/images/portfolio/pastry_box.jpg',
    impactMetric: 'Terjual 50.000+ Box Dalam Musim Hari Raya',
    shortSummary: 'Dus lipat Ivory food grade dengan window mika transparan cetak motif emas.',
    materialSpecs: 'Kertas Ivory Food Grade 350gsm (FDA Certified)',
    finishingTech: ['Window Mika PVC', 'Gold Hot Stamping', 'Greaseproof Coating']
  },
  {
    id: 'port-4',
    title: 'Mooncake Festival Rigid Box Set',
    client: 'Royal Heritage Hotel',
    category: 'Rigid Box / Hardbox',
    thumbnail: '/images/portfolio/mooncake_box.jpg',
    impactMetric: 'Sold Out dalam 2 Minggu Rilis',
    shortSummary: 'Kemasan eksklusif bertingkat 2 laci dengan pegangan pita satin dan ukiran laser.',
    materialSpecs: 'Rigid Board 3mm + Textured Fancy Paper',
    finishingTech: ['Laser Cutting', 'Satin Ribbon Handle', 'Embossed Pattern']
  },
  {
    id: 'port-5',
    title: 'Eco-Kraft Modular Electronics Box',
    client: 'Nexa Tech Accessories',
    category: 'Eco-Friendly Packaging',
    thumbnail: '/images/portfolio/kraft_box.jpg',
    impactMetric: '100% Recyclable Zero-Plastic Packaging',
    shortSummary: 'Dus kertas kraft cokelat tanpa plastik dengan pengunci lid tanpa lem tambahan.',
    materialSpecs: 'Recycled Kraft Board 400gsm (FSC Certified)',
    finishingTech: ['Soy-Based Black Ink', 'Locking Tab Structure', 'No-Glue Assembly']
  },
  {
    id: 'port-6',
    title: 'Herbal Drink Shrink Sleeve Label',
    client: 'Jamuderm Natural Drink',
    category: 'Label Sticker & Sleeve',
    thumbnail: '/images/portfolio/shrink_sleeve.jpg',
    impactMetric: 'Tampilan Botol 360° Menarik & Anti Air',
    shortSummary: 'Label plastik shrink melingkar penuh botol dengan perforasi mudah dibuka.',
    materialSpecs: 'PVC Shrink Film 45 Micron High Shrinkage',
    finishingTech: ['Rotogravure 8 Colors', 'Easy-Tear Perforation', 'Glossy Varnish']
  }
];

export const MOCK_FOUNDERS: FounderItem[] = [
  {
    id: 'fnd-1',
    name: 'Septiawan Hadi',
    role: 'CEO & Master Printing Technologist',
    avatar: '/images/founders/septiawan.jpg',
    bio: '15+ tahun mengelola teknologi cetak offset & digital printing skala pabrik. Pelopor otomatisasi manajemen warna CMYK/Pantone presisi.',
    specialization: 'Offset & Digital Printing Systems, Color Management, Factory Operations',
    linkedInUrl: 'https://linkedin.com/in/septiawanhadi'
  },
  {
    id: 'fnd-2',
    name: 'Amanda Putri',
    role: 'COO & Packaging Materials Specialist',
    avatar: '/images/founders/amanda.jpg',
    bio: 'Pakar pengadaan material kertas FSC, flexible barrier film, serta sertifikasi food-grade internasional untuk kebutuhan ekspor.',
    specialization: 'Supply Chain, Sustainable Materials, Food Safety Compliance (FDA/Halal)',
    linkedInUrl: 'https://linkedin.com/in/amandaputri'
  },
  {
    id: 'fnd-3',
    name: 'Reza Pratama',
    role: 'Head of Structural & Dieline Design',
    avatar: '/images/founders/reza.jpg',
    bio: 'Desainer arsitektur kemasan 3D yang telah menciptakan 1.000+ pola potong dieline efisien & unik untuk berbagai brand ternama.',
    specialization: 'Structural Dieline 3D, Unboxing Experience Design, Finishing Innovation',
    linkedInUrl: 'https://linkedin.com/in/rezapratama'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa Minimum Order Quantity (MOQ) cetak packaging di percetakan Anda?',
    answer: 'MOQ fleksibel sesuai jenis kemasan: Dus karton & Standing Pouch mulai dari 500 pcs. Hardbox Premium mulai dari 100 pcs. Untuk pesanan skala industri di atas 10.000 pcs tersedia diskon khusus pabrik.',
    category: 'MOQ'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya bisa memesan sampel/mockup cetak sebelum produksi masal?',
    answer: 'Tentu! Kami menyediakan layanan pemesanan sampel mockup fisik (dummy cetak 1:1) agar Anda bisa menguji ukuran, kekuatan bahan, dan tampilan visual sebelum naik cetak masal.',
    category: 'Sample Proofing'
  },
  {
    id: 'faq-3',
    question: 'Berapa lama estimasi waktu produksi cetak masal?',
    answer: 'Rata-rata durasi pengerjaan cetak masal adalah 7-14 hari kerja setelah proofing sampel fisik disetujui. Untuk pesanan express / deadline mendesak dapat didiskusikan dengan tim produksi.',
    category: 'Waktu Produksi'
  },
  {
    id: 'faq-4',
    question: 'Apakah bahan kemasan yang digunakan aman untuk produk makanan (Food Grade)?',
    answer: 'Ya. Kami menyediakan jajaran kertas Ivory Food Grade, kraft greaseproof, & pouch alufoil bersertifikat FDA & Halal yang aman kontak langsung dengan makanan & minuman.',
    category: 'Sertifikasi'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana jika terjadi ketidaksesuaian warna atau cacat produksi saat pengiriman?',
    answer: 'Kami memberikan Garansi Cetak Ulang 100% jika terjadi kesalahan cetak atau ketidaksesuaian spesifikasi yang signifikan dari sampel acuan yang telah disetujui.',
    category: 'Garansi'
  },
  {
    id: 'faq-6',
    question: 'Apakah tim Anda bisa membantu membuatkan pola dieline & desain grafis kemasan dari nol?',
    answer: 'Ya! Tim desainer struktur kami akan membuatkan pola dieline presisi secara gratis untuk setiap pesanan kemasan custom di tempat kami.',
    category: 'Desain Dieline'
  }
];
```

---

## 6. ENVIRONMENT VARIABLES

```env
# Public client API configuration
NEXT_PUBLIC_APP_URL          = https://paxprint-packaging.com   # Base web app domain
NEXT_PUBLIC_API_TIMEOUT      = 10000                            # API request timeout (ms)

# Server-side API endpoint for receiving packaging order inquiries
INQUIRY_WEBHOOK_URL          = https://api.paxprint-packaging.com/webhooks/inquiry
RESEND_API_KEY               = re_packaging_123456789           # Email notification service key (server-only)
```

---

## 7. BUILD ORDER — PHASE-LOCKED

⛔ **RULE 1:** Do NOT start Phase N+1 until Phase N is visually and functionally approved.  
⛔ **RULE 2:** Never hardcode any color hex — use token values from `/lib/tokens.ts` only.  
⛔ **RULE 3:** Use `/lib/animations.ts` Framer Motion variants only — do not write arbitrary motion values inline.  
⛔ **RULE 4:** Every form submission MUST be validated with Zod before state dispatch.

```
Phase 1:  Packaging Design Tokens & Global CSS System ← Setup emerald/amber tokens, base CSS
Phase 2:  Scaffold App & Shared UI Components          ← Create Navbar, Footer, Button, Card, Modal
Phase 3:  Hero & Packaging Services Implementation     ← Build HeroSection & ServicesSection
Phase 4:  Why Us & Production Process Sections         ← Build WhyUsSection & ProcessSection
Phase 5:  Packaging Catalogue Showcase & Lightbox Modal← Build PortfolioSection + Lightbox Modal
Phase 6:  About Founders & Packaging FAQ Accordion     ← Build AboutFounders & FAQSection
Phase 7:  Project Starter & Packaging Order Form       ← Build Client Guide + Dynamic Order Form
Phase 8:  API Integration & Validation Pass            ← Connect API endpoint, Zod validation, Toast
Phase 9:  Responsiveness & Mobile View Audit           ← Test Mobile Drawer, Form Usability, Contrast
Phase 10: Final Quality Gate & Deployment Check        ← Verify zero build errors, optimal Lighthouse score
```

---

## 8. OPEN QUESTIONS TABLE

| # | Question | Status | Impact if Unresolved |
|---|----------|--------|----------------------|
| 1 | Apakah perlu menyertakan fitur kalkulasi estimasi harga otomatis (Packaging Price Calculator) di Form Inquiry? | ⚠️ PARTIAL | Pada V1.1 disajikan formulir penawaran range anggaran & request spesifikasi lengkap. Fitur auto-kalkulator dapat ditambahkan pada iterasi V1.2. |
| 2 | Apakah aset foto pabrik percetakan & foto fisik produk packaging sudah tersedia lengkap? | ⏳ PENDING | Menggunakan gambar visual high-res Unsplash packaging & SVG mockup hingga aset fisik pabrik diunggah. |
| 3 | Apakah pengiriman sampel fisik mockup mendukung alamat seluruh Indonesia? | ✅ RESOLVED | Ya, terintegrasi dengan ekspedisi pengiriman nasional. |

---

## 9. QUALITY GATES & VERIFICATION

Before declaring the project complete, the AI agent must verify:
- [x] All 8 required sections present and interactive (`#hero`, `#services`, `#why-us`, `#process`, `#portfolio`, `#about`, `#faq`, `#inquiry`).
- [x] Client Packaging Order Form validates: Client Identity (Name, Brand/Company, Email, WhatsApp Phone), Packaging Categories, Request Volume/Quantity, Budget Range, Notes (Dimensions & Finishing).
- [x] Mobile drawer navigation functions smoothly on small screens.
- [x] Zero console errors during interaction.
- [x] All design tokens mapped cleanly without raw un-tokenized color hexes.
