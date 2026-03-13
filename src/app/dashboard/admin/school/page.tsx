import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, GraduationCap, Building2, UploadCloud } from "lucide-react";

export default function SchoolDataManagement() {
  const classes = [
    { id: 1, name: "Kelas X-A", wali: "Drs. Ahmad Yani", students: 32 },
    { id: 2, name: "Kelas X-B", wali: "Siti Nurhaliza, S.Pd", students: 30 },
    { id: 3, name: "Kelas X-C", wali: "Bambang Pamungkas, M.Pd", students: 34 },
    { id: 4, name: "Kelas XI-IPA 1", wali: "Ratna Sari, S.Si", students: 28 },
    { id: 5, name: "Kelas XI-IPS 1", wali: "Eko Prasetyo, S.E", students: 31 },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Data Sekolah</h1>
            <p className="text-muted-foreground mt-2">Pengelolaan data kelas, rombongan belajar, dan sinkronisasi data siswa.</p>
          </div>
          <Button variant="default">
            <UploadCloud className="w-4 h-4 mr-2" />
            Import Data (CSV/Excel)
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle>Daftar Kelas</CardTitle>
                <CardDescription>Manajemen data rombongan belajar aktif.</CardDescription>
              </div>
              <Button variant="outline" size="sm">+ Tambah Kelas</Button>
            </CardHeader>
            <CardContent>
              <div className="divide-y border rounded-md mt-4">
                {classes.map((cls) => (
                  <div key={cls.id} className="flex justify-between items-center p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{cls.name}</h4>
                        <p className="text-xs text-muted-foreground">Wali: {cls.wali}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {cls.students} Siswa
                      </div>
                      <Button variant="ghost" size="sm">Kelola</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tahun Akademik</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/20">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Status Saat Ini</div>
                  <div className="font-bold text-lg">2025 / 2026 - Ganjil</div>
                </div>
                <Button variant="outline" className="w-full">Ubah Semester</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-secondary" />
                  Statistik Ringkas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Total Kelas</span>
                  <span className="font-bold">12 Kelas</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Total Siswa Aktif</span>
                  <span className="font-bold">324 Siswa</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-sm text-muted-foreground">Rata-rata per Kelas</span>
                  <span className="font-bold">27 Siswa</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
