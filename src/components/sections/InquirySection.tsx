import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Clock, PackageCheck, FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PackagingCategory } from '@/types';
import { fadeUp } from '@/lib/animations';

const inquirySchema = z.object({
  clientName: z.string().min(3, 'Nama lengkap minimal 3 karakter'),
  companyName: z.string().min(2, 'Nama brand/perusahaan minimal 2 karakter'),
  email: z.string().email('Format alamat email tidak valid'),
  phoneNumber: z.string().min(10, 'Nomor WhatsApp minimal 10 digit'),
  orderType: z.array(z.string()).min(1, 'Pilih minimal 1 jenis pesanan packaging'),
  requestScale: z.string().min(1, 'Pilih jumlah request pesanan'),
  estimatedBudget: z.string().min(1, 'Pilih perkiraan anggaran'),
  projectNotes: z.string().min(15, 'Catatan proyek minimal 15 karakter (dimensi, finishing, dll.)'),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export const InquirySection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const packagingCategories: PackagingCategory[] = [
    'Rigid Box / Hardbox',
    'Folding Box / Dus Karton',
    'Flexible Packaging / Standing Pouch',
    'Label Sticker & Sleeve',
    'Eco-Friendly Packaging',
    'Custom Dieline & Prototyping',
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      clientName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      orderType: ['Folding Box / Dus Karton'],
      requestScale: '1.000 - 5.000 Pcs',
      estimatedBudget: 'Rp 10 Juta - Rp 25 Juta',
      projectNotes: '',
    },
  });

  const selectedOrderTypes = watch('orderType') || [];

  const handleCheckboxToggle = (cat: PackagingCategory) => {
    if (selectedOrderTypes.includes(cat)) {
      setValue(
        'orderType',
        selectedOrderTypes.filter((t) => t !== cat)
      );
    } else {
      setValue('orderType', [...selectedOrderTypes, cat]);
    }
  };

  const onSubmit = async (data: InquiryFormValues) => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Packaging Inquiry Form Submitted:', data);
    setIsSubmitted(true);
    toast.success('Pengajuan proyek berhasil terkirim!', {
      description: 'Tim percetakan kami akan menghubungi WhatsApp/Email Anda dalam <24 jam.',
    });
  };

  return (
    <section id="inquiry" className="py-24 bg-muted/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Mulai Diskusi Proyek
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Mulai Pesanan Custom Packaging Anda
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
            Isi formulir di bawah ini untuk mendapatkan penawaran harga transparan, sampel proofing fisik, dan konsultasi pola dieline gratis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Part A: Client Expectation Guide (Left Column) */}
          <motion.div {...fadeUp} className="lg:col-span-5 space-y-6">
            <Card variant="sand" className="p-8 border-border">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Apa Yang Dapat Anda Harapkan?
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground">Respons Cepat &lt;24 Jam</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                      Tim estimator kami akan menghubungi Anda dengan rincian SOW & biaya bahan paling efisien.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-1">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground">Sample Proofing Fisik 1:1</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                      Anda berhak menerima dummy fisik hasil cetak untuk menguji ukuran produk sebelum naik cetak masal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground">Kerjasama Kerahasiaan (NDA)</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                      Kerahasiaan pola kemasan & hak cipta brand Anda sepenuhnya dijamin aman oleh hukum.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-[2rem] bg-surface border border-border/80 text-center">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Ingin Konsultasi Cepat via WhatsApp?</p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20MANYAR%20HARDBOX,%20saya%20ingin%20konsultasi%20cetak%20packaging%20custom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                <span>Hubungi Tim Sales Hotline: +62 812-3456-7890</span>
              </a>
            </div>
          </motion.div>

          {/* Part B: Interactive Packaging Client Order Form (Right Column) */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <Card variant="surface" className="p-6 sm:p-10 border-border shadow-soft-lg">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-extrabold text-3xl text-foreground">
                    Pengajuan Proyek Terkumpul!
                  </h3>
                  <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
                    Terima kasih telah mempercayakan kebutuhan kemasan Anda. Tim kami akan segera meninjau spesifikasi dan menghubungi Anda dalam waktu kurang dari 24 jam.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setIsSubmitted(false);
                      reset();
                    }}
                  >
                    Kirim Pengajuan Baru
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* 1. Client Identity & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                        Nama Lengkap Klien / PIC <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('clientName')}
                        placeholder="cth. Budi Santoso"
                        className="w-full h-12 px-5 rounded-full bg-white/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.clientName && (
                        <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.clientName.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                        Nama Brand / Perusahaan <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('companyName')}
                        placeholder="cth. Kopi Ancala Roastery"
                        className="w-full h-12 px-5 rounded-full bg-white/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.companyName && (
                        <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.companyName.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 2. Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                        Alamat Email Resmi <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="budi@brandkopi.id"
                        className="w-full h-12 px-5 rounded-full bg-white/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                        Nomor WhatsApp Aktif <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register('phoneNumber')}
                        placeholder="081234567890"
                        className="w-full h-12 px-5 rounded-full bg-white/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phoneNumber.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Order Types (Multi-select Checkboxes) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                      Jenis Pesanan Packaging (Bisa Pilih Beberapa) <span className="text-destructive">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {packagingCategories.map((cat) => {
                        const isChecked = selectedOrderTypes.includes(cat);
                        return (
                          <div
                            key={cat}
                            onClick={() => handleCheckboxToggle(cat)}
                            className={`p-3.5 rounded-2xl border text-xs font-bold cursor-pointer transition-all flex items-center gap-3 ${
                              isChecked
                                ? 'bg-primary/10 border-primary text-primary shadow-soft'
                                : 'bg-white/40 border-border/70 text-foreground/70 hover:bg-white'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${isChecked ? 'bg-primary border-primary text-white' : 'border-border'}`}>
                              {isChecked && <CheckCircle2 className="w-3 h-3" />}
                            </div>
                            <span>{cat}</span>
                          </div>
                        );
                      })}
                    </div>
                    {errors.orderType && (
                      <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.orderType.message}</span>
                      </p>
                    )}
                  </div>

                  {/* 4. Request Scale & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                        Jumlah Request Pesanan (Pcs) <span className="text-destructive">*</span>
                      </label>
                      <select
                        {...register('requestScale')}
                        className="w-full h-12 px-5 rounded-full bg-white/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground"
                      >
                        <option value="500 - 1.000 Pcs (Skala Uji Coba / Launch)">500 - 1.000 Pcs (Skala Launch)</option>
                        <option value="1.000 - 5.000 Pcs">1.000 - 5.000 Pcs</option>
                        <option value="5.000 - 20.000 Pcs">5.000 - 20.000 Pcs</option>
                        <option value="20.000 - 100.000 Pcs">20.000 - 100.000 Pcs</option>
                        <option value="> 100.000 Pcs (Skala Pabrik / Industri)">&gt; 100.000 Pcs (Skala Pabrik)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                        Perkiraan Anggaran <span className="text-destructive">*</span>
                      </label>
                      <select
                        {...register('estimatedBudget')}
                        className="w-full h-12 px-5 rounded-full bg-white/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground"
                      >
                        <option value="< Rp 10 Juta">&lt; Rp 10 Juta</option>
                        <option value="Rp 10 Juta - Rp 25 Juta">Rp 10 Juta - Rp 25 Juta</option>
                        <option value="Rp 25 Juta - Rp 50 Juta">Rp 25 Juta - Rp 50 Juta</option>
                        <option value="Rp 50 Juta - Rp 100 Juta">Rp 50 Juta - Rp 100 Juta</option>
                        <option value="> Rp 100 Juta">&gt; Rp 100 Juta</option>
                      </select>
                    </div>
                  </div>

                  {/* 5. Project Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                      Catatan Spesifikasi Proyek <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      rows={4}
                      {...register('projectNotes')}
                      placeholder="Jelaskan dimensi produk (PxLxT mm), opsi finishing (Foil/Emboss/UV/Laminasi), target tanggal siap edar, atau link referensi kemasan..."
                      className="w-full p-4 rounded-3xl bg-white/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-foreground placeholder:text-muted-foreground resize-none"
                    />
                    {errors.projectNotes && (
                      <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectNotes.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Mengirim Pengajuan Proyek...</span>
                    ) : (
                      <>
                        <span>Kirim Pengajuan Proyek Packaging</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}

            </Card>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
