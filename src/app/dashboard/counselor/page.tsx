"use client";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Users, AlertTriangle, BookOpen, Clock, ArrowRight, Activity, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CounselorDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const alerts = [
    { name: "Andi Saputra", class: "X-1", risk: "Tinggi", score: "8/10", time: "10 menit yang lalu" },
    { name: "Siti Aminah", class: "X-2", risk: "Tinggi", score: "7.5/10", time: "1 jam yang lalu" },
    { name: "Budi Santoso", class: "XI-IPA", risk: "Sedang", score: "5/10", time: "3 jam yang lalu" },
  ];

  return (
    <DashboardLayout role="counselor">
      <motion.div 
        className="space-y-6 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 relative z-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Overview <span className="text-gradient">Guru BK</span> 📊</h1>
            <p className="text-muted-foreground mt-2 text-lg">Pantau kesejahteraan emosional seluruh siswa hari ini secara real-time.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="mt-4 md:mt-0 glass-panel px-4 py-2 border-primary/20 bg-primary/5 flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-primary">Sistem Monitoring Aktif</span>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users className="w-24 h-24" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Total Siswa Terdaftar</h3>
              <div className="p-2 bg-primary/10 rounded-lg"><Users className="h-4 w-4 text-primary" /></div>
            </div>
            <div className="mt-2">
              <div className="text-3xl font-extrabold text-foreground">324</div>
              <p className="text-sm font-medium mt-1 text-muted-foreground flex items-center">
                Terbagi dalam 12 Kelas
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group border-destructive/30 bg-destructive/5 shadow-destructive/10 cursor-pointer hover:bg-destructive/10 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-20 h-20 text-destructive" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-bold text-destructive">Perlu Perhatian Segera</h3>
              <div className="p-2 bg-destructive/20 rounded-lg animate-pulse"><AlertTriangle className="h-4 w-4 text-destructive" /></div>
            </div>
            <div className="mt-2">
              <div className="text-3xl font-extrabold text-destructive">7<span className="text-lg font-medium text-destructive/70 ml-1">Siswa</span></div>
              <p className="text-sm font-medium mt-1 text-destructive flex items-center">
                +2 dari minggu lalu <TrendingUp className="w-3 h-3 ml-1" />
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <BookOpen className="w-20 h-20 text-secondary" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Partisipasi Check-in</h3>
              <div className="p-2 bg-secondary/10 rounded-lg"><BookOpen className="h-4 w-4 text-secondary" /></div>
            </div>
            <div className="mt-2">
              <div className="text-3xl font-extrabold text-foreground">142</div>
              <p className="text-sm font-medium mt-1 text-secondary">43.8% partisipasi hari ini</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Clock className="w-20 h-20 text-orange-500" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Jadwal Sesi Mendatang</h3>
              <div className="p-2 bg-orange-500/10 rounded-lg"><Clock className="h-4 w-4 text-orange-500" /></div>
            </div>
            <div className="mt-2">
              <div className="text-3xl font-extrabold text-foreground">3</div>
              <p className="text-sm font-medium mt-1 text-orange-500">Tersisa untuk hari ini</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Mock Charts & Student Alert List */}
        <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 pt-4 border-t border-border/50">
          <motion.div variants={itemVariants} className="col-span-4 glass-panel p-6 min-h-[350px] flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-lg">Tren Mood Keseluruhan Sekolah</h3>
                <p className="text-sm text-muted-foreground">Distribusi perasaan siswa minggu ini.</p>
              </div>
              <div className="px-3 py-1 bg-background/50 rounded-full text-xs font-semibold border border-white/10 flex items-center text-primary">
                <Activity className="w-3 h-3 mr-1" /> Live
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center py-8">
               {/* Mockup Line/Area Chart using CSS & Framer Motion for UI demo */}
               <div className="w-full h-full max-h-48 relative flex items-end justify-between px-4">
                  <div className="absolute inset-0 border-b border-l border-white/10 pointer-events-none z-0"></div>
                  {/* Decorative curved SVG line */}
                  <svg className="absolute inset-0 w-full h-full z-10 overflow-visible" preserveAspectRatio="none">
                    <motion.path 
                      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M0,150 Q50,50 100,100 T200,80 T300,120 T400,60 T500,40" 
                      fill="none" stroke="currentColor" strokeWidth="3" className="text-primary drop-shadow-[0_5px_5px_rgba(var(--primary),0.3)]"
                    />
                  </svg>
                  {/* Mock data points */}
                  <div className="w-full flex justify-between px-2 pb-2 relative z-20 text-xs text-muted-foreground font-medium mt-auto -mb-6">
                    <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-3 glass-panel p-0 relative overflow-hidden flex flex-col">
            <div className="p-6 bg-gradient-to-br from-destructive/10 to-transparent border-b border-destructive/10 flex justify-between items-center">
               <div>
                  <h3 className="font-bold text-lg text-foreground flex items-center">
                    <AlertTriangle className="w-5 h-5 text-destructive mr-2" /> 
                    Daftar Peringatan Dini
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">Siswa yang perlu penanganan segera.</p>
               </div>
            </div>
            <div className="flex-1 p-0 overflow-y-auto">
              <ul className="divide-y divide-border/50">
                {alerts.map((student, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.1) }}
                    key={i} className="p-4 hover:bg-muted/30 transition-colors cursor-pointer group w-full"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{student.name} <span className="text-sm font-normal text-muted-foreground ml-1">({student.class})</span></h4>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center"><Clock className="w-3 h-3 mr-1"/> {student.time}</p>
                      </div>
                      <div className="text-right">
                        <span className={cn(
                          "px-2 py-1 text-xs font-bold rounded-md",
                          student.risk === "Tinggi" ? "bg-destructive/20 text-destructive" : "bg-orange-500/20 text-orange-500"
                        )}>
                          Resiko {student.risk}
                        </span>
                        <p className="text-xs font-semibold text-muted-foreground mt-2">Skor: {student.score}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-border/50 bg-muted/10">
              <Link href="/dashboard/counselor/alerts" className="flex items-center justify-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Lihat Semua Peringatan <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
