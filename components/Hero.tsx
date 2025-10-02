import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: "2s"}} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Zap className="h-6 w-6 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: "1s"}}>
          <Sparkles className="h-8 w-8 text-purple-500/30" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{animationDelay: "2s"}}>
          <Rocket className="h-7 w-7 text-pink-500/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 text-primary px-6 py-3 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 hover:scale-105 transition-transform">
            <Rocket className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Desarrollo Web Profesional</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 leading-tight">
            Transformo <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Ideas</span> en{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-primary bg-clip-text text-transparent">Soluciones Digitales</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Desarrollo aplicaciones web modernas y software a medida que impulsan
            tu negocio. Calidad, rendimiento y diseño excepcional en cada proyecto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button asChild size="lg" className="text-lg group bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all hover:scale-105">
              <Link href="#contacto">
                Comenzar Proyecto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105">
              <Link href="#proyectos">Ver Proyectos</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-sm md:text-base text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover:border-purple-500/30 hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-pink-500/5 to-primary/5 border border-pink-500/10 hover:border-pink-500/30 hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-sm md:text-base text-muted-foreground">Años de Experiencia</div>
            </div>
          </div>

          {/* Floating icon */}
          <div className="mt-16 animate-bounce">
            <Rocket className="h-12 w-12 mx-auto text-primary/40" />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
