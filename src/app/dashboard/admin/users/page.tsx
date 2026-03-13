import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, MoreHorizontal, Edit, Trash2 } from "lucide-react";

export default function UserManagement() {
  const users = [
    { id: "1001", name: "Andi Saputra", email: "andi@student.sch.id", role: "Siswa", status: "Aktif" },
    { id: "1002", name: "Dra. Rini Wahyuni", email: "rini.bk@sch.id", role: "Guru BK", status: "Aktif" },
    { id: "1003", name: "Budi Santoso", email: "budi@student.sch.id", role: "Siswa", status: "Aktif" },
    { id: "1004", name: "Administrator", email: "admin@sch.id", role: "Admin", status: "Aktif" },
    { id: "1005", name: "Siti Aminah", email: "siti@student.sch.id", role: "Siswa", status: "Nonaktif" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manajemen Akun</h1>
            <p className="text-muted-foreground mt-2">Kelola akun Siswa, Guru BK, dan Administrator sistem.</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Tambah Pengguna
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Cari nama, email, atau ID..." className="w-full pl-9" />
              </div>
              <div className="flex space-x-2 w-full md:w-auto">
                <Button variant="outline" className="w-full md:w-auto"><Filter className="w-4 h-4 mr-2" /> Peran</Button>
                <Button variant="outline" className="w-full md:w-auto"><Filter className="w-4 h-4 mr-2" /> Status</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 text-muted-foreground uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 font-medium">Nama Lengkap / ID</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Peran</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.id}</div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === "Admin" ? "bg-primary/10 text-primary" :
                          user.role === "Guru BK" ? "bg-secondary/10 text-secondary" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-md text-xs border ${
                          user.status === "Aktif" ? "border-emerald-500 text-emerald-500" :
                          "border-muted-foreground text-muted-foreground"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary"><Edit className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between py-4">
              <div className="text-sm text-muted-foreground">Menampilkan 1-5 dari 342 pengguna</div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>Sebelumnya</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">Selanjutnya</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
