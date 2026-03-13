"use client"
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const moodScale = [
  { value: 1, emoji: "😢", label: "Sangat Buruk", color: "from-red-500/20 to-red-600/20 text-red-500 border-red-500/30" },
  { value: 2, emoji: "😞", label: "Buruk", color: "from-orange-500/20 to-orange-600/20 text-orange-500 border-orange-500/30" },
  { value: 3, emoji: "😐", label: "Biasa Saja", color: "from-yellow-500/20 to-yellow-600/20 text-yellow-500 border-yellow-500/30" },
  { value: 4, emoji: "🙂", label: "Baik", color: "from-emerald-500/20 to-emerald-600/20 text-emerald-500 border-emerald-500/30" },
  { value: 5, emoji: "🤩", label: "Sangat Baik", color: "from-primary/20 to-secondary/20 text-primary border-primary/30" },
];

export default function DailyMoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMood) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  return (
    <DashboardLayout role="student">
      <div className="max-w-4xl mx-auto space-y-8 mt-4 relative">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4 shadow-inner">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Jurnal <span className="text-gradient">Perasaanmu</span></h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Ruang aman untuk mencatat emosi harianmu. Tidak ada penilaian, hanya kamu dan ruang tenangmu.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel p-12 text-center max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent"></div>
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                className="rounded-full bg-emerald-500/20 p-6 shadow-lg shadow-emerald-500/20 relative z-10"
              >
                <CheckCircle2 className="w-20 h-20 text-emerald-500" />
              </motion.div>
              <div className="relative z-10 space-y-2">
                <h2 className="text-3xl font-bold text-foreground">Terima Kasih, Budi!</h2>
                <p className="text-muted-foreground text-lg">Mencatat perasaan adalah langkah pertama yang hebat untuk memahami dan menyayangi diri sendiri.</p>
              </div>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8 relative z-10 border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors">
                Catat Mood Baru
              </Button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="glass-panel overflow-hidden border-border/50 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-muted/20 pointer-events-none"></div>
              
              <div className="p-8 md:p-12 relative z-10">
                <h3 className="text-2xl font-bold text-center mb-10">Bagaimana perasaanmu saat ini?</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
                  {moodScale.map((mood, index) => {
                    const isSelected = selectedMood === mood.value;
                    return (
                      <motion.button
                        key={mood.value} type="button" onClick={() => setSelectedMood(mood.value)}
                        whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                        className={cn(
                          "flex flex-col items-center justify-center p-6 rounded-3xl transition-all duration-300 border-2 bg-gradient-to-b relative overflow-hidden group",
                          isSelected ? mood.color : "border-transparent bg-background/50 hover:bg-background/80",
                          isSelected && "shadow-xl shadow-current/20 scale-105"
                        )}
                      >
                        {isSelected && <motion.div layoutId="mood-active" className="absolute inset-0 border-2 border-current rounded-3xl" />}
                        <span className={cn(
                          "text-6xl md:text-7xl mb-4 filter transition-all duration-500",
                          isSelected ? "grayscale-0 scale-110" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                        )}>
                          {mood.emoji}
                        </span>
                        <span className={cn(
                          "text-sm font-bold tracking-wide transition-colors",
                          isSelected ? "text-current" : "text-muted-foreground group-hover:text-foreground"
                        )}>
                          {mood.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="space-y-4 pt-8 border-t border-border/50 relative">
                  <div className="flex justify-between items-end">
                    <label htmlFor="notes" className="text-lg font-bold text-foreground">Curahkan Pikiranmu <span className="text-muted-foreground font-normal text-sm ml-2">(Opsional)</span></label>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                    <textarea
                      id="notes" value={note} onChange={(e) => setNote(e.target.value)}
                      placeholder="Apa yang membuatmu merasa seperti ini hari ini? Jangan ragu untuk menulis panjang lebar..."
                      className="relative w-full min-h-[160px] rounded-2xl border border-white/10 bg-background/60 backdrop-blur-md px-6 py-5 text-base shadow-inner placeholder:text-muted-foreground/60 focus-visible:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y"
                    />
                  </div>
                  <p className="text-sm text-primary/80 font-medium">✨ Jurnal ini dienkripsi sepenuhnya. Privasimu selalu aman di MindGuard.</p>
                </motion.div>
              </div>

              <div className="p-6 md:px-12 md:py-8 bg-muted/20 border-t border-border/50 flex justify-end relative z-10">
                <motion.button 
                  type="submit" disabled={!selectedMood || isSubmitting}
                  whileHover={selectedMood && !isSubmitting ? { scale: 1.02 } : {}} whileTap={selectedMood && !isSubmitting ? { scale: 0.98 } : {}}
                  className={cn(
                    "px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 w-full md:w-auto min-w-[200px]",
                    selectedMood 
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40" 
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <>
                      <span>Simpan Jurnal</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
