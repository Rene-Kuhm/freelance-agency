import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "TDPBlog - Blog Tecnológico",
      description:
        "Blog personal enfocado en tutoriales de tecnología y desarrollo web. Artículos sobre JavaScript, React, Astro y tendencias actuales.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      tags: ["Astro", "TypeScript", "JavaScript", "Vercel"],
      liveUrl: "https://tdpblog.com.ar",
      githubUrl: "https://github.com/Rene-Kuhm/TDPBlog",
      status: "En Vivo",
    },
    {
      title: "Tecnodespegue Web",
      description:
        "Sitio web oficial de Tecnodespegue construido con tecnologías modernas. Diseño responsive y optimizado para rendimiento.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
      liveUrl: "https://tecnodespegue.vercel.app",
      githubUrl: "https://github.com/Rene-Kuhm/Tecnodespegue",
      status: "En Vivo",
    },
    {
      title: "Web Tecnodespegue Oficial",
      description:
        "Página web oficial con diseño moderno y funcionalidades avanzadas. Implementación con mejores prácticas de desarrollo web.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tags: ["JavaScript", "Astro", "HTML", "Tailwind"],
      liveUrl: "",
      githubUrl: "https://github.com/Rene-Kuhm/web-tecnodespegue",
      status: "Completado",
    },
    {
      title: "Web en Astro",
      description:
        "Proyecto starter de Astro.js personalizado. Template base para desarrollo rápido de sitios web estáticos y dinámicos.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      tags: ["Astro", "JavaScript", "Starter Template"],
      liveUrl: "",
      githubUrl: "https://github.com/Rene-Kuhm/web-en-astro",
      status: "Completado",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "",
      status: "En Desarrollo",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard interactivo para visualización de datos en tiempo real con gráficos y métricas personalizables.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "",
      status: "Planificación",
    },
  ];

  return (
    <section id="proyectos" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 animate-float" style={{animationDelay: "0.5s"}}>
          <Briefcase className="h-6 w-6 text-purple-500/20" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float" style={{animationDelay: "1.5s"}}>
          <Sparkles className="h-8 w-8 text-pink-500/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 px-6 py-3 rounded-full mb-6">
            <Briefcase className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-primary bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos recientes que demuestran mi experiencia en
            desarrollo web y programación
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 border-2 border-purple-500/10 hover:border-purple-500/30"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-purple-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {project.status}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">
                  <span className="group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </span>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl ? (
                    <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ver Proyecto
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 cursor-not-allowed" disabled>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Próximamente
                    </Button>
                  )}
                  {project.githubUrl ? (
                    <Button asChild size="sm" variant="outline" className="border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                        aria-label="Ver en GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="border-2 border-purple-500/30 cursor-not-allowed opacity-50" disabled>
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
