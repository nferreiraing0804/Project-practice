import { Link } from "react-router-dom";
import { Moon, Sun, Menu, Laptop } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

export const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Inicio", to: "/" },
    { title: "Contacto", to: "/contacto" },
    { title: "Servicios", to: "/servicios" },
    { title: "Portafolio", to: "/portafolio" },
    { title: "Sobre Nosotros", to: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <div className="rounded-lg bg-primary p-1">
            <Laptop className="h-5 w-5 text-primary-foreground" />
          </div>
          <span>MODERN_UI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left mb-8">Menú de Navegación</SheetTitle>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold transition-colors hover:text-primary border-b pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
                <Button className="mt-4 w-full">Empieza Ahora</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};