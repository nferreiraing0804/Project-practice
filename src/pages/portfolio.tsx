import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Trophy, 
  Layers, 
  Layout, 
  Smartphone, 
  Globe,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Zap,
  MessageSquare,
  ChevronRight
} from "lucide-react";

export const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");

  const projects = [
    { 
      title: "Dashboard", 
      cat: "Web", 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      size: "md:col-span-2",
      desc: "Análisis financiero con visualización de datos en tiempo real.",
      gradient: "from-blue-600 to-indigo-900"
    },
    { 
      title: "Smart App", 
      cat: "Mobile", 
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", 
      size: "md:col-span-1",
      desc: "Control domótico de energía eficiente.",
      gradient: "from-emerald-500 to-teal-800"
    },
    { 
      title: "AI Neural Hub", 
      cat: "AI", 
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop", 
      size: "md:col-span-1",
      desc: "Procesamiento de lenguaje natural avanzado.",
      gradient: "from-purple-600 to-pink-900"
    },
    { 
      title: "Global Logistics", 
      cat: "Web", 
      img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1000&auto=format&fit=crop", 
      size: "md:col-span-2",
      desc: "Gestión de flotas y cadena de suministro global.",
      gradient: "from-slate-700 to-slate-900"
    },
    { 
      title: "BioWallet", 
      cat: "Mobile", 
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop", 
      size: "md:col-span-3",
      desc: "Seguridad biométrica para criptoactivos con infraestructura descentralizada.",
      gradient: "from-cyan-600 to-blue-800"
    },
  ];

  const services = [
    { title: "Desarrollo Frontend", desc: "Interfaces reactivas con React y Next.js.", icon: <Layout /> },
    { title: "Apps Nativas", desc: "Experiencias móviles premium con React Native.", icon: <Smartphone /> },
    { title: "Soluciones AI", desc: "Integración de modelos LLM y automatización.", icon: <Zap /> },
    { title: "Arquitectura Cloud", desc: "Sistemas escalables en AWS y Vercel.", icon: <Layers /> },
  ];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.cat === filter);

  return (
    <div className="w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      
      <section className="container mx-auto px-6 pt-32 pb-20 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Trophy className="w-4 h-4" />
          <span>Award Winning Digital Agency 2024</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          Creamos el <span className="text-primary italic">futuro</span> digital.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Transformamos ideas complejas en productos digitales elegantes, rápidos y escalables.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in zoom-in duration-1000 delay-200">
          <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20">
            Iniciar Proyecto
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg">
            Ver Showreel
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 border-y bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {services.map((s, i) => (
            <div key={i} className="group hover:translate-y-[-8px] transition-transform duration-300">
              <div className="mb-6 text-primary w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-32 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Proyectos Seleccionados</h2>
            <p className="text-xl text-muted-foreground">Una mirada de cerca a nuestro trabajo más reciente.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Todos", "Web", "Mobile", "AI"].map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "secondary"}
                onClick={() => setFilter(tag)}
                className="rounded-full px-6 transition-all"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <Card 
              key={i} 
              className={`${p.size} overflow-hidden border-none group relative h-[450px] md:h-[600px] animate-in fade-in slide-in-from-bottom-10 duration-700 delay-${i * 100}`}
            >
              <CardContent className="p-0 h-full w-full relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-20`} />
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Badge className="w-fit mb-4 bg-primary/20 backdrop-blur-md text-primary-foreground border-primary/30 px-4 py-1">
                    {p.cat}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-none">{p.title}</h3>
                  <p className="text-gray-300 text-lg mb-8 line-clamp-2 max-w-md">{p.desc}</p>
                  <div className="flex gap-4">
                    <Button className="rounded-full bg-white text-black hover:bg-gray-200">
                      Explorar <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { v: "150+", t: "Proyectos" },
              { v: "24", t: "Países" },
              { v: "99%", t: "Satisfacción" },
              { v: "12", t: "Premios" },
            ].map((m, i) => (
              <div key={i} className="space-y-2">
                <div className="text-5xl md:text-7xl font-black tracking-tighter">{m.v}</div>
                <div className="text-sm uppercase tracking-[0.2em] opacity-70 font-bold">{m.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-32 max-w-5xl">
        <div className="bg-muted/50 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <MessageSquare className="absolute -top-10 -right-10 w-64 h-64 text-primary/5 -rotate-12" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">"Su capacidad para entender nuestra visión y convertirla en un producto real fue asombrosa."</h2>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 mb-4 overflow-hidden border-2 border-primary">
                <img src="https://i.pravatar.cc/150?u=1" alt="CEO" />
              </div>
              <p className="font-bold text-xl text-foreground">Carlos Méndez</p>
              <p className="text-muted-foreground">CEO de FinStream Global</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto border rounded-[4rem] p-16 md:p-24 bg-gradient-to-b from-background to-muted/50">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">¿Listo para el siguiente nivel?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Estamos aceptando nuevos proyectos para el Q3 2024. Hablemos de cómo podemos ayudarte.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button size="lg" className="rounded-full h-16 px-12 text-xl font-bold bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105">
              Agendar Llamada
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-16 px-12 text-xl font-bold border-2">
              Enviar Email
            </Button>
          </div>
        </div>
        
        <footer className="mt-32 pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-black text-2xl">
            <Code2 className="text-primary" /> STUDIO.
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Linkedin</a>
            <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
            <a href="#" className="hover:text-primary transition-colors">Github</a>
          </div>
          <p className="text-muted-foreground text-sm">© 2025 — 12/1/2026.</p>
        </footer>
      </section>
    </div>
  );
};