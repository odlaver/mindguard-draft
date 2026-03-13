"use client"
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon, Clock, User, FileText, Plus } from "lucide-react";

export default function CounselingManagement() {
  const [activeTab, setActiveTab] = useState("mendatang");

  const sessions = [
    { id: 1, student: "Rina Wati (X-C)", date: "Besok, 10:00", type: "Konseling Individu (Tindak Lanjut Alert)", status: "mendatang" },
    { id: 2, student: "Andi Saputra (X-A)", date: "Kamis, 13:00", type: "Konseling Pencegahan", status: "mendatang" },
    { id: 3, student: "Joko Widodo (X-B)", date: "Kemarin, 09:00", type: "Konseling Rutin", status: "selesai", notes: "Siswa mengeluhkan tekanan akademik. Diberikan teknik relaksasi." },
  ];

  return (
    <DashboardLayout role="counselor">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manajemen Konseling</h1>
            <p className="text-muted-foreground mt-2">Kelola jadwal sesi dan catat hasil pertemuan dengan siswa.</p>
          </div>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" />
            Jadwal Baru
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="flex space-x-2 border-b pb-2">
              <Button 
                variant={activeTab === "mendatang" ? "default" : "ghost"} 
                onClick={() => setActiveTab("mendatang")}
              >
                Mendatang (2)
              </Button>
              <Button 
                variant={activeTab === "selesai" ? "default" : "ghost"} 
                onClick={() => setActiveTab("selesai")}
              >
                Selesai / Riwayat
              </Button>
            </div>

            <div className="space-y-4">
              {sessions.filter(s => s.status === activeTab).map(session => (
                <Card key={session.id} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-primary font-semibold text-lg">
                          <User className="w-5 h-5" />
                          <span>{session.student}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-1" /> {session.date}</span>
                          <span className="flex items-center"><FileText className="w-4 h-4 mr-1" /> {session.type}</span>
                        </div>
                        {session.status === "selesai" && session.notes && (
                          <div className="bg-muted p-3 flex space-x-2 rounded-md mt-4 text-sm mt-3 border border-border">
                            <FileText className="w-4 h-4 shrink-0 text-muted-foreground mt-0.5" />
                            <p className="text-foreground/80">{session.notes}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col space-y-2 shrink-0">
                        {session.status === "mendatang" ? (
                          <>
                            <Button variant="default" size="sm">Mulai Sesi</Button>
                            <Button variant="outline" size="sm">Reschedule</Button>
                          </>
                        ) : (
                          <Button variant="outline" size="sm">Edit Catatan</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Hari Ini</CardTitle>
                <CardDescription>{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">0</div>
                  <div className="text-sm font-medium text-primary">Sesi Terjadwal Hari Ini</div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold mb-3">Tugas Tertunda</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-1.5 mr-2 shrink-0"></div>
                      <span className="text-muted-foreground">Input catatan konseling Siti Aminah (Kemarin)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 mr-2 shrink-0"></div>
                      <span className="text-muted-foreground">Tinjau 2 laporan Whisper Portal baru</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
