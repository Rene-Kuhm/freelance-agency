"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Briefcase, MessageSquare } from "lucide-react";

export default function ContentPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-primary bg-clip-text text-transparent">
            Gestión de Contenido
          </span>
        </h1>
        <p className="text-muted-foreground">
          Administra servicios, proyectos y testimonios de tu sitio web
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="services" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="services" className="gap-2">
            <FileText className="h-4 w-4" />
            Servicios
          </TabsTrigger>
          <TabsTrigger value="projects" className="gap-2">
            <Briefcase className="h-4 w-4" />
            Proyectos
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Testimonios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="services">
          <Card className="border-2 border-primary/10">
            <CardHeader>
              <CardTitle>Gestión de Servicios</CardTitle>
              <CardDescription>
                Próximamente: Administra los servicios que ofreces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Función en desarrollo
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card className="border-2 border-purple-500/10">
            <CardHeader>
              <CardTitle>Gestión de Proyectos</CardTitle>
              <CardDescription>
                Próximamente: Muestra tus proyectos destacados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Función en desarrollo
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials">
          <Card className="border-2 border-pink-500/10">
            <CardHeader>
              <CardTitle>Gestión de Testimonios</CardTitle>
              <CardDescription>
                Próximamente: Añade testimonios de clientes satisfechos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Función en desarrollo
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
