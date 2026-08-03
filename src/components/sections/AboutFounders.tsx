import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { MOCK_FOUNDERS } from '@/mock/data';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const AboutFounders: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Tentang Kami & Founder
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Di Balik Kepemimpinan MANYAR HARDBOX
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
            Dikelola oleh kombinasi teknolog percetakan, pakar material kemasan, dan desainer pola dieline 3D berpengalaman.
          </p>
        </motion.div>

        {/* 3 Founders Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {MOCK_FOUNDERS.map((founder) => (
            <motion.div key={founder.id} variants={fadeUp}>
              <Card variant="surface" className="h-full flex flex-col items-center text-center p-8">
                
                {/* Organic Avatar Frame */}
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 p-1 bg-gradient-to-tr from-primary to-secondary shadow-soft">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                  {founder.name}
                </h3>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
                  {founder.role}
                </span>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>

                <div className="mt-auto w-full pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                    <Award className="w-4 h-4 text-secondary shrink-0" />
                    <span className="truncate max-w-[180px]">{founder.specialization}</span>
                  </div>

                  <a
                    href={founder.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 transition-colors"
                    aria-label={`LinkedIn ${founder.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
