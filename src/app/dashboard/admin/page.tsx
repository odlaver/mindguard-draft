"use client";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Database, Settings, ShieldAlert, Users, ServerCog, Activity, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const serverLogs = [
    { user: "Admin_1", action: "Login Sistem", time: "10:45 AM", status: "success" },
    { user: "System", action: "Auto Backup Database", time: "02:00 AM", status: "success" },
    { user: "Guru_7", action: "Gagal Login (Password Salah)", time: "Kemarin, 14:30", status: "error" },
    { user: "Admin_2", action: "Tambah 45 Akun Siswa Baru", time: "Kemarin, 09:15", status: "success" },
  ];

  return (
    <DashboardLayout role="admin">
      <motion.div 
        className="space-y-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 relative z-10">
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-2xl mb-4 shadow-inner">
              <ServerCog className="w-6 h-6 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Sistem <span className="text-secondary">Administrator</span>
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">Pusat kendali operasional, infrastruktur, dan keamanan data MindGuard.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="mt-4 md:mt-0 glass-panel px-4 py-3 border-emerald-500/20 bg-emerald-500/5 flex items-center space-x-3 cursor-pointer">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Status Server</p>
              <p className="text-sm font-bold text-foreground">Online Mulus</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group border-t-4 border-t-primary">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users className="w-24 h-24" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Total Pengguna</h3>
              <div className="p-2 bg-primary/10 rounded-lg"><Users className="h-4 w-4 text-primary" /></div>
            </div>
            <div className="mt-2 relative z-10">
              <div className="text-3xl font-extrabold text-foreground">342</div>
              <p className="text-xs font-medium mt-2 text-muted-foreground">Siswa: 324 | Guru BK: 15 | Admin: 3</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group border-t-4 border-t-emerald-500">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Database className="w-24 h-24" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Ruang Penyimpanan</h3>
              <div className="p-2 bg-emerald-500/10 rounded-lg"><HardDrive className="h-4 w-4 text-emerald-500" /></div>
            </div>
            <div className="mt-2 relative z-10">
              <div className="text-3xl font-extrabold text-foreground">452<span className="text-lg text-muted-foreground ml-1">MB</span></div>
              <div className="w-full bg-muted mt-3 h-1.5 rounded-full overflow-hidden">
                 <div className="bg-emerald-500 h-full w-[45%]" />
              </div>
              <p className="text-xs font-medium mt-2 text-emerald-600 dark:text-emerald-400">Sistem Berjalan Optimum</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group border-t-4 border-t-destructive">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldAlert className="w-24 h-24" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Alerts Intervensi</h3>
              <div className="p-2 bg-destructive/10 rounded-lg"><ShieldAlert className="h-4 w-4 text-destructive" /></div>
            </div>
            <div className="mt-2 relative z-10">
              <div className="text-3xl font-extrabold text-foreground">12</div>
              <p className="text-sm font-medium mt-1 text-destructive">7 Alert baru hari ini</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-6 relative overflow-hidden group border-t-4 border-t-blue-500">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Settings className="w-24 h-24" />
            </div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">System Uptime</h3>
              <div className="p-2 bg-blue-500/10 rounded-lg"><Activity className="h-4 w-4 text-blue-500" /></div>
            </div>
            <div className="mt-2 relative z-10">
              <div className="text-3xl font-extrabold text-foreground">99.9%</div>
              <p className="text-sm font-medium mt-1 text-blue-500">Statistik 1 bulan terakhir</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Mock Data Views */}
        <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 pt-4">
          <motion.div variants={itemVariants} className="col-span-4 glass-panel p-6 min-h-[350px] relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-lg">Gelombang Traffic Sistem</h3>
                <p className="text-sm text-muted-foreground">Waktu akses puncak harian.</p>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center py-4 relative">
                {/* Visual Placeholder for Traffic Chart */}
                <div className="w-full h-40 flex items-end justify-between px-2 gap-1 border-b border-border">
                  {[30, 45, 20, 80, 100, 60, 40, 25, 10, 5, 15, 30].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="w-full bg-primary/40 rounded-t-sm hover:bg-primary transition-colors cursor-pointer"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + (i * 0.05), duration: 1 }}
                    />
                  ))}
                </div>
                {/* Labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-[10px] text-muted-foreground transform translate-y-6">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-3 glass-panel p-6 relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg flex items-center">
                <Database className="w-5 h-5 mr-2 text-secondary" /> 
                Aktivitas Server Log
              </h3>
            </div>
            
            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
               {serverLogs.map((log, index) => (
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + (index * 0.1) }}
                    key={index} className="flex items-start justify-between border-b border-white/5 pb-3 group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{log.user}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{log.action}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{log.time}</span>
                      {log.status === "error" ? (
                        <p className="text-[10px] font-bold text-destructive mt-1 text-right block">Gagal</p>
                      ) : (
                        <p className="text-[10px] font-bold text-emerald-500 mt-1 text-right block">Sukses</p>
                      )}
                    </div>
                 </motion.div>
               ))}
            </div>
            <button className="w-full mt-4 py-2 text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
              Lihat Log Keseluruhan
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
