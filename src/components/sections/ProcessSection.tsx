import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Printer, Truck } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Konsultasi & Dimensi',
      desc: 'Pembahasan dimensi produk (PxLxT mm), jenis material kemasan, finishing, dan estimasi anggaran.',
      icon: <MessageSquare className="w-6 h-6 text-primary" />
    },
    {
      num: '02',
      title: 'Dieline & Sample Proofing',
      desc: 'Pembuatan pola potong gratis dan pengiriman sampel mockup fisik 1:1 ke alamat Anda untuk persetujuan.',
      icon: <Ruler className="w-6 h-6 text-secondary" />
    },
    {
      num: '03',
      title: 'Cetak Masal & Strict QC',
      desc: 'Proses cetak mesin presisi tinggi, cutting, laminasi, serta sortir Quality Control (QC) ketat tanpa cacat.',
      icon: <Printer className="w-6 h-6 text-primary" />
    },
    {
      num: '04',
      title: 'Safe Packing & Shipping',
      desc: 'Pengemasan rapi anti-air dan pengiriman tepat waktu langsung ke gudang/pabrik Anda seluruh Indonesia.',
      icon: <Truck className="w-6 h-6 text-secondary" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-accent/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Alur Produksi Transparan
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            4 Langkah Mudah Pesanan Custom
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
            Alur kerja yang simpel dan terstruktur dari konsep sketsa hingga produk kemasan siap pakai di tangan Anda.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUp} className="relative z-10">
              <div className="p-8 rounded-[2.5rem] bg-surface border border-border/80 shadow-soft h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="font-display font-extrabold text-3xl text-primary/30">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
