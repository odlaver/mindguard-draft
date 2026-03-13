import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Brain, Headphones, Book, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ResourceCenter() {
  const articles = [
    {
      title: "Membedakan Stres Normal dan Kecemasan Berkepanjangan",
      category: "Edukasi",
      icon: Brain,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      time: "5 min baca"
    },
    {
      title: "Teknik Grounding 5-4-3-2-1 untuk Menenangkan Diri Saat Panik",
      category: "Praktik",
      icon: Sparkles,
      color: "text-primary",
      bg: "bg-primary/10",
      time: "3 min baca"
    },
    {
      title: "Playlist Musik Relaksasi Fokus Belajar",
      category: "Audio",
      icon: Headphones,
      color: "text-secondary",
      bg: "bg-secondary/10",
      time: "30 menit"
    },
    {
      title: "Manajemen Waktu yang Efisien Anti-Burnout",
      category: "Produktivitas",
      icon: Book,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      time: "6 min baca"
    }
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Pusat Edukasi</h1>
            <p className="text-muted-foreground mt-2">Kumpulan materi, tips, dan panduan merawat kesehatan mentalmu.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Cari artikel atau topik..." 
              className="w-full pl-9 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <Button variant="default" className="rounded-full">Semua</Button>
          <Button variant="outline" className="rounded-full">Kesehatan Mental</Button>
          <Button variant="outline" className="rounded-full">Manajemen Stres</Button>
          <Button variant="outline" className="rounded-full">Meditasi</Button>
          <Button variant="outline" className="rounded-full">Produktivitas</Button>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Rekomendasi Untukmu</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-border hover:border-primary/50">
                  <div className={`h-32 ${article.bg} flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500`}>
                    <Icon className={`w-16 h-16 ${article.color} opacity-80`} />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-md ${article.bg} ${article.color}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.time}</span>
                    </div>
                    <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 pt-2 border-t mt-4 flex justify-between items-center">
                    <Button variant="ghost" className="w-full justify-between h-8 px-2 text-muted-foreground group-hover:text-primary">
                      Baca Selengkapnya
                      <span className="ml-2">→</span>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl font-bold">Butuh bantuan segera?</h3>
            <p className="text-muted-foreground">
              Jika kamu merasa kewalahan dan butuh teman bicara, jadwalkan sesi konseling dengan Guru BK sekarang. Privasimu sepenuhnya terjaga.
            </p>
          </div>
          <Button size="lg" className="w-full md:w-auto shrink-0 shadow-lg" variant="default">
            Jadwalkan Konseling
          </Button>
        </section>

      </div>
    </DashboardLayout>
  );
}
