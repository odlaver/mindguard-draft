"use client";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, ShieldAlert, ArrowRight, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AlertSystem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const alerts = [
    {
      id: 1,
      student: "Andi Saputra",
      class: "X-A",
      reason: "Mood level 1 (Sangat Buruk) selama 3 hari berturut-turut. Terdeteksi kata kunci 'lelah' pada jurnal.",
      time: "2 Jam yang lalu",
      severity: "high",
      status: "unread",
      color: "destructive"
    },
    {
      id: 2,
      student: "Rina Wati",
      class: "X-C",
      reason: "Melaporkan insiden perundungan verbal melalui Whisper Portal.",
      time: "5 Jam yang lalu",
      severity: "critical",
      status: "unread",
      color: "red-500"
    },
    {
      id: 3,
      student: "Joko Widodo",
      class: "X-B",
      reason: "Indikasi pola mood menurun secara drastis selama 2 minggu terakhir.",
      time: "Kemarin, 10:00",
      severity: "medium",
      status: "read",
      color: "orange-500"
    }
  ];

  return (
    <DashboardLayout role="counselor">
      <motion.div 
        className="space-y-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 relative z-10">
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-destructive/10 rounded-2xl mb-4 shadow-inner">
              <ShieldAlert className="w-6 h-6 text-destructive" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Peringatan <span className="text-destructive">Dini</span>
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">Daftar notifikasi kritis yang membutuhkan intervensi segera.</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 glass-panel border-white/10 hover:bg-muted/50 transition-colors">
            Tandai semua dibaca <UserCheck className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-4">
          {alerts.map((alert) => (
            <motion.div 
              variants={itemVariants}
              key={alert.id} 
              className={cn(
                "glass-panel p-0 relative overflow-hidden group transition-all duration-300",
                alert.status === "unread" ? "border-l-4 shadow-lg" : "opacity-75 grayscale-[0.2]",
                alert.severity === "critical" ? "border-l-destructive" :
                alert.severity === "high" ? "border-l-orange-500" :
                "border-l-yellow-500"
              )}
            >
              {/* Animated Background Highlight for Unread Critical Alerts */}
              {alert.status === "unread" && alert.severity === "critical" && (
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-transparent pointer-events-none animate-pulse"></div>
              )}
              
              <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-extrabold text-xl text-foreground">{alert.student} <span className="text-sm font-medium text-muted-foreground">({alert.class})</span></h3>
                    {alert.status === "unread" && (
                      <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider flex items-center">
                        <span className="w-2 h-2 rounded-full bg-destructive mr-2 animate-ping"></span> Baru
                      </span>
                    )}
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                      alert.severity === "critical" ? "bg-red-500/20 text-red-500" :
                      alert.severity === "high" ? "bg-orange-500/20 text-orange-500" :
                      "bg-yellow-500/20 text-yellow-600 dark:text-yellow-500"
                    )}>
                      Resiko {alert.severity === "critical" ? "Sangat Tinggi" : alert.severity === "high" ? "Tinggi" : "Sedang"}
                    </span>
                  </div>
                  <p className="text-foreground/90 text-base leading-relaxed p-4 bg-muted/30 rounded-xl border border-white/5">{alert.reason}</p>
                  <div className="flex items-center text-sm font-medium text-muted-foreground pt-1">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {alert.time}
                  </div>
                </div>
                
                <div className="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3 shrink-0">
                  <Button variant="default" className="w-full md:w-auto font-bold shadow-md hover:shadow-lg transition-all" size="lg">
                    Tindak Lanjuti
                  </Button>
                  <Button variant="secondary" className="w-full md:w-auto bg-secondary/10 hover:bg-secondary/20 text-secondary font-semibold transition-colors" size="lg">
                    Lihat Profil <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
