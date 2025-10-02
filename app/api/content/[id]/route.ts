import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

// PUT update content
export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const params = await props.params;
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { type, title, description, image, data, active } = body;

    const content = await prisma.content.update({
      where: { id: params.id },
      data: {
        type,
        title,
        description,
        image,
        data: data as object,
        active,
      },
    });

    return NextResponse.json(content);
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { error: "Error al actualizar contenido" },
      { status: 500 }
    );
  }
}

// DELETE content
export async function DELETE(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const params = await props.params;
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    await prisma.content.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Contenido eliminado" });
  } catch (error) {
    console.error("Error deleting content:", error);
    return NextResponse.json(
      { error: "Error al eliminar contenido" },
      { status: 500 }
    );
  }
}
