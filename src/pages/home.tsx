import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Zap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
  
    <div className="w-full min-h-screen bg-background flex flex-col items-center">
           
      <section className="relative w-full overflow-hidden pt-20 pb-32 flex justify-center">
        
        <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute bottom-auto left-1/2 right-0 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 opacity-50 blur-[100px]"></div>
        </div>

        <div className="container-custom mx-auto px-6 text-center max-w-5xl">
          <Badge className="mb-4 animate-in fade-in slide-in-from-bottom-3 duration-1000" variant="secondary">
            🚀 Innovación Digital 2026
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Diseñamos el <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              futuro hoy
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Creamos soluciones de software que no solo funcionan, sino que escalan y enamoran a tus usuarios.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl hover:scale-105 transition-all">
              Hablemos de tu proyecto
            </Button>
              <Link to ="/portafolio">
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg hover:bg-secondary">
                Portafolio
              </Button>
              </Link>
          </div>
        </div>
      </section>


      <section className="w-full bg-secondary/20 py-24 flex justify-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Especialidades</h2>
            <p className="text-muted-foreground text-lg">Tecnología de punta para resultados extraordinarios.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Monitor className="w-12 h-12" />, title: "Web Apps", text: "Sistemas robustos con React, Next.js y Node.js." },
              { icon: <Zap className="w-12 h-12" />, title: "High Performance", text: "Optimización de carga y arquitectura de servidores." },
              { icon: <Globe className="w-12 h-12" />, title: "SEO Global", text: "Posicionamos tu marca en los primeros resultados." },
            ].map((item, i) => (
              <Card key={i} className="group border-none shadow-lg bg-background hover:ring-2 ring-primary transition-all duration-300">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-2xl bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.text}</p>
                  <Button variant="link" className="group-hover:translate-x-2 transition-transform">
                    Explorar <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-6 flex justify-center">
        <div className="container max-w-5xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-20 text-center text-primary-foreground shadow-2xl shadow-primary/40">
            
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Hagamos algo <br />increíble juntos</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-12 text-lg">
              ¿Tienes una idea? Nosotros tenemos el equipo para construirla. 
              Únete a las empresas líderes que ya confían en nosotros.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl font-bold shadow-2xl hover:bg-white transition-colors">
              Contactar ahora
            </Button>
          </div>
        </div>
      </section>

      <footer className="w-full border-t py-12 flex justify-center bg-slate-50 dark:bg-transparent">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-black tracking-tighter">STUDIO<span className="text-primary">.</span></span>
            <p className="text-sm text-muted-foreground">© 2026 Crafted with Passion.</p>
          </div>
          <div className="flex gap-8 font-medium text-sm">
            <a href="#" className="hover:text-primary transition-colors">Trabajo</a>
            <a href="#" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};