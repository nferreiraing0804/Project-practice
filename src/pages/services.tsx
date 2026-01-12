import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Layers, Cpu, ShieldCheck, BarChart, Smartphone, Cloud, 
  Search, PenTool, Code2, Rocket, Globe, Zap 
} from "lucide-react";

export const Services = () => {
  const allServices = [
    { icon: <Smartphone />, title: "App Development", desc: "Apps nativas y cross-platform con rendimiento excepcional.", color: "bg-blue-500/10 text-blue-600" },
    { icon: <Cloud />, title: "Cloud Solutions", desc: "Infraestructura escalable en AWS y Azure para tu crecimiento.", color: "bg-purple-500/10 text-purple-600" },
    { icon: <ShieldCheck />, title: "Ciberseguridad", desc: "Protección de datos y auditorías de seguridad constantes.", color: "bg-emerald-500/10 text-emerald-600" },
    { icon: <Layers />, title: "UI/UX Design", desc: "Prototipado y diseño centrado en la experiencia del usuario.", color: "bg-orange-500/10 text-orange-600" },
    { icon: <Cpu />, title: "AI Integration", desc: "Implementación de modelos de IA para automatizar procesos.", color: "bg-pink-500/10 text-pink-600" },
    { icon: <BarChart />, title: "Data Analytics", desc: "Transformamos tus datos en decisiones estratégicas.", color: "bg-cyan-500/10 text-cyan-600" },
  ];

  const steps = [
    { n: "01", title: "Descubrimiento", desc: "Analizamos tus necesidades y objetivos de negocio para trazar una ruta clara.", icon: <Search className="w-5 h-5" /> },
    { n: "02", title: "Diseño & UX", desc: "Creamos interfaces intuitivas y atractivas que los usuarios amarán usar.", icon: <PenTool className="w-5 h-5" /> },
    { n: "03", title: "Desarrollo", desc: "Construimos tu solución usando las tecnologías más modernas y escalables.", icon: <Code2 className="w-5 h-5" /> },
    { n: "04", title: "Lanzamiento", desc: "Desplegamos tu proyecto y nos aseguramos de que todo funcione a la perfección.", icon: <Rocket className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full min-h-screen bg-background flex flex-col items-center">
      
      <section className="container mx-auto px-6 pt-32 pb-20 text-center max-w-4xl">
        <Badge variant="outline" className="mb-4 py-1 px-4 text-primary border-primary animate-pulse">
          Nuestras Capacidades
        </Badge>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Elevamos tu visión al <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">siguiente nivel.</span>
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed">
          Combinamos creatividad técnica con visión estratégica para entregar productos digitales que marcan la diferencia en el mercado actual.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-32 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((s, i) => (
            <Card key={i} className="border-none shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-primary/10 transition-all duration-500 group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg ${s.color}`}>
                  {s.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full bg-slate-50 dark:bg-slate-900/50 py-32 flex justify-center border-y">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Cómo trabajamos</h2>
              <p className="text-muted-foreground text-lg">Un proceso transparente y ágil diseñado para minimizar riesgos y maximizar la calidad del producto final.</p>
            </div>
            <Button size="lg" className="rounded-full font-bold">Solicitar Consultoría</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

            <div className="hidden md:block absolute top-1/4 left-0 w-full h-[2px] bg-slate-200 dark:bg-slate-800 -z-10" />
            
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-xl ring-8 ring-background">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold pt-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-32 px-6 max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-muted-foreground uppercase tracking-[0.2em] mb-12">Tecnologías en las que confiamos</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          
          <span className="text-3xl font-black">REACT</span>
          <span className="text-3xl font-black">NEXT.JS</span>
          <span className="text-3xl font-black">TYPESCRIPT</span>
          <span className="text-3xl font-black">NODE.JS</span>
          <span className="text-3xl font-black">TAILWIND</span>
          <span className="text-3xl font-black">POSTGRES</span>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground">Todo lo que necesitas saber antes de empezar.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">¿Cuánto tiempo toma desarrollar un proyecto?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Depende de la complejidad. Un MVP básico puede tomar de 4 a 6 semanas, mientras que una plataforma empresarial compleja puede llevar de 3 a 6 meses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">¿Ofrecen mantenimiento después del lanzamiento?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sí, ofrecemos planes de soporte mensual que incluyen actualizaciones de seguridad, corrección de errores y pequeñas mejoras continuas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">¿Cómo se manejan los pagos?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Normalmente trabajamos con un esquema de 50% al inicio y 50% al finalizar, o mediante hitos mensuales basados en entregables específicos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </div>
  );
};

export default Services;