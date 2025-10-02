"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";

interface Promotion {
  id: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  active: boolean;
}

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    badge: "",
    image: "",
    active: true,
  });

  // Cargar promociones de ejemplo
  useEffect(() => {
    setPromotions([
      {
        id: "1",
        title: "Oferta de Lanzamiento",
        description: "Obtén 20% de descuento en tu primer proyecto web completo",
        badge: "20% OFF",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        active: true,
      },
      {
        id: "2",
        title: "Paquete Premium",
        description: "Desarrollo + Diseño + SEO - Todo en uno con precio especial",
        badge: "PREMIUM",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        active: true,
      },
    ]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      // Actualizar promoción existente
      setPromotions(promotions.map(p =>
        p.id === editingId ? { ...formData, id: editingId } : p
      ));
    } else {
      // Crear nueva promoción
      const newPromotion: Promotion = {
        ...formData,
        id: Date.now().toString(),
      };
      setPromotions([...promotions, newPromotion]);
    }

    // Reset form
    setFormData({
      title: "",
      description: "",
      badge: "",
      image: "",
      active: true,
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (promo: Promotion) => {
    setFormData({
      title: promo.title,
      description: promo.description,
      badge: promo.badge,
      image: promo.image,
      active: promo.active,
    });
    setEditingId(promo.id);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de eliminar esta promoción?")) {
      setPromotions(promotions.filter(p => p.id !== id));
    }
  };

  const toggleActive = (id: string) => {
    setPromotions(promotions.map(p =>
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      badge: "",
      image: "",
      active: true,
    });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Promociones
            </span>
          </h1>
          <p className="text-muted-foreground">
            Gestiona las promociones visibles en tu sitio web
          </p>
        </div>
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nueva Promoción
          </Button>
        )}
      </div>

      {/* Form */}
      {isEditing && (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle>
              {editingId ? "Editar Promoción" : "Nueva Promoción"}
            </CardTitle>
            <CardDescription>
              Completa los campos para {editingId ? "actualizar" : "crear"} la promoción
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Ej: Oferta de Lanzamiento"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="badge">Badge *</Label>
                  <Input
                    id="badge"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="Ej: 20% OFF"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe la promoción..."
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">URL de Imagen *</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  type="url"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="active"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="active" className="cursor-pointer">
                  Activar inmediatamente
                </Label>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
                >
                  {editingId ? "Actualizar" : "Crear"} Promoción
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Promotions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <Card
            key={promo.id}
            className={`relative overflow-hidden border-2 ${
              promo.active ? "border-primary/20" : "border-muted opacity-60"
            }`}
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {promo.badge}
            </div>

            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <CardHeader>
              <CardTitle className="text-lg">{promo.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {promo.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleActive(promo.id)}
                  className="flex-1"
                >
                  {promo.active ? (
                    <>
                      <Eye className="h-4 w-4 mr-1" />
                      Activa
                    </>
                  ) : (
                    <>
                      <EyeOff className="h-4 w-4 mr-1" />
                      Inactiva
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(promo)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(promo.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {promotions.length === 0 && !isEditing && (
        <Card className="border-2 border-dashed border-muted-foreground/25">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <p className="text-muted-foreground mb-4">
              No hay promociones creadas aún
            </p>
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-primary to-purple-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Crear Primera Promoción
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
