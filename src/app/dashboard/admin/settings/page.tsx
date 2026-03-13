"use client"
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Settings2, BellRing, Shield, Database, Save } from "lucide-react";

export default function SystemConfiguration() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Konfigurasi Sistem</h1>
          <p className="text-muted-foreground mt-2">Atur parameter peringatan dini, notifikasi, dan keamanan platform MindGuard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 border-r pr-4 hidden md:block">
            <nav className="space-y-2 sticky top-24">
              <Button variant="secondary" className="w-full justify-start font-semibold"><BellRing className="w-4 h-4 mr-2" /> Alert Threshold</Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground"><Settings2 className="w-4 h-4 mr-2" /> General Settings</Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground"><Shield className="w-4 h-4 mr-2" /> Security & Privacy</Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground"><Database className="w-4 h-4 mr-2" /> Backup & Data</Button>
            </nav>
          </div>

          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Peringatan Dini (Alert Threshold)</CardTitle>
                <CardDescription>Aturan logika sistem untuk memicu notifikasi otomatis ke Guru BK.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium border-b pb-2">Indikator Mood Beruntun</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Skor Mood Kritis (Sangat Buruk/Buruk)</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-1">
                        <option>Skor 1 dan 2</option>
                        <option>Hanya Skor 1</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Batas Hari Berturut-turut</label>
                      <Input type="number" defaultValue={3} className="w-full" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Sistem akan membuat alert "Risiko Tinggi" jika siswa memasukkan skor kritis selama jumlah hari target.</p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-medium border-b pb-2">Whisper Portal (Laporan Anonim)</h3>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                    <div>
                      <h4 className="font-semibold text-sm">Notifikasi Email Instan</h4>
                      <p className="text-xs text-muted-foreground mt-1">Kirim email ke seluruh Guru BK saat ada laporan baru dari Whisper Portal.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                    <div>
                      <h4 className="font-semibold text-sm">Escalation ke Admin</h4>
                      <p className="text-xs text-muted-foreground mt-1">Beritahu admin jika laporan Whisper Portal belum ditindaklanjuti lebih dari 24 Jam.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

              </CardContent>
              <CardFooter className="bg-muted/30 pt-6 flex justify-end">
                <Button className="font-semibold">
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Perubahan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
