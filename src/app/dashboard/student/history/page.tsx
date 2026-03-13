"use client"
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, Activity } from "lucide-react";

export default function MoodHistory() {
  const weeklyData = [
    { day: "Sen", mood: 4, emoji: "🙂" },
    { day: "Sel", mood: 2, emoji: "😞" },
    { day: "Rab", mood: 3, emoji: "😐" },
    { day: "Kam", mood: 5, emoji: "🤩" },
    { day: "Jum", mood: 4, emoji: "🙂" },
    { day: "Sab", mood: 5, emoji: "🤩" },
    { day: "Min", mood: 4, emoji: "🙂" },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Riwayat Mood</h1>
          <p className="text-muted-foreground mt-2">Pantau perkembangan emosionalmu dari waktu ke waktu.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rata-rata Minggu Ini</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3.8 / 5.0</div>
              <p className="text-xs text-muted-foreground mt-1 text-emerald-500">↑ 0.5 dari minggu lalu</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mood Dominan</CardTitle>
              <BarChart3 className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center">🙂 <span className="ml-2 text-lg">Baik (40%)</span></div>
              <p className="text-xs text-muted-foreground mt-2">Banyak momen positif minggu ini.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Check-In</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 Hari</div>
              <p className="text-xs text-muted-foreground mt-1">Bulan ini</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Grafik Mingguan */}
          <Card>
            <CardHeader>
              <CardTitle>Grafik Mingguan</CardTitle>
              <CardDescription>Pergerakan mood selama 7 hari terakhir</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2 pt-8">
                {weeklyData.map((data) => (
                  <div key={data.day} className="flex flex-col items-center w-full">
                    <span className="mb-2 text-xl" title={`Skor: ${data.mood}`}>{data.emoji}</span>
                    <div 
                      className="w-full bg-primary/20 rounded-t-md relative hover:bg-primary/40 transition-colors"
                      style={{ height: `${(data.mood / 5) * 100}%` }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary">{data.mood}</div>
                    </div>
                    <span className="text-xs text-muted-foreground mt-2">{data.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Log Jurnal Terbaru */}
          <Card>
            <CardHeader>
              <CardTitle>Entri Jurnal Terakhir</CardTitle>
              <CardDescription>Catatan di balik perasaanmu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 border-b border-border pb-4">
                <div className="text-4xl bg-muted rounded-full w-12 h-12 flex items-center justify-center shrink-0">🙂</div>
                <div>
                  <div className="flex justify-between w-full items-center mb-1">
                    <h4 className="font-semibold text-sm">Jumat, 13 Maret</h4>
                    <span className="text-xs text-muted-foreground">08:00 AM</span>
                  </div>
                  <p className="text-sm text-foreground/80">Hari ini terasa lebih ringan. Ulangan matematika bisa aku kerjakan meski susah. Ngobrol sama temen pas istirahat bikin mood naik.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 border-b border-border pb-4">
                <div className="text-4xl bg-muted rounded-full w-12 h-12 flex items-center justify-center shrink-0">🤩</div>
                <div>
                  <div className="flex justify-between w-full items-center mb-1">
                    <h4 className="font-semibold text-sm">Kamis, 12 Maret</h4>
                    <span className="text-xs text-muted-foreground">15:30 PM</span>
                  </div>
                  <p className="text-sm text-foreground/80">Ekskul basket tadi seru banget! Pelatih puji cara mainku. Berasa punya energi ekstra seharian.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-4xl bg-muted rounded-full w-12 h-12 flex items-center justify-center shrink-0">😞</div>
                <div>
                  <div className="flex justify-between w-full items-center mb-1">
                    <h4 className="font-semibold text-sm">Selasa, 10 Maret</h4>
                    <span className="text-xs text-muted-foreground">19:00 PM</span>
                  </div>
                  <p className="text-sm text-foreground/80">Agak capek dan tertekan karena tugas menumpuk. Belum lagi besok presentasi. Rasanya pengen cepet-cepet weekend.</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
