"use client";

export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, ArrowLeft, Mail, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Login() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const role = searchParams.get("role") || "student";
  const [isLoading, setIsLoading] = useState(false);
  
  const roleDisplay = {
    student: { title: "Portal Siswa", desc: "Masuk untuk mencatat jurnal harian dan materi mental.", color: "text-primary", bg: "bg-primary/10" },
    counselor: { title: "Portal Guru BK", desc: "Masuk untuk memantau data analitik dan jadwal konseling.", color: "text-secondary", bg: "bg-secondary/10" },
    admin: { title: "Portal Admin", desc: "Masuk untuk konfigurasi sistem dan manajemen akses.", color: "text-destructive", bg: "bg-destructive/10" }
  }[role] || { title: "Login", desc: "Masuk ke portal MindGuard.", color: "text-primary", bg: "bg-primary/10" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Submit timeout simulasi
    setTimeout(() => {
      router.push(`/dashboard/${role}`);
    }, 1200);
  };

  return (
    <main className="min-h-screen flex bg-background relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[150px] mix-blend-multiply" />

      {/* Kontainer Form Kiri */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${roleDisplay.bg} mb-6`}>
              <Brain className={`w-6 h-6 ${roleDisplay.color}`} />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Selamat Datang Kembali!</h1>
            <p className="text-muted-foreground">{roleDisplay.desc}</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email atau ID Pengguna</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input type="text" placeholder="Masukkan ID anda" className="pl-10 h-12 bg-background/50 border-muted focus-visible:ring-primary backdrop-blur-sm" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold">Kata Sandi</label>
                <Link href="#" className={`text-sm font-medium ${roleDisplay.color} hover:underline`}>Lupa sandi?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input type="password" placeholder="••••••••" className="pl-10 h-12 bg-background/50 border-muted focus-visible:ring-primary backdrop-blur-sm" required />
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full h-12 text-md mt-4 shadow-lg hover:shadow-xl transition-all" size="lg">
              {isLoading ? "Masuk..." : "Masuk Sekarang"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Belum punya akun? <Link href="#" className={`font-semibold ${roleDisplay.color} hover:underline`}>Hubungi Admin Sekolah</Link>
          </div>
        </motion.div>
      </div>

      {/* Visual Kanan - Hidden on Mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative p-12 items-center justify-center">
        <div className="absolute inset-4 bg-gradient-to-br from-primary/20 via-background to-secondary/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Animated Blobs inside Glass Panel */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[80px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] bg-secondary/30 rounded-full blur-[100px]"
          />
          
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
              className="glass-panel p-8 max-w-sm mb-8 relative"
            >
              <div className="absolute -top-6 -left-6 bg-background rounded-full p-3 shadow-lg border border-border">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Sistem Cerdas & Aman</h3>
              <p className="text-muted-foreground text-sm">MindGuard mengenkripsi secara ketat seluruh pencatatan jurnal emosional agar privasi siswa selalu terjaga sepenuhnya.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
