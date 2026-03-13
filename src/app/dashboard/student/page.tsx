"use client";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Brain, Calendar, Flame, Target, TrendingUp, BookHeart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function StudentDashboard() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <DashboardLayout role="student">
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Halo, <span className="text-gradient">Budi!</span> 👋</h1>
            <p className="text-muted-foreground mt-2 text-lg">Bagaimana perasaanmu hari ini? Luangkan waktu sejenak untuk dirimu.</p>
          </div>
          <Link href="/dashboard/student/tracker">
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center space-x-2"
            >
              <Brain className="w-5 h-5" />
              <span>Catat Mood Hari Ini</span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Brain className="w-16 h-16" />
            </div>
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Mood Hari Ini</h3>
              <div className="p-2 bg-primary/10 rounded-lg"><Brain className="h-4 w-4 text-primary" /></div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-foreground">Kosong</div>
              <p className="text-sm font-medium mt-1 text-primary flex items-center cursor-pointer hover:underline">
                Isi tracker sekarang <TrendingUp className="w-3 h-3 ml-1" />
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Flame className="w-16 h-16 text-orange-500" />
            </div>
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Streak Check-in</h3>
              <div className="p-2 bg-orange-500/10 rounded-lg"><Flame className="h-4 w-4 text-orange-500" /></div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-foreground">5 Hari</div>
              <p className="text-sm font-medium mt-1 text-muted-foreground">🔥 Luar biasa! Pertahankan.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <BookHeart className="w-16 h-16 text-secondary" />
            </div>
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Artikel Dibaca</h3>
              <div className="p-2 bg-secondary/10 rounded-lg"><Target className="h-4 w-4 text-secondary" /></div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-foreground">12</div>
              <p className="text-sm font-medium mt-1 text-emerald-500">+2 minggu ini</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Calendar className="w-16 h-16" />
            </div>
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Jadwal Terdekat</h3>
              <div className="p-2 bg-muted rounded-lg"><Calendar className="h-4 w-4 text-muted-foreground" /></div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-foreground">-</div>
              <p className="text-sm font-medium mt-1 text-muted-foreground">Tidak ada sesi konseling</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Mock Charts & Spaces */}
        <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 pt-4 border-t border-border/50">
          <motion.div variants={itemVariants} className="col-span-4 glass-panel p-6 min-h-[350px] flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-lg">Grafik Mood Mingguan</h3>
                <p className="text-sm text-muted-foreground">Ringkasan perasaanmu 7 hari terakhir.</p>
              </div>
              <div className="px-3 py-1 bg-background/50 rounded-full text-xs font-semibold border border-white/10">Minggu Ini</div>
            </div>
            <div className="flex-1 flex items-end justify-between px-2 pb-2 gap-2 mt-auto">
              {[40, 70, 45, 90, 65, 30, 85].map((height, i) => (
                <div key={i} className="flex flex-col items-center w-full group">
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: 0.5 + (i * 0.1), duration: 0.8, type: "spring" }}
                    className={`w-full max-w-[40px] rounded-t-lg bg-gradient-to-t ${height > 60 ? 'from-primary/40 to-primary' : height > 40 ? 'from-secondary/40 to-secondary' : 'from-orange-400/40 to-orange-400'} group-hover:brightness-110 transition-all cursor-pointer border border-white/10 shadow-sm`} 
                  />
                  <span className="text-xs font-medium text-muted-foreground mt-3">
                    {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-3 glass-panel p-0 relative overflow-hidden flex flex-col group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="h-40 bg-gradient-to-br from-secondary via-primary to-accent-foreground p-6 flex flex-col justify-end text-white relative">
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              <h3 className="font-bold text-2xl drop-shadow-md z-10">Ruang Tenang 🌿</h3>
              <p className="text-sm text-white/90 z-10 mt-1">Tips kesehatan mental harianmu.</p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center space-y-4">
              <p className="text-foreground leading-relaxed italic border-l-4 border-primary pl-4 py-2 font-medium">
                "Tidak apa-apa untuk tidak merasa baik-baik saja hari ini. Ambil napas dalam-dalam, dan lakukan satu hal kecil yang membuatmu bahagia."
              </p>
              <button className="w-full py-3 rounded-xl bg-secondary/10 text-secondary font-bold hover:bg-secondary/20 transition-colors mt-auto flex items-center justify-center">
                <BookHeart className="w-4 h-4 mr-2" />
                Lihat Semua Tips
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
