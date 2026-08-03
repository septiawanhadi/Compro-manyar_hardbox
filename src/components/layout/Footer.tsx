import React from 'react';
import { Package, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/40 border-t border-border/80 pt-16 pb-12 mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <Package className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-foreground">
                MANYAR HARDBOX
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Produsen percetakan & manufaktur packaging produk custom terpercaya. Menghadirkan kemasan presisi tinggi, elegan, dan ramah lingkungan untuk pertumbuhan brand Anda.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-lg text-foreground mb-1">
              Navigasi Halaman
            </h4>
            <a href="#hero" className="text-muted-foreground hover:text-primary text-sm transition-colors">Perkenalan Perusahaan</a>
            <a href="#services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Produk & Layanan Kemasan</a>
            <a href="#why-us" className="text-muted-foreground hover:text-primary text-sm transition-colors">Keunggulan Percetakan</a>
            <a href="#process" className="text-muted-foreground hover:text-primary text-sm transition-colors">Alur Produksi 4 Langkah</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary text-sm transition-colors">Katalog & Showroom</a>
            <a href="#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">Tim & Para Founder</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">Pertanyaan Diajukan (FAQ)</a>
          </div>

          {/* Col 3: Produk Packaging */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-lg text-foreground mb-1">
              Kategori Kemasan
            </h4>
            <span className="text-muted-foreground text-sm">Rigid Box & Hardbox Premium</span>
            <span className="text-muted-foreground text-sm">Folding Box & Dus Karton Food Grade</span>
            <span className="text-muted-foreground text-sm">Flexible Standing Pouch Alufoil</span>
            <span className="text-muted-foreground text-sm">Label Sticker & Shrink Sleeve</span>
            <span className="text-muted-foreground text-sm">Sustainable Kraft Eco-Packaging</span>
            <span className="text-muted-foreground text-sm">Custom Dieline 3D & Sample Proofing</span>
          </div>

          {/* Col 4: Contact & Factory Address */}
          <div className="flex flex-col gap-3.5">
            <h4 className="font-display font-bold text-lg text-foreground mb-1">
              Pabrik & Kontak Official
            </h4>
            <div className="flex items-start gap-3 text-muted-foreground text-sm">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Kawasan Industri Percetakan Modern Blok B8 No. 12, Jakarta Barat, Indonesia</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+62 812-3456-7890 (WhatsApp Support)</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>halo@manyar-hardbox.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2026 MANYAR HARDBOX Packaging Industry. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-primary transition-colors">Sertifikasi Material</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
