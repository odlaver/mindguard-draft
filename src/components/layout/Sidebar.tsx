"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  PenLine, 
  History, 
  MessageSquareWarning, 
  BookOpen,
  Users,
  Settings,
  Bell,
  LogOut,
  Brain
} from "lucide-react";
import { Button } from "../ui/button";

interface SidebarProps {
  role: "student" | "counselor" | "admin";
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const links = {
    student: [
      { href: "/dashboard/student", label: "Dashboard", icon: LayoutDashboard },
      { href: "/dashboard/student/tracker", label: "Daily Mood", icon: PenLine },
      { href: "/dashboard/student/history", label: "Riwayat", icon: History },
      { href: "/dashboard/student/whisper", label: "Whisper Portal", icon: MessageSquareWarning },
      { href: "/dashboard/student/resources", label: "Edukasi", icon: BookOpen },
    ],
    counselor: [
      { href: "/dashboard/counselor", label: "Overview", icon: LayoutDashboard },
      { href: "/dashboard/counselor/students", label: "Daftar Siswa", icon: Users },
      { href: "/dashboard/counselor/alerts", label: "Peringatan Dini", icon: Bell },
      { href: "/dashboard/counselor/counseling", label: "Sesi Konseling", icon: BookOpen },
    ],
    admin: [
      { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
      { href: "/dashboard/admin/users", label: "Manajemen Akun", icon: Users },
      { href: "/dashboard/admin/school", label: "Data Sekolah", icon: BookOpen },
      { href: "/dashboard/admin/settings", label: "Pengaturan", icon: Settings },
    ]
  };

  const currentLinks = links[role] || links.student;
  
  const roleDisplay = {
    student: "Siswa",
    counselor: "Guru BK",
    admin: "Admin"
  }[role];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/10 bg-background/60 backdrop-blur-xl shadow-lg transition-transform -translate-x-full sm:translate-x-0 hidden md:block">
      <div className="flex h-full flex-col overflow-y-auto px-4 py-6">
        <Link href="/" className="flex items-center space-x-2 mb-10 px-2 group">
          <div className="bg-primary/20 p-2 rounded-xl group-hover:scale-110 transition-transform">
             <Brain className="w-7 h-7 text-primary" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">Mind<span className="text-primary">Guard</span></span>
        </Link>

        <div className="mb-4 px-2">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {roleDisplay} MENUS
          </p>
        </div>

        <nav className="flex-1 space-y-1.5">
          {currentLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start transition-all duration-300 h-11 relative overflow-hidden group",
                    isActive 
                      ? "bg-primary/15 text-primary font-bold shadow-inner" 
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-md"></span>
                  )}
                  <Icon className={cn("mr-3 h-5 w-5 transition-transform group-hover:scale-110", isActive ? "text-primary" : "")} />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto pt-6 pb-2">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 mb-4 text-center">
            <div className="w-10 h-10 mx-auto bg-background rounded-full flex items-center justify-center shadow-sm mb-2">
              <span className="font-bold text-sm text-primary">MG</span>
            </div>
            <p className="text-xs font-medium text-foreground">MindGuard App</p>
            <p className="text-[10px] text-muted-foreground">Versi 2.0.0</p>
          </div>

          <Link href="/">
            <Button variant="ghost" className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive h-11">
              <LogOut className="mr-3 h-5 w-5" />
              Keluar
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
