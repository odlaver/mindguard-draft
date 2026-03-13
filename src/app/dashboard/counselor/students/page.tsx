import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, MoreHorizontal } from "lucide-react";

export default function StudentMoodDetail() {
  const students = [
    { id: "1001", name: "Andi Saputra", class: "X-A", mood: "Tinggi", lastCheckin: "Hari ini, 07:30", status: "Perlu Pantauan" },
    { id: "1002", name: "Budi Santoso", class: "X-B", mood: "Stabil", lastCheckin: "Hari ini, 08:15", status: "Aman" },
    { id: "1003", name: "Siti Aminah", class: "X-A", mood: "Sedang", lastCheckin: "Kemarin, 14:00", status: "Aman" },
    { id: "1004", name: "Rina Wati", class: "X-C", mood: "Tinggi", lastCheckin: "Hari ini, 06:45", status: "Kritis" },
    { id: "1005", name: "Joko Widodo", class: "X-B", mood: "Stabil", lastCheckin: "Hari ini, 07:10", status: "Aman" },
  ];

  return (
    <DashboardLayout role="counselor">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Daftar Siswa</h1>
            <p className="text-muted-foreground mt-2">Daftar seluruh siswa beserta ringkasan status kesehatan mental.</p>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Cari nama atau NIS siswa..." className="w-full pl-9" />
              </div>
              <div className="flex space-x-2 w-full md:w-auto">
                <Button variant="outline" className="w-full md:w-auto"><Filter className="w-4 h-4 mr-2" /> Filter Kelas</Button>
                <Button variant="outline" className="w-full md:w-auto"><Filter className="w-4 h-4 mr-2" /> Status Risiko</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 text-muted-foreground uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 font-medium">Nama / NIS</th>
                    <th className="px-4 py-3 font-medium">Kelas</th>
                    <th className="px-4 py-3 font-medium">Risiko Mood</th>
                    <th className="px-4 py-3 font-medium">Check-in Terakhir</th>
                    <th className="px-4 py-3 font-medium">Status Aksi</th>
                    <th className="px-4 py-3 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">{student.name}</div>
                        <div className="text-xs text-muted-foreground">{student.id}</div>
                      </td>
                      <td className="px-4 py-3">{student.class}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          student.mood === "Tinggi" ? "bg-destructive/10 text-destructive" :
                          student.mood === "Sedang" ? "bg-orange-500/10 text-orange-500" :
                          "bg-emerald-500/10 text-emerald-500"
                        }`}>
                          {student.mood}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{student.lastCheckin}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-md text-xs border ${
                          student.status === "Kritis" ? "border-destructive text-destructive" :
                          student.status === "Perlu Pantauan" ? "border-orange-500 text-orange-500" :
                          "border-emerald-500/50 text-emerald-500"
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm">Detail</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-end space-x-2 py-4">
              <Button variant="outline" size="sm" disabled>Sebelumnya</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">Selanjutnya</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
