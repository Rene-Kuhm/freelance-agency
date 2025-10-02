import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Palette, Database, Zap, Shield, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web Frontend",
      description:
        "Aplicaciones web modernas con React, Next.js y las últimas tecnologías. Interfaces rápidas, responsivas y optimizadas para SEO.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Optimización SEO"],
      gradient: "from-primary to-purple-500",
    },
    {
      icon: Database,
      title: "Desarrollo Backend",
      description:
        "APIs robustas y escalables con Node.js, bases de datos optimizadas y arquitecturas serverless de alto rendimiento.",
      features: ["Node.js & Express", "PostgreSQL & MongoDB", "REST & GraphQL", "Serverless"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description:
        "Desarrollo de aplicaciones móviles multiplataforma con React Native. Una base de código para iOS y Android.",
      features: ["React Native", "Expo", "UI/UX Nativo", "Integraciones API"],
      gradient: "from-pink-500 to-primary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Diseño de interfaces intuitivas y atractivas. Prototipado, sistemas de diseño y experiencias de usuario excepcionales.",
      features: ["Figma & Adobe XD", "Prototipado", "Design Systems", "Responsive Design"],
      gradient: "from-primary via-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Optimización y Performance",
      description:
        "Mejoro el rendimiento de aplicaciones existentes. Core Web Vitals, lazy loading y técnicas avanzadas de optimización.",
      features: ["Auditorías", "Core Web Vitals", "Lazy Loading", "Code Splitting"],
      gradient: "from-purple-500 to-primary",
    },
    {
      icon: Shield,
      title: "Mantenimiento y Soporte",
      description:
        "Soporte continuo, actualizaciones de seguridad, corrección de errores y evolución de tu aplicación en el tiempo.",
      features: ["Actualizaciones", "Seguridad", "Bug Fixing", "Soporte 24/7"],
      gradient: "from-pink-500 via-purple-500 to-primary",
    },
  ];

  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float" style={{animationDelay: "0.5s"}}>
          <Sparkles className="h-6 w-6 text-primary/20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: "1.5s"}}>
          <Zap className="h-8 w-8 text-purple-500/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 px-6 py-3 rounded-full mb-6">
            <Code className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Servicios Premium
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Servicios
            </span>{" "}
            Profesionales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco soluciones completas de desarrollo web y programación adaptadas
            a tus necesidades específicas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <CardHeader className="relative z-10">
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 group-hover:scale-125 transition-transform`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
