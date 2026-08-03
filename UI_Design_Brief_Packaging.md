# UI Design Brief — Multistyle Concept Guide for Product Packaging Platform

**Version:** 1.0  
**Based On:** [PRD_CompanyProfile_Web.md](file:///c:/Users/Septiawan%20Hadi/Documents/Magang/Mayar%20Handbox/company_profile/PRD_CompanyProfile_Web.md)  
**Style Guides Referenced:**  
- `@12` — **Material You (Material Design 3)**
- `@15` — **Academia / Classical (Heritage Library Aesthetic)**
- `@25` — **Hand-Drawn / Sketchbook (Playful Human Touch)**
- `@28` — **Organic / Natural (Wabi-Sabi Earth Tone)**

---

## 1. RINGKASAN TUJUAN & STRATEGI DESIGN

Brief ini menyajikan panduan konseptual dan teknis desain antarmuka (UI/UX) untuk aplikasi web **PaxPrint (Perusahaan Percetakan Packaging Produk Custom)**. Setiap tampilan dari PRD (`#hero`, `#services`, `#why-us`, `#process`, `#portfolio`, `#about`, `#faq`, `#inquiry`) dirancang ke dalam **4 variasi pendekatan estetik independen**.

Pendekatan ini memungkinkan tim desain & developer untuk memilih atau menyajikannya sebagai opsi tema (theme switcher) yang disesuaikan dengan posisi target pasar brand.

---

## 2. MATRIKS PERBANDINGAN DESIGN STYLE

| Parameter UI | 1. Material You (MD3) `[@12]` | 2. Academia / Classical `[@15]` | 3. Hand-Drawn / Sketchbook `[@25]` | 4. Organic / Natural `[@28]` |
|---|---|---|---|---|
| **Vibe Utama** | Modern, personal, adaptable, tech-forward | Prestisius, historis, mewah, berwibawa | Kreatif, unik, human touch, playful | Alami, sustainable, ramah lingkungan, tenang |
| **Palet Warna** | Surface Tonal Purple/Indigo (`#6750A4`, `#FFFBFE`, `#F3EDF7`) | Deep Mahogany (`#1C1714`), Parchment (`#E8DFD4`), Brass (`#C9A962`), Crimson (`#8B2635`) | Warm Paper (`#FDFBF7`), Soft Pencil (`#2D2D2D`), Red Marker (`#FF4D4D`), Post-it Yellow (`#FFF9C4`) | Rice Paper (`#FDFCF8`), Moss Green (`#5D7052`), Terracotta (`#C18C5D`), Raw Timber (`#DED8CF`) |
| **Tipografi** | `Roboto` (Medium 500, Regular 400) | `Cormorant Garamond` (Heading), `Crimson Pro` (Body), `Cinzel` (Labels) | `Kalam` (Headings Marker), `Patrick Hand` (Body Handwritten) | `Fraunces` (Soft Serif Headings), `Nunito` / `Quicksand` (Rounded Body) |
| **Bentuk & Corner Radius** | Generous organic rounding (`24px` cards, `rounded-full` pills) | Corner Arch-Top (`40% 40% 0 0`), subtle `4px` radii | Irregular Wobbly (`255px 15px 225px 15px / 15px 225px...`) | Amorphous Blob shapes (`60% 40% 30% 70% / 60% 30%...`), `rounded-[2rem]` |
| **Bayangan & Kedalaman** | Soft Tonal Elevation (`shadow-sm` -> `shadow-md` on hover) | Soft warm shadows + Engraved dual text-shadow + Inset highlights | **Hard 4px/8px Solid Offset Shadow** (Tanpa blur, cut-paper style) | Soft Moss/Clay Tinted Diffused Shadows (`0 4px 20px -2px rgba(93,112,82,0.15)`) |
| **Tekstur & Ornamen** | Floating `blur-3xl` gradient circles, state layers | Grain noise overlay, Vignette, Brass Corner Flourishes, Wax Seals | Notebook dot grid (`radial-gradient`), Translucent Tape, Thumbtacks | Global paper noise overlay, curved SVG dashed lines |

---

## 3. DETAIL BRIEF TAMPILAN PER VARIASI STYLE

---

### STYLE VARIANT 1: MATERIAL YOU (MD3) — *Modern Tech-Forward Packaging Hub*

Pendekatan ini sangat cocok jika perusahaan percetakan ingin menonjolkan kecanggihan teknologi pabrik cetak otomatis, sistem digital proofing, dan kecepatan manufaktur.

#### 1. Header / Navbar
- **Container:** Floating bar dengan sudut melengkung halus `rounded-full`, latar belakang `bg-[#F3EDF7]/80` dengan `backdrop-blur-md`.
- **Nav Links:** Teks `Roboto Medium`, efek state layer overlay `hover:bg-[#6750A4]/10` berbentuk kapsul.
- **CTA Button:** Pill-shaped `rounded-full` warna Purple Seed `#6750A4` dengan teks putih, `active:scale-95` untuk umpan balik taktil.

#### 2. Hero Section (`#hero`)
- **Latar Belakang:** Tinted surface `#FFFBFE` dengan 2-3 elemen dekoratif lingkaran organik bergradasi `blur-3xl` melayang di belakang headline.
- **Kartu Highlight Statistik:** Container card dengan `rounded-[32px]`, background Surface Container `#F3EDF7`, tanpa garis tepi tajam.
- **CTAs:** Tombol utama `rounded-full bg-[#6750A4] shadow-md hover:shadow-lg transition-all`.

#### 3. Produk & Layanan (`#services`)
- **Grid Layout:** 3 Kolom kartu dengan radius `rounded-[24px]` dan latar `#F3EDF7`.
- **Interaksi:** Hover menambah elevasi dari `shadow-sm` menjadi `shadow-md` disertai `hover:scale-[1.02]`.
- **Icon Container:** Lingkaran `rounded-full bg-[#E8DEF8]` menampung ikon packaging warna indigo.

#### 4. Mengapa Bermitra Dengan Kami (`#why-us`)
- **Visual Pill:** 4 Kartu fitur dengan tonal surface terstratifikasi (Background -> Surface Container Low -> Surface Container).
- **Badge Indikator:** Badge pill `rounded-full bg-[#E8DEF8] text-[#1D192B]`.

#### 5. Alur Produksi (`#process`)
- **Timeline:** Angka langkah `01, 02, 03, 04` di dalam wadah pill `rounded-full bg-[#6750A4] text-white`.
- **Konektor:** Garis melengkung halus dengan warna `Outline Variant`.

#### 6. Karya Terpilih / Katalog (`#portfolio`)
- **Filter Tabs:** Tab berbentuk kapsul pill `rounded-full`. Tab aktif berwarna `#6750A4` penuh, tab pasif `#E8DEF8`.
- **Kartu Katalog:** Gambar kemasan dengan `rounded-[20px]`, efek zoom halus `group-hover:scale-105`.
- **Lightbox Modal:** Sheet melayang `rounded-[28px]` dengan latar belakang tonal surface.

#### 7. Tentang Kami / Founders (`#about`)
- **Kartu Founder:** Radius `rounded-[28px]`, foto avatar lingkaran sempurna `rounded-full` dengan ring tonal `#E8DEF8`.

#### 8. FAQ Accordion (`#faq`)
- **Item Styling:** Container `rounded-[24px] bg-[#F3EDF7]` yang mengembang secara mulus saat diklik.

#### 9. Form Pesanan Custom (`#inquiry`)
- **Material 3 Filled Text Field:** Input tinggi (`h-14`), sudut atas melengkung (`rounded-t-xl`), sudut bawah siku, dengan batas bawah 2px yang berubah warna menjadi `#6750A4` saat fokus.
- **Tombol Submit:** Pill `rounded-full` besar dengan state layer visual.

---

### STYLE VARIANT 2: ACADEMIA / CLASSICAL — *Heritage Packaging & Master Printing Guild*

Pendekatan ini sangat sesuai jika percetakan menekankan warisan keahlian (*craftsmanship*), keahlian hardbox mewah kelas atas, finishing emas/foil eksklusif, dan tradisi seni cetak bertaraf internasional.

#### 1. Header / Navbar
- **Container:** Latar gelap kayu mahogany `#1C1714` dengan garis pembatas tipis warna *Wood Grain* `#4A3F35` dan aksen garis kuningan (*Polished Brass*) `#C9A962`.
- **Tipografi Logo:** Font `Cinzel` serif berkesan ukiran huruf kapital emas.
- **Nav Links:** Font `Cinzel` uppercase (`text-xs tracking-[0.2em]`), bertransisi ke warna brass saat hover.

#### 2. Hero Section (`#hero`)
- **Atmosfer:** Efek vignette radial di sekeliling layar dan tekstur kertas tua (*aged parchment noise*) 3% opacity.
- **Section Label:** Sistem penomoran Romawi *"VOLUME I — THE ART OF PACKAGING"*.
- **Foto Hero:** Menggunakan **Cathedral Arch-Top Radius** (`border-radius: 40% 40% 0 0 / 20% 20% 0 0`) pada foto kemasan hardbox mewah, dengan filter awal sepia `filter: sepia(0.6)` yang berubah menjadi warna asli saat di-hover.
- **Headline (H1):** `Cormorant Garamond` serif anggun dan berwibawa.

#### 3. Produk & Layanan (`#services`)
- **Frame Kartu:** Kartu berbahan *Aged Oak* `#251E19` dengan ornamen kurung kuningan di sudut-sudutnya (*Brass Corner Flourishes*).
- **Divider:** Garis pembatas ornamen (*Ornate Divider*) dengan simbol glosari emas (`✦` / `❧`) di tengahnya.

#### 4. Mengapa Bermitra Dengan Kami (`#why-us`)
- **Kartu Keunggulan:** Tampilan mirip sertifikat resmi/piagam dengan double border dan *Wax Seal Badge* warna Crimson Merah `#8B2635` di sudut kanan atas kartu.

#### 5. Alur Produksi (`#process`)
- **Timeline:** Langkah-langkah menggunakan angka Romawi (*I. DISCOVERY, II. PROOFING, III. MANUFACTURE, IV. DISPATCH*).
- **Paragraf Pembuka:** Paragraf pertama menggunakan **Drop Cap** besar berwarna emas (`Cinzel text-7xl float-left mr-4`).

#### 6. Karya Terpilih / Katalog (`#portfolio`)
- **Tampilan Foto:** Seluruh thumbnail katalog menggunakan bentuk *Arch-Top* dengan bingkai kayu `#4A3F35` dan filter sepia interaktif.
- **Detail Modal:** Desain berbentuk lembaran manuskrip tua berbingkai ornamen emas.

#### 7. Tentang Kami / Founders (`#about`)
- **Foto Founder:** Bingkai oval/arch klasik dengan aksen garis brass.
- **Gelar & Jabatan:** Menggunakan font `Cinzel` uppercase warna emas.

#### 8. FAQ Accordion (`#faq`)
- **Gaya Accordion:** Latar belakang kayu `#251E19` dengan indikator buka/tutup berupa ukiran tombol emas (`+` / `-`).

#### 9. Form Pesanan Custom (`#inquiry`)
- **Container Form:** Diapit oleh frame ukiran kayu tua dan pembatas garis emas *brass gradient*.
- **Field Input:** Latar gelap `#251E19`, teks warna krem *Antique Parchment* `#E8DFD4`, placeholder font serif miring.
- **Tombol Submit:** Tombol berkilau logam kuningan (*Brass Gradient* `linear-gradient(180deg, #D4B872, #C9A962, #B8953F)`) dengan efek teks ukir (*Engraved Text Shadow*).

---

### STYLE VARIANT 3: HAND-DRAWN / SKETCHBOOK — *Creative Packaging Studio & Dieline Lab*

Pendekatan ini sempurna jika percetakan ingin tampil unik, kreatif, ramah UMKM, eksperimental, dan menekankan kemudahan konsultasi pola potong (*dieline*) secara spontan dan fleksibel.

#### 1. Header / Navbar
- **Container:** Latar belakang kertas hangat `#FDFBF7` dengan garis batas hitam cat pensil tidak teratur (*Wobbly Border* `border-2 border-[#2D2D2D]`).
- **Nav Links:** Font tulisan tangan `Patrick Hand`, dengan garis bawah bergelombang miring (*scribble underline*) saat hover.
- **CTA Button:** Kertas stiker miring dengan bayangan tegas tanpa blur (*Hard Offset Shadow* `4px 4px 0px #2D2D2D`).

#### 2. Hero Section (`#hero`)
- **Tekstur Latar:** Pola bintik kertas buku gambar (*Dot Grid Paper Background*).
- **Elemen Vektor:** Elemen panah coretan tangan melengkung (*Hand-drawn SVG Arrow*) yang menunjuk langsung ke tombol CTA.
- **Headline (H1):** Font spidol tebal `Kalam` (Bold 700), dengan tanda seru atau kata kunci yang sedikit dimiringkan (`rotate-2`).

#### 3. Produk & Layanan (`#services`)
- **Kartu Layanan:** Kartu menyerupai lembaran *Sticky Note* warna kuning post-it `#FFF9C4` atau putih bergaris pensil miring (`-rotate-1` atau `rotate-2`).
- **Aksen Dekorasional:** Hiasan pita selotip transparan (*Translucent Tape Strip*) di bagian atas kartu dan jarum pin merah (*Thumbtack*).

#### 4. Mengapa Bermitra Dengan Kami (`#why-us`)
- **Layout Pilar:** Kartu berbayangan tegas `box-shadow: 6px 6px 0px #2D2D2D`. Saat kursor diarahkan (hover), kartu berotasi halus dan bayangan memendek menjadi `2px 2px` (efek tombol tertekan).

#### 5. Alur Produksi (`#process`)
- **Garis Penghubung:** Gunakan garis putus-putus bergelombang (*Squiggly Dashed SVG Line*) antar langkah produksi.
- **Badge Angka:** Angka dilingkari dengan coretan pensil tidak simetris.

#### 6. Karya Terpilih / Katalog (`#portfolio`)
- **Gaya Photo Card:** Tampilan seperti foto Polaroid yang ditempel dengan selotip di atas papan gambar.
- **Badge Kategori:** Stiker bergaris putus-putus warna merah spidol koreksi `#FF4D4D`.

#### 7. Tentang Kami / Founders (`#about`)
- **Kartu Founder:** Foto sketsa/portrait berbingkai garis pensil tebal miring dengan catatan kaki bertuliskan tangan.

#### 8. FAQ Accordion (`#faq`)
- **Tampilan Balon Cakap:** Setiap FAQ berbentuk balon dialog (*Speech Bubble*) dengan ekor segitiga tidak beraturan.

#### 9. Form Pesanan Custom (`#inquiry`)
- **Desain Formulir:** Didesain menyerupai lembaran kuisioner/sketsa nota pesanan berbintik.
- **Field Input:** Border pensil wobbly `border-[3px]`, font input `Patrick Hand`.
- **Tombol Submit:** Tombol miring merah spidol `#FF4D4D` yang "mepet rata" saat diklik (*active:translate-x-1 active:translate-y-1 active:shadow-none*).

---

### STYLE VARIANT 4: ORGANIC / NATURAL (WABI-SABI) — *Eco-Friendly & Sustainable Packaging Craft*

Pendekatan ini paling tepat digunakan untuk menonjolkan fokus kemasan daur ulang (*eco-friendly*), bahan ramah lingkungan, sertifikasi FSC, serat kertas Kraft alami, dan konsep keberlanjutan.

#### 1. Header / Navbar
- **Container:** Kapsul melayang *frosted glass* `bg-white/70 backdrop-blur-md` dengan garis pembatas warna kayu mentah *Raw Timber* `#DED8CF`.
- **Logo:** Wadah lingkaran hijau lumut *Moss Green* `#5D7052` dengan ikon daun/kemasan putih.
- **Nav Links:** Tipografi rounded `Nunito` halus berwarna *Deep Loam* `#2C2C24`.

#### 2. Hero Section (`#hero`)
- **Latar Belakang:** Warna kertas beras *Rice Paper* `#FDFCF8` dengan tekstur serat alam halus dan 2 bentuk *amorphous blob* hijau lumut melayang ber-blur `blur-3xl`.
- **Headline (H1):** Font serif hangat `Fraunces` dengan bobot lembut (*soft variable axes*).
- **Foto Utama:** Frame foto berotasi miring `-2deg` dengan bingkai putih tebal `4px`, memberikan kesan hasil foto jurnal lingkungan.

#### 3. Produk & Layanan (`#services`)
- **Bentuk Kartu:** Menggunakan **Asymmetric Organic Card Radii** (kombinasi variasi radius seperti `rounded-tl-[4rem] rounded-br-[4rem] rounded-2xl`).
- **Warna Kartu:** Alternasi lembut warna tanah, batu *Stone* `#F0EBE5`, dan pasir *Sand* `#E6DCCD`.
- **Hover Lift:** Kartu terangkat halus `hover:-translate-y-1` dengan bayangan bernuansa warna lumut `shadow-[0_20px_40px_-10px_rgba(93,112,82,0.15)]`.

#### 4. Mengapa Bermitra Dengan Kami (`#why-us`)
- **Pillar Container:** Wadah berbentuk batu sungai (*River Stone Shapes*) bertekstur halus tanpa sudut 90 derajat yang kaku.

#### 5. Alur Produksi (`#process`)
- **Konektor Alur:** Garis lengkung organik seperti ranting/aliran air berbentuk kurva SVG putus-putus.

#### 6. Karya Terpilih / Katalog (`#portfolio`)
- **Bentuk Masking Foto:** Menggunakan *Blob Masking Radius* (`rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]`) pada kategori produk eco-packaging.
- **Tab Filter:** Pill bundar penuh `rounded-full` warna hijau lumut `#5D7052` dan Terracotta `#C18C5D`.

#### 7. Tentang Kami / Founders (`#about`)
- **Frame Profil:** Foto founder berbentuk lingkaran halus organik dengan latar warna alami kayu mentah.

#### 8. FAQ Accordion (`#faq`)
- **Gaya Accordion:** Kartu berujung sangat bulat `rounded-[2rem]` dengan warna latar belakang alternatif tanah liat pucat.

#### 9. Form Pesanan Custom (`#inquiry`)
- **Field Input:** Input pill berbentuk oval utuh `rounded-full` warna semi-transparan `bg-white/50 border-[#DED8CF]`.
- **Fokus Input:** Efek pendaran lembut hijau lumut `focus-visible:ring-2 ring-[#5D7052]/30 ring-offset-2`.
- **Tombol Submit:** Pill `rounded-full bg-[#5D7052] text-[#F3F4F1] hover:scale-105` dengan bayangan lembut berwarna tanah.

---

## 4. PANDUAN EKSEKUSI TEKNIS UNTUK DEVELOPER

1. **Struktur Token Terpusat (`/lib/tokens.ts`):**
   Gunakan variabel CSS atau objek Tailwind config untuk mengisolasi setiap style variant, sehingga pergantian tema dapat dilakukan via `data-theme` attribute pada elemen HTML utama (`<html data-theme="material-you">` atau `data-theme="academia"`).

2. **Penggunaan Font Google:**
   - **Material You:** `Roboto`
   - **Academia:** `Cormorant Garamond`, `Crimson Pro`, `Cinzel`
   - **Hand-Drawn:** `Kalam`, `Patrick Hand`
   - **Organic:** `Fraunces`, `Nunito`

3. **Aturan Transisi & Animasi:**
   - Jangan mencampur durasi animasi secara acak. Ikuti ritme masing-masing style (Material You: `300ms cubic-bezier(0.2,0,0,1)`, Academia: `500-700ms ease-out`, Hand-Drawn: `100-150ms fast rotate`, Organic: `300-500ms soft scale`).