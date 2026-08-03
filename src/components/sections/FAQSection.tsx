import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { MOCK_FAQS } from '@/mock/data';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Pusat Informasi
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
            Jawaban lengkap seputar MOQ, sampel proofing fisik, waktu produksi, hingga garansi cetak ulang.
          </p>
        </motion.div>

        {/* Accordions */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {MOCK_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div key={faq.id} variants={fadeUp}>
                <div
                  className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-surface border-primary/40 shadow-soft'
                      : 'bg-muted/40 border-border/60 hover:bg-muted/70'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                      <h3 className="font-display font-bold text-lg sm:text-xl text-foreground">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'text-foreground/70'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-8 sm:px-8 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border/40 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
