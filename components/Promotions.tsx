"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Percent, Gift, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: "Oferta de Lanzamiento",
      description: "Obtén 20% de descuento en tu primer proyecto web completo",
      badge: "20% OFF",
      icon: Percent,
      gradient: "from-primary to-purple-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Paquete Premium",
      description: "Desarrollo + Diseño + SEO - Todo en uno con precio especial",
      badge: "PREMIUM",
      icon: Gift,
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Desarrollo Rápido",
      description: "Landing page profesional en 48 horas - Oferta limitada",
      badge: "48H",
      icon: Zap,
      gradient: "from-pink-500 to-primary",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="promociones" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 animate-float" style={{animationDelay: "0.5s"}}>
          <Sparkles className="h-6 w-6 text-purple-500/20" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float" style={{animationDelay: "1.5s"}}>
          <Gift className="h-8 w-8 text-pink-500/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 px-6 py-3 rounded-full mb-6">
            <Percent className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ofertas Especiales
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Promociones
            </span>{" "}
            Activas
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y lleva tu proyecto al siguiente nivel
          </p>
        </div>

        {/* Promotions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className="group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${promo.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                {promo.badge}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 z-10" />
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className={`bg-gradient-to-r ${promo.gradient} p-4 rounded-full shadow-xl`}>
                    <promo.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {promo.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {promo.description}
                </p>

                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${promo.gradient} hover:opacity-90 transition-all group/btn`}
                >
                  <Link href="#contacto">
                    Solicitar Ahora
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </Card>
          ))}
        </div>

        {/* Featured banner - Large promotion */}
        <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 hover:border-primary/40 transition-all">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                  <Sparkles className="h-4 w-4" />
                  <span>Oferta Exclusiva</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Consultoría Gratuita
                  </span>
                </h3>

                <p className="text-lg text-muted-foreground mb-6">
                  Agenda una sesión de 30 minutos sin costo para analizar tu proyecto y recibir una estrategia personalizada
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                  >
                    <Link href="#contacto">
                      Agendar Consultoría
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/50 hover:border-primary hover:bg-primary/5"
                  >
                    <Link href="#servicios">
                      Ver Servicios
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-500/20 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Consultoría"
                  fill
                  className="object-cover rounded-2xl"
                />

                {/* Floating stats */}
                <div className="absolute bottom-4 left-4 right-4 z-20 grid grid-cols-3 gap-2">
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg text-center border border-primary/20">
                    <div className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">30min</div>
                    <div className="text-xs text-muted-foreground">Duración</div>
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg text-center border border-purple-500/20">
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Gratis</div>
                    <div className="text-xs text-muted-foreground">Sin costo</div>
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg text-center border border-pink-500/20">
                    <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">Online</div>
                    <div className="text-xs text-muted-foreground">Virtual</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
        </Card>
      </div>
    </section>
  );
}
