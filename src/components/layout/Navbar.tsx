import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Navbar() {
  return (
    <header className="sticky top-4 z-30 flex h-16 w-[calc(100%-2rem)] mx-auto items-center justify-between border border-white/10 glass-panel px-4 md:px-6 mb-4">
      <div className="flex items-center md:hidden">
        <Button variant="ghost" size="icon" className="mr-2 hover:bg-white/10">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      <div className="flex items-center flex-1 max-w-md ml-auto md:ml-0 md:mr-auto px-4 md:px-0 hidden md:flex">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            type="search" 
            placeholder="Ketik untuk mencari sesuatu..." 
            className="w-full bg-background/40 backdrop-blur-sm border-white/5 pl-10 h-9 rounded-full focus-visible:ring-1 focus-visible:ring-primary shadow-inner transition-all duration-300 focus:bg-background/80"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3 md:space-x-4 ml-auto">
        <Button variant="outline" size="icon" className="relative h-9 w-9 rounded-full bg-background/30 border-white/10 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300">
          <Bell className="h-4 w-4" />
          <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-destructive border-2 border-background animate-pulse"></span>
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md">
          <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
