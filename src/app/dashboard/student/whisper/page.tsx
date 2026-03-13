"use client"
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Send, Lock, AlertTriangle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function WhisperPortal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Timeout to simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <DashboardLayout role="student">
      <motion.div 
        className="max-w-4xl mx-auto space-y-8 mt-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center relative z-10 pt-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-destructive/20 rounded-full blur-[50px] -z-10" />
          <div className="inline-flex items-center justify-center p-4 bg-destructive/10 rounded-2xl mb-6 shadow-inner border border-destructive/20">
            <ShieldAlert className="w-8 h-8 text-destructive animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Whisper <span className="text-destructive">Portal</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ruang aman dan <span className="font-bold border-b border-destructive/50 text-foreground cursor-help" title="Identitas Anda dijamin dirahasiakan sepenuhnya">100% anonim</span> untuk melaporkan tindakan bullying, pelecehan, atau kekerasan di lingkungan sekolah.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
             <motion.div 
               key="success"
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
               className="glass-panel p-12 text-center max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6 relative overflow-hidden border-emerald-500/20"
             >
               <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent"></div>
               <motion.div 
                 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                 className="rounded-full bg-emerald-500/20 p-6 shadow-lg shadow-emerald-500/20 relative z-10"
               >
                 <ShieldAlert className="w-20 h-20 text-emerald-500" />
               </motion.div>
               <div className="relative z-10 space-y-2">
                 <h2 className="text-3xl font-bold text-foreground">Laporan Berhasil Terkirim</h2>
                 <p className="text-muted-foreground text-lg">Terima kasih atas keberanianmu. Guru BK akan segera meninjau laporan ini secara anonim untuk mengambil tindakan yang tepat tanpa mengungkap identitasmu.</p>
               </div>
               <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8 relative z-10 border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors">
                 Buat Laporan Baru
               </Button>
             </motion.div>
          ) : (
            <motion.form 
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="glass-panel overflow-hidden border-border/50 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-muted/20 pointer-events-none z-0"></div>
              
              <div className="p-6 bg-muted/30 border-b border-border/50 relative z-10 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-3 text-orange-500" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Detail Laporan Kejadian</h3>
                  <p className="text-sm text-muted-foreground mt-1">Ceritakan detail kejadian dengan jujur. Semua data dikirim melalui jalur terenkripsi.</p>
                </div>
              </div>

              <div className="p-8 md:p-10 relative z-10 space-y-8">
                
                <div className="space-y-3">
                  <label htmlFor="category" className="text-sm font-bold text-foreground flex items-center">Kategori Masalah <span className="text-destructive ml-1">*</span></label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                    <select 
                      id="category" 
                      required 
                      defaultValue=""
                      className="relative w-full h-12 rounded-xl border border-white/10 bg-background/60 backdrop-blur-md px-4 py-2 text-base shadow-inner focus-visible:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer appearance-none"
                    >
                      <option value="" disabled>Pilih kategori yang paling sesuai</option>
                      <option value="bullying" className="bg-background">Bullying (Perundungan Fisik/Verbal)</option>
                      <option value="cyber" className="bg-background">Cyberbullying (Dunia Maya)</option>
                      <option value="harassment" className="bg-background">Pelecehan Seksual</option>
                      <option value="pressure" className="bg-background">Tekanan Sosial / Pengancaman</option>
                      <option value="other" className="bg-background">Kekerasan Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="date" className="text-sm font-bold text-foreground flex items-center">Waktu Kejadian (Kira-kira) <span className="text-destructive ml-1">*</span></label>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                      <Input id="date" type="date" required className="relative h-12 rounded-xl border border-white/10 bg-background/60 backdrop-blur-md px-4 text-base focus-visible:ring-primary/50" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="location" className="text-sm font-bold text-foreground flex items-center">Lokasi Kejadian <span className="text-destructive ml-1">*</span></label>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                      <Input id="location" placeholder="Contoh: Kantin, Kelas X-1, Toilet..." required className="relative h-12 rounded-xl border border-white/10 bg-background/60 backdrop-blur-md px-4 text-base focus-visible:ring-primary/50" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="description" className="text-sm font-bold text-foreground flex items-center">Deskripsi Kejadian <span className="text-destructive ml-1">*</span></label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                    <textarea
                      id="description"
                      required
                      placeholder="Ceritakan apa yang terjadi secara rinci. Siapa saja yang terlibat? Apa yang dilakukan?"
                      className="relative w-full min-h-[160px] rounded-2xl border border-white/10 bg-background/60 backdrop-blur-md px-6 py-5 text-base shadow-inner placeholder:text-muted-foreground/60 focus-visible:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y"
                    />
                  </div>
                </div>

                <div className="space-y-3 p-6 bg-muted/20 border border-white/5 rounded-2xl">
                  <label htmlFor="evidence" className="text-sm font-bold text-foreground flex items-center">Bukti Lampiran (Opsional)</label>
                  <Input id="evidence" type="file" multiple className="cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30 align-middle h-14" />
                  <p className="text-xs font-medium flex items-center mt-2 text-muted-foreground"><Info className="w-3 h-3 mr-1"/> Unggah screenshot, foto, atau rekaman suara maksimum 10MB.</p>
                </div>

              </div>
              
              <div className="p-6 md:px-10 md:py-8 bg-muted/30 border-t border-border/50 flex flex-col-reverse md:flex-row justify-between items-center gap-6 relative z-10">
                <p className="text-xs font-medium text-muted-foreground/80 max-w-sm flex items-center text-center md:text-left">
                  <Lock className="w-4 h-4 mr-2 text-primary" />
                  Sistem kami menganonimkan data dan mengenkripsi laporan secara end-to-end dengan standar keamanan tinggi.
                </p>
                <motion.button 
                  type="submit" disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}} whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={cn(
                    "px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all w-full md:w-auto min-w-[200px] shadow-lg shadow-destructive/20 hover:shadow-destructive/40 text-white bg-destructive hover:bg-destructive/90",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <>
                      <span>Kirim Laporan</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </DashboardLayout>
  );
}
