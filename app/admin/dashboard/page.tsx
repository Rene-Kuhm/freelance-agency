import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { database } from "@/lib/db";
import { Megaphone, FileText, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const promotions = await database.getPromotions();
  const content = await database.getContent();
  const activePromotions = promotions.filter(p => p.active);

  const stats = [
    {
      title: "Promociones Activas",
      value: activePromotions.length,
      total: promotions.length,
      icon: Megaphone,
      href: "/admin/dashboard/promotions",
      gradient: "from-primary to-purple-500",
    },
    {
      title: "Contenido Publicado",
      value: content.filter(c => c.active).length,
      total: content.length,
      icon: FileText,
      href: "/admin/dashboard/content",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Visitas del Mes",
      value: "2,543",
      total: "+12%",
      icon: TrendingUp,
      href: "#",
      gradient: "from-pink-500 to-primary",
    },
    {
      title: "Contactos",
      value: "48",
      total: "este mes",
      icon: Users,
      href: "#",
      gradient: "from-primary via-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Dashboard
          </span>
        </h1>
        <p className="text-muted-foreground">
          Bienvenido al panel de administración de Tecnodespegue
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} bg-opacity-10`}>
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {typeof stat.total === 'number' ? `de ${stat.total} total` : stat.total}
              </p>
              {stat.href !== "#" && (
                <Link href={stat.href} className="mt-4 inline-block">
                  <Button variant="ghost" size="sm" className="text-xs">
                    Ver detalles →
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              Promociones Recientes
            </CardTitle>
            <CardDescription>
              Últimas promociones creadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            {promotions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground mb-4">
                  No hay promociones aún
                </p>
                <Link href="/admin/dashboard/promotions">
                  <Button className="bg-gradient-to-r from-primary to-purple-500">
                    Crear Primera Promoción
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {promotions.slice(0, 3).map((promo) => (
                  <div
                    key={promo.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div>
                      <p className="font-medium text-sm">{promo.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {promo.active ? "✅ Activa" : "⏸️ Inactiva"}
                      </p>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {promo.badge}
                    </div>
                  </div>
                ))}
                <Link href="/admin/dashboard/promotions">
                  <Button variant="outline" className="w-full mt-2">
                    Ver Todas
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-500" />
              Gestión Rápida
            </CardTitle>
            <CardDescription>
              Accesos directos a funciones principales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/dashboard/promotions" className="block">
              <Button className="w-full justify-start bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                <Megaphone className="h-4 w-4 mr-2" />
                Nueva Promoción
              </Button>
            </Link>
            <Link href="/admin/dashboard/content" className="block">
              <Button variant="outline" className="w-full justify-start border-2">
                <FileText className="h-4 w-4 mr-2" />
                Nuevo Contenido
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="outline" className="w-full justify-start border-2">
                Ver Sitio Web →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
