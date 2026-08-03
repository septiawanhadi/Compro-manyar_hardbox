import { ServiceItem, PortfolioItem, FounderItem, FAQItem } from '@/types';

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Rigid Box & Hardbox Premium',
    category: 'Rigid Box / Hardbox',
    shortDescription: 'Dus keras mewah berbahan board tebal berlapis art paper untuk gift set, hampers & skincare.',
    fullDescription: 'Konstruksi kemasan kokoh dengan penutup magnet, sliding drawer, hinged lid, serta kustomisasi tray inner foam velvet untuk proteksi maksimal.',
    iconName: 'PackageCheck',
    deliverables: ['Board 2mm - 3mm Thick', 'Custom Inner Velvet/EVA Foam', 'Gold/Silver Foil Stamping', 'Magnet Lock Mechanism']
  },
  {
    id: 'srv-2',
    title: 'Folding Box & Dus Kemasan Custom',
    category: 'Folding Box / Dus Karton',
    shortDescription: 'Dus lipat karton Ivory, Duplex, & Eco Kraft untuk kosmetik, obat, & kuliner food-grade.',
    fullDescription: 'Cetak offset warna presisi dengan opsi cetak luar-dalam, window mika bening, serta laminasi water-resistant & greaseproof.',
    iconName: 'Boxes',
    deliverables: ['Kertas Ivory 300-350gsm', 'Window Mika Transparan', 'Laminasi Doff/Glossy', 'Food Grade Coating FDA']
  },
  {
    id: 'srv-3',
    title: 'Flexible Packaging & Standing Pouch',
    category: 'Flexible Packaging / Standing Pouch',
    shortDescription: 'Pouch kemasan bubuk, kopi, & cairan dengan zipper lock & material High-Barrier.',
    fullDescription: 'Lapisan Aluminium Foil / MetPET perlindungan dari udara, kelembaban, & sinar UV agar aroma dan kesegaran produk tahan lama.',
    iconName: 'Layers',
    deliverables: ['Material Alufoil / MetPET', 'Zipper Lock Klip Presisi', 'V-Cut Easy Tear Spot', 'Spout Cap Liquid Valve']
  },
  {
    id: 'srv-4',
    title: 'Label Sticker & Shrink Sleeve',
    category: 'Label Sticker & Sleeve',
    shortDescription: 'Label stiker botol, toples, & shrink wrap plastik melingkar 360 derajat.',
    fullDescription: 'Stiker vinyl waterproof, transparan bening, hologram anti-pemalsuan, serta shrink label botol presisi anti-luntur.',
    iconName: 'Tag',
    deliverables: ['Stiker Vinyl Waterproof', 'High-Gloss / Matte Varnish', 'Die-Cut Custom Shape', 'Shrink Sleeve Bottle Wrap']
  },
  {
    id: 'srv-5',
    title: 'Sustainable & Eco-Friendly Packaging',
    category: 'Eco-Friendly Packaging',
    shortDescription: 'Kemasan kertas daur ulang ramah lingkungan yang dapat terurai secara alami.',
    fullDescription: 'Solusi kemasan serat alami Kraft cokelat bersertifikasi FSC dengan tinta kedelai (Soy-based Ink) bebas bahan kimia berbahaya.',
    iconName: 'Leaf',
    deliverables: ['FSC Certified Recycled Paper', 'Soy-based Eco Ink', '100% Biodegradable Material', 'Unbleached Kraft Board']
  },
  {
    id: 'srv-6',
    title: 'Desain Pola Dieline & Prototipe Mockup',
    category: 'Custom Dieline & Prototyping',
    shortDescription: 'Pembuatan pola potong presisi & sampel fisik sebelum masuk tahap cetak masal.',
    fullDescription: 'Tim engineer packaging kami merancang pola 2D/3D gratis untuk memastikan dimensi produk Anda pas sempurna tanpa celah.',
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
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    impactMetric: 'Meningkatkan Sales 215% via Premium Unboxing',
    shortSummary: 'Hardbox magnetik berlapis kain beludru inner dengan cetak Gold Foil Embossed.',
    materialSpecs: 'Yellow Board 2.5mm + Art Paper 150gsm + Soft Touch Laminate',
    finishingTech: ['Gold Foil Stamping', 'Soft-Touch Matte', 'Custom Velvet Tray', 'Magnet Lock'],
    liveUrl: 'https://luxebotanicals.com'
  },
  {
    id: 'port-2',
    title: 'Kopi Gourmet Standing Pouch Zipper',
    client: 'Kopi Ancala Roastery',
    category: 'Flexible Packaging / Standing Pouch',
    thumbnail: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    impactMetric: 'Memperpanjang Shelf-Life Produk Hingga 18 Bulan',
    shortSummary: 'Standing pouch matt black dengan One-Way Degassing Valve & klip zipper presisi.',
    materialSpecs: 'PET / ALU / LLDPE High-Barrier 120 Micron',
    finishingTech: ['Degassing Valve', 'Zipper Lock', 'Matte Finish + Spot UV', 'Easy Tear V-Cut']
  },
  {
    id: 'port-3',
    title: 'Artisan Pastry Food-Grade Box',
    client: 'Maison de Patisserie',
    category: 'Folding Box / Dus Karton',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    impactMetric: 'Terjual 50.000+ Box Dalam Musim Hari Raya',
    shortSummary: 'Dus lipat Ivory food grade dengan window mika transparan cetak motif emas.',
    materialSpecs: 'Kertas Ivory Food Grade 350gsm (FDA Certified)',
    finishingTech: ['Window Mika PVC', 'Gold Hot Stamping', 'Greaseproof Coating', 'Die-Cut Handles']
  },
  {
    id: 'port-4',
    title: 'Mooncake Festival Rigid Box Set',
    client: 'Royal Heritage Hotel',
    category: 'Rigid Box / Hardbox',
    thumbnail: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    impactMetric: 'Sold Out dalam 2 Minggu Rilis',
    shortSummary: 'Kemasan eksklusif bertingkat 2 laci dengan pegangan pita satin dan ukiran laser.',
    materialSpecs: 'Rigid Board 3mm + Textured Fancy Paper + Gold Leaf',
    finishingTech: ['Laser Cutting', 'Satin Ribbon Handle', 'Embossed Pattern', 'Drawer Mechanism']
  },
  {
    id: 'port-5',
    title: 'Eco-Kraft Modular Electronics Box',
    client: 'Nexa Tech Accessories',
    category: 'Eco-Friendly Packaging',
    thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    impactMetric: '100% Recyclable Zero-Plastic Packaging',
    shortSummary: 'Dus kertas kraft cokelat tanpa plastik dengan pengunci lid tanpa lem tambahan.',
    materialSpecs: 'Recycled Kraft Board 400gsm (FSC Certified)',
    finishingTech: ['Soy-Based Black Ink', 'Locking Tab Structure', 'No-Glue Assembly', '100% Biodegradable']
  },
  {
    id: 'port-6',
    title: 'Herbal Drink Shrink Sleeve Label',
    client: 'Jamuderm Natural Drink',
    category: 'Label Sticker & Sleeve',
    thumbnail: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    impactMetric: 'Tampilan Botol 360° Menarik & Anti Air',
    shortSummary: 'Label plastik shrink melingkar penuh botol dengan perforasi mudah dibuka.',
    materialSpecs: 'PVC Shrink Film 45 Micron High Shrinkage',
    finishingTech: ['Rotogravure 8 Colors', 'Easy-Tear Perforation', 'Glossy Varnish', 'UV Light Resistance']
  }
];

export const MOCK_FOUNDERS: FounderItem[] = [
  {
    id: 'fnd-1',
    name: 'Septiawan Hadi',
    role: 'CEO & Master Printing Technologist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: '15+ tahun mengelola teknologi cetak offset & digital printing skala pabrik. Pelopor otomatisasi manajemen warna CMYK/Pantone presisi.',
    specialization: 'Offset & Digital Printing Systems, Color Management, Factory Operations',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'fnd-2',
    name: 'Amanda Putri',
    role: 'COO & Packaging Materials Specialist',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Pakar pengadaan material kertas FSC, flexible barrier film, serta sertifikasi food-grade internasional untuk kebutuhan ekspor.',
    specialization: 'Supply Chain, Sustainable Materials, Food Safety Compliance (FDA/Halal)',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'fnd-3',
    name: 'Reza Pratama',
    role: 'Head of Structural & Dieline Design',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Desainer arsitektur kemasan 3D yang telah menciptakan 1.000+ pola potong dieline efisien & unik untuk berbagai brand ternama.',
    specialization: 'Structural Dieline 3D, Unboxing Experience Design, Finishing Innovation',
    linkedInUrl: 'https://linkedin.com'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa Minimum Order Quantity (MOQ) cetak packaging di percetakan Anda?',
    answer: 'MOQ fleksibel sesuai jenis kemasan: Dus karton & Standing Pouch mulai dari 500 pcs. Hardbox Premium mulai dari 100 pcs. Untuk pesanan skala industri di atas 10.000 pcs tersedia diskon khusus harga pabrik.',
    category: 'MOQ'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya bisa memesan sampel/mockup cetak sebelum produksi masal?',
    answer: 'Tentu! Kami menyediakan layanan pemesanan sampel mockup fisik (dummy cetak 1:1) agar Anda bisa menguji ukuran, kekuatan bahan, dan presisi produk di dalam kemasan sebelum naik cetak masal.',
    category: 'Sample Proofing'
  },
  {
    id: 'faq-3',
    question: 'Berapa lama estimasi waktu produksi cetak masal?',
    answer: 'Rata-rata durasi pengerjaan cetak masal adalah 7-14 hari kerja setelah proofing sampel fisik disetujui. Untuk pesanan express / deadline mendesak dapat didiskusikan langsung dengan tim produksi kami.',
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
    answer: 'Kami memberikan Garansi Cetak Ulang 100% jika terjadi kesalahan cetak atau ketidaksesuaian spesifikasi yang signifikan dari sampel acuan yang telah Anda setujui.',
    category: 'Garansi'
  },
  {
    id: 'faq-6',
    question: 'Apakah tim Anda bisa membantu membuatkan pola dieline & desain grafis kemasan dari nol?',
    answer: 'Ya! Tim desainer struktur kami akan membuatkan pola dieline presisi secara gratis untuk setiap pesanan kemasan custom di tempat kami.',
    category: 'Desain Dieline'
  }
];
