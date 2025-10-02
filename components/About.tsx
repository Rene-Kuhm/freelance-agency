import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Users, Clock, Target, User, Sparkles } from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript / TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "Tailwind CSS",
    "PostgreSQL & MongoDB",
    "Git & GitHub",
    "REST & GraphQL APIs",
    "Docker & CI/CD",
  ];

  const highlights = [
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Código limpio, mantenible y siguiendo las mejores prácticas de la industria.",
    },
    {
      icon: Clock,
      title: "Entregas a Tiempo",
      description: "Compromiso con los plazos establecidos sin sacrificar la calidad del proyecto.",
    },
    {
      icon: Users,
      title: "Comunicación Fluida",
      description: "Actualizaciones constantes y transparencia en cada etapa del desarrollo.",
    },
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Soluciones que realmente impulsan tu negocio y cumplen tus objetivos.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-primary/5" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float" style={{animationDelay: "0.5s"}}>
          <User className="h-6 w-6 text-pink-500/20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: "1.5s"}}>
          <Sparkles className="h-8 w-8 text-primary/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-pink-500/20 px-6 py-3 rounded-full mb-6">
            <User className="h-5 w-5 text-pink-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Acerca de
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sobre{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-primary bg-clip-text text-transparent">
              Mí
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrollador freelance apasionado por crear soluciones digitales que
            marcan la diferencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Hola! Soy un desarrollador web freelance con más de 5 años de
                experiencia creando aplicaciones web modernas y soluciones de
                software personalizadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi enfoque combina diseño elegante con código eficiente para
                entregar productos que no solo se ven bien, sino que funcionan
                excepcionalmente bien. Me especializo en tecnologías frontend
                modernas como React y Next.js, pero también tengo experiencia
                sólida en desarrollo backend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabajo estrechamente con mis clientes para entender sus
                necesidades y convertir sus ideas en realidad. Ya sea que
                necesites un sitio web corporativo, una aplicación web compleja o
                una tienda online, puedo ayudarte a alcanzar tus objetivos.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Tecnologías y Herramientas</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">¿Por Qué Trabajar Conmigo?</h3>

            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group border-2 border-pink-500/10 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <highlight.icon className="h-6 w-6 text-pink-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-pink-500 transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
              <CardContent className="p-6 relative z-10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <div className="text-sm opacity-90">Proyectos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">30+</div>
                    <div className="text-sm opacity-90">Clientes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">5+</div>
                    <div className="text-sm opacity-90">Años</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
