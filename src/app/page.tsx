"use client";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, ShieldCheck, ArrowRight, Activity, Users } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[150px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 flex flex-col items-center">
        
        {/* Navigation / Header */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-8 left-0 right-0 px-6 flex justify-between items-center w-full max-w-7xl mx-auto"
        >
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 p-2 rounded-xl border border-primary/20">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">Mind<span className="text-primary">Guard</span></span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Fitur</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Cara Kerja</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Tentang</span>
          </div>
          <div className="flex space-x-3">
            <Link href="/auth/login?role=student">
              <Button variant="ghost" className="font-semibold">Masuk</Button>
            </Link>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-8 mt-24 mb-16 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Versi 2.0 Kini Tersedia</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Jaga <span className="text-gradient">Kesehatan Mental</span> Siswa Lebih Awal.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Sistem peringatan dini (Early Warning System) cerdas yang membantu Guru BK mendeteksi potensi masalah emosional dan memberikan penanganan yang tepat waktu.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link href="/auth/login?role=student">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/25 rounded-2xl group transition-all duration-300 hover:scale-105">
                Mulai Perjalananmu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/auth/login?role=counselor">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto bg-background/50 backdrop-blur-sm rounded-2xl hover:bg-muted/50 transition-all duration-300">
                Akses Dashboard Guru
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Role Cards - Glassmorphism */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-20 pb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-primary/50 cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Activity className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Portal Siswa</h3>
            <p className="text-muted-foreground mb-6 line-clamp-2">Catat mood harian, baca materi edukasi, dan laporkan insiden secara anonim.</p>
            <div className="flex items-center text-primary font-medium group-hover:underline">
              Jelajahi Portal <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-secondary/50 cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Dashboard Guru BK</h3>
            <p className="text-muted-foreground mb-6 line-clamp-2">Pantau tren emosional seluruh siswa dan jadwalkan sesi konseling dengan mudah.</p>
            <div className="flex items-center text-secondary font-medium group-hover:underline">
              Pantau Siswa <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-destructive/50 cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Sistem Peringatan</h3>
            <p className="text-muted-foreground mb-6 line-clamp-2">Notifikasi real-time jika ada siswa yang terindikasi risiko tinggi segera ditindak.</p>
            <div className="flex items-center text-destructive font-medium group-hover:underline">
              Lihat Cara Kerja <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}
