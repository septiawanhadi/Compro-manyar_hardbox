import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PackageCheck, Boxes, Layers, Tag, Leaf, Ruler, Check, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { MOCK_SERVICES } from '@/mock/data';
import { ServiceItem } from '@/types';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck': return <PackageCheck className="w-7 h-7 text-primary" />;
      case 'Boxes': return <Boxes className="w-7 h-7 text-primary" />;
      case 'Layers': return <Layers className="w-7 h-7 text-primary" />;
      case 'Tag': return <Tag className="w-7 h-7 text-primary" />;
      case 'Leaf': return <Leaf className="w-7 h-7 text-primary" />;
      case 'Ruler': return <Ruler className="w-7 h-7 text-primary" />;
      default: return <PackageCheck className="w-7 h-7 text-primary" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Layanan & Produk Percetakan
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Solusi Packaging Custom Presisi
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
            Pilihan bahan, teknik cetak, dan konstruksi kemasan yang dirancang khusus untuk meningkatkan nilai jual dan perlindungan produk Anda.
          </p>
        </motion.div>

        {/* 6 Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MOCK_SERVICES.map((service, index) => (
            <motion.div key={service.id} variants={fadeUp}>
              <Card
                variant={index % 2 === 0 ? 'asymmetric' : 'default'}
                className="h-full flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title & Category */}
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mt-1 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Deliverable Checkmarks */}
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detail Action */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover group/btn mt-4 pt-4 border-t border-border/40"
                >
                  <span>Pelajari Spesifikasi Detail</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        {selectedService && (
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-bold">
              Kategori: {selectedService.category}
            </span>

            <div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">Deskripsi Produk & Material</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedService.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg text-foreground mb-3">Fitur & Spesifikasi Standard</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-2xl bg-muted/50 border border-border/60 text-sm font-semibold text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border flex justify-end">
              <Button variant="primary" size="md" onClick={() => setSelectedService(null)} className="w-full sm:w-auto">
                Tutup
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
