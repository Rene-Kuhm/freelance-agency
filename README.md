<div align="center">

# 🚀 Tecnodespegue

### Professional Freelance Web Development Agency

*Soluciones web modernas y personalizadas para tu negocio*

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🌐 Ver Sitio](https://tecnodespegue.com) · [📧 Contacto](mailto:contacto@tecnodespegue.com) · [💼 Portfolio](#projects-portfolio)

</div>

---

## 📖 Acerca del Proyecto

Sitio web profesional de agencia freelance especializada en desarrollo web y programación. Construido con las últimas tecnologías para ofrecer una experiencia de usuario excepcional, diseño responsive y optimización SEO de primer nivel.

## ✨ Características Principales

- ⚡ **Stack Tecnológico Moderno**: Next.js 15.5.4 con App Router, React 19 y TypeScript
- 📱 **Diseño Responsive**: Experiencia perfecta en móviles, tablets y escritorio
- 🎨 **UI Profesional**: Componentes shadcn/ui con diseño limpio y moderno
- 🔍 **Optimizado SEO**: Metadata profesional, sitemap optimizado y HTML semántico
- ✨ **Animaciones Fluidas**: Transiciones suaves y efectos hover atractivos
- 📧 **Formulario de Contacto**: Sistema funcional con Next.js Server Actions
- 🌐 **Multilenguaje**: Contenido en español para clientes hispanohablantes
- 🚀 **Alto Rendimiento**: Lighthouse Score 90+ y Core Web Vitals optimizados

## 📐 Secciones del Sitio

<table>
<tr>
<td width="50%">

### 🎯 Hero Section
- Hero atractivo con fondo animado
- Botones call-to-action estratégicos
- Estadísticas clave (50+ proyectos, 100% satisfacción)
- Badge profesional y tagline

### 💼 Servicios
- 6 servicios especializados:
  - Desarrollo Frontend (React, Next.js, TypeScript)
  - Desarrollo Backend (Node.js, Databases, APIs)
  - Aplicaciones Móviles (React Native)
  - Diseño UI/UX
  - Optimización de Rendimiento
  - Mantenimiento y Soporte
- Cards interactivas con efectos hover

### 🚀 Portfolio de Proyectos
- 6 proyectos destacados con:
  - Imágenes optimizadas (Next.js Image)
  - Descripciones y tags de tecnologías
  - Enlaces a demo en vivo y GitHub
  - Animaciones suaves al hover

</td>
<td width="50%">

### 👨‍💻 Sobre Mí
- Introducción personal y propuesta de valor
- Lista de habilidades y tecnologías
- Highlights clave (Calidad, Puntualidad, Comunicación, Resultados)
- Card de estadísticas

### 📬 Contacto
- Formulario funcional con Server Actions
- Validación de campos
- Cards de información de contacto (Email, Teléfono, Ubicación)
- Manejo de mensajes de éxito/error

### 🧭 Navegación y Footer
- Header fijo con efectos de scroll
- Navegación suave entre secciones
- Menú responsive para móviles
- Footer con información, enlaces y redes sociales

</td>
</tr>
</table>

## 🛠️ Stack Tecnológico

<div align="center">

| Categoría | Tecnologías |
|-----------|------------|
| **⚡ Core** | Next.js 15.5.4 • React 19 • TypeScript 5.0 |
| **🎨 Estilos** | Tailwind CSS v4 • PostCSS • CSS Variables |
| **🧩 Componentes** | shadcn/ui • Radix UI • Lucide React Icons |
| **🔧 Herramientas** | ESLint • TypeScript Compiler • Git |
| **📦 Deploy** | Vercel • GitHub Actions |

</div>

## 📂 Estructura del Proyecto

```
tecnodespegue/
├── 📁 app/
│   ├── 📄 actions.ts          # Server Actions para formulario
│   ├── 📄 globals.css         # Estilos globales y variables CSS
│   ├── 📄 layout.tsx          # Layout raíz con metadata SEO
│   ├── 📄 page.tsx            # Página principal (home)
│   ├── 📄 sitemap.ts          # Sitemap optimizado para Google
│   └── 📁 admin/              # Panel de administración
│
├── 📁 components/
│   ├── 📁 ui/                 # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── Header.tsx            # Navegación principal
│   ├── Footer.tsx            # Footer del sitio
│   ├── Hero.tsx              # Sección hero
│   ├── Services.tsx          # Showcase de servicios
│   ├── Projects.tsx          # Portfolio de proyectos
│   ├── About.tsx             # Sección sobre mí
│   └── Contact.tsx           # Formulario de contacto
│
├── 📁 lib/
│   └── utils.ts              # Funciones utilitarias
│
├── 📁 public/
│   └── robots.txt            # Configuración de robots
│
├── ⚙️ next.config.ts          # Configuración Next.js
├── ⚙️ tailwind.config.ts      # Configuración Tailwind
├── ⚙️ components.json         # Configuración shadcn/ui
└── 📦 package.json            # Dependencias del proyecto
```

## 🚀 Instalación y Configuración

### Prerequisitos

Asegúrate de tener instalado:
- **Node.js** 18.17 o superior
- **npm**, **yarn** o **pnpm**

### Instalación Rápida

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/Rene-Kuhm/freelance-agency.git

# 2️⃣ Navegar al directorio
cd freelance-agency

# 3️⃣ Instalar dependencias
npm install

# 4️⃣ Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 🏗️ Compilación para Producción

```bash
# Generar build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

## 🎨 Personalización

### Colores y Temas

Edita `app/globals.css` para personalizar el esquema de colores. El proyecto usa variables CSS con espacio de color OKLCH para mejor consistencia.

### Contenido

| Componente | Archivo | Qué modificar |
|-----------|---------|---------------|
| **Nombre de la empresa** | `components/Footer.tsx`, `components/Header.tsx` | Tecnodespegue |
| **Información de contacto** | `components/Contact.tsx`, `components/Footer.tsx` | Email, teléfono, ubicación |
| **Servicios** | `components/Services.tsx` | Array de servicios |
| **Proyectos** | `components/Projects.tsx` | Array de proyectos con tus trabajos |
| **Sobre mí** | `components/About.tsx` | Descripción personal y habilidades |

### Metadata SEO

Actualiza el metadata en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Tu Título",
  description: "Tu Descripción",
  keywords: ["tus", "palabras", "clave"],
  // ...
};
```

### Formulario de Contacto

El formulario usa Server Actions. Para integrar un servicio de email:

1. Abre `app/actions.ts`
2. Integra tu servicio preferido (Resend, SendGrid, Nodemailer)
3. Reemplaza el `console.log` con la lógica de envío real

## 🌐 Deployment

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rene-Kuhm/freelance-agency)

```bash
# 1️⃣ Push a GitHub
git push origin master

# 2️⃣ Importar proyecto en Vercel
# 3️⃣ Deploy automático ✨
```

### Otras Plataformas

El proyecto es compatible con cualquier plataforma que soporte Next.js:

| Plataforma | Comando | Documentación |
|-----------|---------|---------------|
| **Netlify** | `netlify deploy` | [Docs](https://docs.netlify.com/) |
| **AWS Amplify** | `amplify publish` | [Docs](https://docs.amplify.aws/) |
| **Railway** | `railway up` | [Docs](https://docs.railway.app/) |
| **Render** | Auto deploy | [Docs](https://render.com/docs) |

## ⚡ Performance

<div align="center">

| Métrica | Resultado | Estado |
|---------|-----------|--------|
| **Lighthouse Score** | 90+ | ✅ Optimizado |
| **Core Web Vitals** | Excelente LCP, FID, CLS | ✅ Cumple |
| **Optimización de Imágenes** | Next.js Image | ✅ Automático |
| **Code Splitting** | Route-based | ✅ Automático |
| **Generación Estática** | Build time | ✅ Pre-renderizado |

</div>

## 🌍 Compatibilidad de Navegadores

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome | Última | ✅ |
| Firefox | Última | ✅ |
| Safari | Última | ✅ |
| Edge | Última | ✅ |
| Navegadores móviles | iOS Safari, Chrome Mobile | ✅ |

## 📄 Licencia

Este proyecto es código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 📞 Soporte y Contacto

¿Preguntas o necesitas ayuda?

- 📧 Email: [contacto@tecnodespegue.com](mailto:contacto@tecnodespegue.com)
- 🌐 Web: [tecnodespegue.com](https://tecnodespegue.com)
- 💼 GitHub: [@Rene-Kuhm](https://github.com/Rene-Kuhm)

---

<div align="center">

### Hecho con ❤️ por [Tecnodespegue](https://tecnodespegue.com)

**Next.js** • **TypeScript** • **Tailwind CSS** • **React**

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

</div>
