import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Mail, User, MessageSquare, 
  CheckCircle2, Loader2, Sparkles,
  type LucideIcon 
} from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


const contactSchema = z.object({
  username: z.string()
    .min(2, "El nombre es demasiado corto")
    .max(50, "El nombre es demasiado largo"),
  email: z.string()
    .email("Introduce un correo electrónico válido"),
  message: z.string()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
    .max(1000, "El mensaje es demasiado extenso"),
});


type ContactFormValues = z.infer<typeof contactSchema>;

/**
 * 2. Tipado para los items de contacto lateral
 */
interface ContactDetail {
  Icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

const CONTACT_DETAILS: ContactDetail[] = [
  { Icon: Mail, label: "Email", value: "hola@tuagency.com", color: "text-blue-500" },
  { Icon: MessageSquare, label: "Soporte", value: "Chat en vivo 24/7", color: "text-purple-500" },
  { Icon: Sparkles, label: "Estatus", value: "Proyectos activos Q1 2026", color: "text-amber-500" }
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      // Simulación de envío
      await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      setStatus('success');
      form.reset();
      
      // Volver al estado inicial después de unos segundos
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-16 px-4 bg-background">
    
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl font-extrabold tracking-tighter leading-none mb-6">
                Construyamos tu <br />
                <span className="text-primary italic">próximo éxito.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-sm">
                Estamos listos para transformar tus ideas en productos digitales de alto impacto.
              </p>
            </motion.div>

            <div className="space-y-4">
              {CONTACT_DETAILS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center p-4 bg-card/40 border border-border rounded-2xl backdrop-blur-sm"
                >
                  <div className={`p-3 rounded-xl bg-background shadow-sm mr-4 ${item.color}`}>
                    <item.Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-1 md:p-6 bg-card/80 backdrop-blur-md border-border shadow-2xl rounded-[2rem] overflow-hidden">
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {status !== 'success' ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nombre completo</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                      <Input placeholder="Nombre" {...field} className="pl-10 h-12 rounded-xl" />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email corporativo</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                      <Input placeholder="Correo" {...field} className="pl-10 h-12 rounded-xl" />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Cuéntanos sobre tu proyecto</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="¿Qué tienes en mente? Presupuesto, plazos, objetivos..."
                                    className="min-h-[160px] rounded-xl resize-none p-4"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            className="w-full h-14 rounded-xl text-lg font-bold group"
                            disabled={status === 'loading'}
                          >
                            {status === 'loading' ? (
                              <Loader2 className="animate-spin mr-2" />
                            ) : (
                              <>
                                Enviar mensaje
                                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </>
                            )}
                          </Button>
                          
                          {status === 'error' && (
                            <p className="text-destructive text-center text-sm font-medium">
                              Ocurrió un error. Por favor, inténtalo de nuevo.
                            </p>
                          )}
                        </form>
                      </Form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 flex flex-col items-center text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-bold italic">¡Mensaje recibido!</h3>
                      <p className="text-muted-foreground max-w-xs text-balance">
                        Gracias por confiar en nosotros. Un estratega se pondrá en contacto contigo en menos de 24 horas.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}