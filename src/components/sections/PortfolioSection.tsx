import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { MOCK_PORTFOLIO } from '@/mock/data';
import { PortfolioItem, PackagingCategory } from '@/types';
import { fadeUp } from '@/lib/animations';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    'Semua',
    'Rigid Box / Hardbox',
    'Folding Box / Dus Karton',
    'Flexible Packaging / Standing Pouch',
    'Label Sticker & Sleeve',
    'Eco-Friendly Packaging'
  ];

  const filteredItems = activeCategory === 'Semua'
    ? MOCK_PORTFOLIO
    : MOCK_PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-white/20 px-4 py-1.5 rounded-full inline-block mb-3 backdrop-blur-sm">
            Showroom Hasil Cetak
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Karya Terpilih & Portofolio Kemasan
          </h2>
          <p className="text-white/85 text-base sm:text-lg mt-4 leading-relaxed">
            Eksplorasi ragam karya kemasan buatan pabrik MANYAR HARDBOX untuk berbagai segmen industri brand ternama.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-secondary shadow-soft-lg scale-105'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card variant="surface" className="h-full flex flex-col justify-between p-4 sm:p-5 group">
                  <div>
                    {/* Thumbnail Container */}
                    <div className="overflow-hidden rounded-[1.75rem] aspect-[4/3] relative mb-5">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-foreground/80 backdrop-blur-md text-white text-[11px] font-bold">
                        {item.category}
                      </span>
                    </div>

                    {/* Impact Metric Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{item.impactMetric}</span>
                    </div>

                    {/* Title & Short Summary */}
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {item.shortSummary}
                    </p>

                    {/* Finishing Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.finishingTech.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-full bg-accent/50 text-accent-foreground text-[11px] font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trigger Detail Modal */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => setSelectedItem(item)}
                  >
                    <span>Detail Spesifikasi Kemasan</span>
                    <Layers className="w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Item Case Study Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
      >
        {selectedItem && (
          <div className="space-y-6">
            <div className="rounded-[1.75rem] overflow-hidden aspect-[16/9] relative">
              <img
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold">
                Klien: {selectedItem.client}
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-bold">
                {selectedItem.category}
              </span>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">Spesifikasi Material & Finishing</h4>
              <p className="text-muted-foreground text-sm leading-relaxed p-4 rounded-2xl bg-muted/50 border border-border/60">
                {selectedItem.materialSpecs}
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">Teknologi Pengerjaan</h4>
              <div className="flex flex-wrap gap-2">
                {selectedItem.finishingTech.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-accent text-accent-foreground text-xs font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedItem.liveUrl && (
              <div className="pt-4 border-t border-border flex justify-end">
                <a href={selectedItem.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm">
                    <span>Kunjungi Website Klien</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};
