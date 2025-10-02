"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, MessageSquare, Sparkles } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "renekuhm2@gmail.com",
      href: "mailto:renekuhm2@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 2334 409838",
      href: "tel:+542334409838",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Eduardo Castex, La Pampa, Argentina",
      href: "#",
    },
  ];

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success && formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float" style={{animationDelay: "0.5s"}}>
          <MessageSquare className="h-6 w-6 text-primary/20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: "1.5s"}}>
          <Sparkles className="h-8 w-8 text-pink-500/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 px-6 py-3 rounded-full mb-6">
            <Send className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hablemos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trabajemos{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Juntos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctame y convirtamos tu idea en
            realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-primary/10 transition-all border-2 border-primary/10 hover:border-primary/30 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.href.startsWith("#") ? (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
              <CardContent className="p-6 relative z-10">
                <h3 className="font-semibold text-lg mb-2">
                  ¿Listo para empezar?
                </h3>
                <p className="text-sm opacity-90">
                  Respondo rápidamente a todos los mensajes. Generalmente en
                  menos de 24 horas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-2 border-primary/10 hover:border-primary/20 transition-colors">
            <CardContent className="p-6 sm:p-8">
              <form ref={formRef} action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="¿En qué puedo ayudarte?"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
