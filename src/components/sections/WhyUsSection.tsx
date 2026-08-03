import React from 'react';
import { motion } from 'framer-motion';
import { Palette, BoxSelect, ShieldCheck, Factory } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: 'Akurasi Warna & Presisi High-Res',
      description: 'Menggunakan mesin cetak German Offset (Heidelberg) & Digital Press terkini dengan kalibrasi Pantone 99.2% akurat.',
      badge: 'Mesin Heidelberg Offset'
    },
    {
      icon: <BoxSelect className="w-8 h-8 text-secondary" />,
      title: 'Sample Mockup Fisik Gratis',
      description: 'Bebas khawatir salah spesifikasi. Kami sediakan dummy cetak fisik 1:1 untuk Anda setujui sebelum tahap produksi masal.',
      badge: 'Free Physical Proofing'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Material Food Grade & Halal',
      description: 'Jaminan keamanan kontak langsung dengan makanan & minuman (Sertifikat FDA, Greaseproof, & Halal Compliance).',
      badge: 'Sertifikasi FDA & Halal'
    },
    {
      icon: <Factory className="w-8 h-8 text-secondary" />,
      title: 'Kapasitas Produksi Pabrik Masal',
      description: 'Mampu menangani pesanan dari 500 pcs (batch uji coba) hingga jutaan pcs/bulan dengan jaminan deadline tepat waktu.',
      badge: '5+ Juta Pcs / Bulan'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Keunggulan Percetakan
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Mengapa Ratusan Brand Memilih Bermitra Dengan Kami?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
            Komitmen mutlak pada standar kualitas tinggi, ketepatan waktu pengiriman, dan efisiensi biaya kemasan Anda.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <Card variant="surface" className="h-full flex flex-col justify-between p-8 border-border/80">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-muted/80 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest bg-accent/50 px-3 py-1 rounded-full">
                    {pillar.badge}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mt-4 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
