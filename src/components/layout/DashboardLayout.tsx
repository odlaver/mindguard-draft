import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "student" | "counselor" | "admin";
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background relative overflow-hidden">
      {/* Dashboard Ambient Background Blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] mix-blend-multiply pointer-events-none" />

      <Sidebar role={role} />
      <div className="flex flex-col flex-1 md:ml-64 w-full h-screen overflow-hidden z-10 relative">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl w-full h-full relative">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
