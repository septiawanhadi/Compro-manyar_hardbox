import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { fadeUp } from '@/lib/animations';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Organic Background Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-blob bg-primary/15 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-blob-alt bg-secondary/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div {...fadeUp} className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Eco Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/60 border border-border text-foreground text-xs sm:text-sm font-bold shadow-soft">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Pabrik Percetakan & Manufaktur Packaging Custom</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
              Mewujudkan <span className="text-primary underline decoration-secondary/60 decoration-wavy decoration-2">Packaging Produk</span> Premium & Ramah Lingkungan.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Dari Dus Karton Food-Grade, Hardbox Skincare Mewah, hingga Standing Pouch High-Barrier. Kami hadirkan standar cetak presisi tinggi dengan teknologi offset & digital printing mutakhir.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#inquiry">
                <Button variant="primary" size="lg">
                  <span>Konsultasikan Pesanan Packaging</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" size="lg">
                  Lihat Katalog Packaging
                </Button>
              </a>
            </div>

            {/* Trust Bullet Items */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Bebas Sample Mockup Fisik</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Food Grade FDA & Halal</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Akurasi Warna CMYK/Pantone</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Rotated Hero Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] p-3 bg-white border-4 border-white shadow-soft-lg transition-transform hover:rotate-0 duration-500">
              <div className="overflow-hidden rounded-[2rem] min-h-[340px] sm:min-h-[380px] relative bg-accent/20 flex items-center justify-center p-6 pb-28 sm:pb-24">
                <img
                  src="/logo-bawah.png"
                  alt="MANYAR HARDBOX Custom Packaging Showcase"
                  className="max-h-48 sm:max-h-64 w-auto object-contain transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating Highlight Sticker */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-border shadow-soft flex items-center justify-between">
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Garansi Mutu</p>
                    <p className="text-xs sm:text-sm font-extrabold text-foreground">Akurasi Warna 99.2% Presisi</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold shrink-0">
                    Cetak High-Speed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Metrics Counter Strip */}
        <motion.div
          {...fadeUp}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-[2.5rem] bg-surface border border-border/80 shadow-soft"
        >
          <div className="flex flex-col items-center text-center p-2">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-primary">10.000.000+</span>
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Pcs Kemasan Diproduksi</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">500+</span>
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Brand UMKM & Enterprise</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-primary">99.2%</span>
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Akurasi Presisi Warna</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">FDA & Halal</span>
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Sertifikasi Material Food Grade</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
