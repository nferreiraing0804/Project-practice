import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, Heart, Sparkles, ArrowRight, 
  Globe, Award, Zap, Code, Search, Rocket, 
  Twitter, Linkedin, Users 
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      
      
      <section className="container mx-auto px-4 sm:px-6 pt-24 md:pt-40 pb-20 md:pb-32 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
            <Badge variant="secondary" className="text-primary bg-primary/10 px-4 py-1 text-sm w-fit">
              Manifesto 2026
            </Badge>
          
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85]">
              Humanizar el <br /><span className="text-primary italic">Código.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              No construimos solo apps; creamos extensiones digitales de la voluntad humana. Desde 2020, redefiniendo la elegancia técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button size="lg" className="rounded-full px-8 md:px-12 h-14 md:h-16 text-lg md:text-xl shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
                Nuestra Visión
              </Button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300 mt-12 lg:mt-0">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="Workspace"
              />
            </div>
          
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-primary p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl animate-bounce hidden sm:block">
              <Award className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-zinc-950 text-white py-24 md:py-40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 md:mb-24 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Nuestros Pilares</h2>
            <div className="h-1 w-24 bg-primary mx-auto md:mx-0" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <Target className="w-12 h-12 md:w-16 md:h-16 text-primary" />, t: "Precisión", d: "La estética sin rendimiento es solo ruido. Optimizamos cada milisegundo." },
              { icon: <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary" />, t: "Empatía", d: "Entendemos el miedo del usuario ante la tecnología para convertirlo en confianza." },
              { icon: <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-primary" />, t: "Excelencia", d: "Nuestro estándar es la perfección. Lo 'bueno' es el enemigo de lo 'increíble'." }
            ].map((v, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-primary/50 transition-all duration-500 group text-center md:text-left">
                <div className="mb-6 md:mb-8 flex justify-center md:justify-start transform group-hover:rotate-12 transition-transform">{v.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{v.t}</h3>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-24 md:py-40 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <Badge className="mb-4">Workflow</Badge>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Cómo ocurre la magia.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { step: "01", label: "Descubrimiento", icon: <Search />, color: "bg-blue-500" },
            { step: "02", label: "Estrategia", icon: <Target />, color: "bg-purple-500" },
            { step: "03", label: "Diseño & Dev", icon: <Code />, color: "bg-emerald-500" },
            { step: "04", label: "Lanzamiento", icon: <Rocket />, color: "bg-orange-500" }
          ].map((item, i) => (
            <div key={i} className="relative p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-muted/50 overflow-hidden group hover:bg-background hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-muted">
              <span className="text-6xl md:text-8xl font-black opacity-5 absolute -right-2 -top-2 group-hover:opacity-10 transition-opacity">{item.step}</span>
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.color} text-white flex items-center justify-center mb-6 md:mb-8 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold">{item.label}</h3>
              <div className="mt-4 flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Saber más <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="w-full py-24 md:py-40 bg-zinc-50 dark:bg-zinc-900/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">Mentes Maestras.</h2>
              <p className="text-lg md:text-2xl text-muted-foreground">Un colectivo global de ingenieros y filósofos digitales.</p>
            </div>
            <Button variant="outline" className="rounded-full border-2 h-14 px-8 w-full lg:w-auto">Únete al equipo</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Rivera", role: "Creative Director", img: "https://i.pravatar.cc/400?u=a" },
              { name: "Sofia Chen", role: "Lead Engineer", img: "https://i.pravatar.cc/400?u=b" },
              { name: "Marcus Thorne", role: "UX Philosopher", img: "https://i.pravatar.cc/400?u=c" },
              { name: "Elena Frost", role: "AI Specialist", img: "https://i.pravatar.cc/400?u=d" }
            ].map((member, i) => (
              <div key={i} className="group text-center lg:text-left">
                <div className="aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6 relative">
                  <img src={member.img} className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center lg:justify-start p-8">
                    <div className="flex gap-4 text-white">
                      <Twitter className="w-5 h-5 cursor-pointer" />
                      <Linkedin className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold">{member.name}</h4>
                <p className="text-muted-foreground font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-24 md:py-40 max-w-6xl text-center">
        <div className="relative inline-block mb-8 md:mb-12">
          <Globe className="w-16 h-16 md:w-24 md:h-24 text-primary opacity-20 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl md:text-6xl font-bold mb-12 tracking-tight leading-tight px-4">
          "No importa la zona horaria, <br className="hidden md:block" />
          <span className="text-primary italic px-2">nuestro talento es ubicuo."</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20">
          {[
            { v: "12", t: "Países" },
            { v: "40+", t: "Mentes" },
            { v: "24/7", t: "Soporte" },
            { v: "100%", t: "Remoto" }
          ].map((stat, i) => (
            <div key={i} className="p-6 md:p-8 border rounded-2xl md:rounded-3xl hover:border-primary/50 transition-colors bg-card/50">
              <div className="text-3xl md:text-5xl font-black text-primary mb-2">{stat.v}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-60">{stat.t}</div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="container mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="bg-primary rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-32 text-center text-primary-foreground relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 opacity-10 group-hover:opacity-20 transition-opacity" />
          <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-12 tracking-tighter relative z-10 leading-none">
            Hagamos algo <br className="hidden md:block" /> legendario.
          </h2>
          <Button size="lg" variant="secondary" className="rounded-full h-16 md:h-20 px-8 md:px-16 text-xl md:text-2xl font-bold hover:scale-105 transition-all relative z-10 w-full sm:w-auto">
            Únete a la Revolución
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;