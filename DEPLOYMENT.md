# 🚀 Guía de Despliegue a Producción

## Requisitos Previos

- Cuenta en Vercel (recomendado) o cualquier hosting compatible con Next.js
- Base de datos PostgreSQL (Vercel Postgres, Supabase, Neon, etc.)
- Redis opcional (Upstash Redis recomendado)

---

## 1. Preparación Local

### 1.1 Cambiar Contraseña de Admin

```bash
npm run change-password
```

Sigue las instrucciones y copia el hash generado en `lib/db.ts` (solo si usas base de datos en memoria).

### 1.2 Configurar Variables de Entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` y configura:

```env
AUTH_SECRET=<genera-un-secreto-aleatorio>
DATABASE_URL=<tu-url-de-base-de-datos>
UPSTASH_REDIS_REST_URL=<opcional-redis-url>
UPSTASH_REDIS_REST_TOKEN=<opcional-redis-token>
```

### 1.3 Configurar Base de Datos

```bash
# Generar cliente de Prisma
npm run db:generate

# Crear tablas en la base de datos
npm run db:push

# (Opcional) Abrir Prisma Studio
npm run db:studio
```

### 1.4 Verificar Build Local

```bash
npm run build
```

---

## 2. Despliegue en Vercel

### 2.1 Conectar Repositorio

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub

### 2.2 Configurar Variables de Entorno

En la configuración del proyecto en Vercel, agrega:

```
AUTH_SECRET=<tu-secreto-generado>
AUTH_URL=https://tu-dominio.vercel.app
DATABASE_URL=<tu-database-url>
```

**Opcional (Redis):**
```
UPSTASH_REDIS_REST_URL=<redis-url>
UPSTASH_REDIS_REST_TOKEN=<redis-token>
```

### 2.3 Configurar Base de Datos PostgreSQL

#### Opción A: Vercel Postgres

1. En tu proyecto de Vercel, ve a "Storage"
2. Click en "Create Database" → "Postgres"
3. Copia la `DATABASE_URL` automáticamente

#### Opción B: Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Ve a Settings → Database
3. Copia el "Connection String" (URI)
4. Agrega `?pgbouncer=true&connection_limit=1` al final de la URL

#### Opción C: Neon

1. Crea un proyecto en [neon.tech](https://neon.tech)
2. Copia la connection string
3. Asegúrate de incluir `?sslmode=require`

### 2.4 Configurar Redis (Opcional pero Recomendado)

1. Ve a [upstash.com](https://upstash.com)
2. Crea una base de datos Redis
3. Copia `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN`
4. Agrégalos a las variables de entorno de Vercel

### 2.5 Deploy

1. Click en "Deploy"
2. Espera a que termine el build
3. Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

---

## 3. Post-Despliegue

### 3.1 Migrar Base de Datos

Después del primer deploy:

```bash
# En tu máquina local, con DATABASE_URL apuntando a producción
npm run db:push
```

### 3.2 Crear Usuario Admin

Si usas Prisma, crea el primer usuario admin:

```bash
npm run db:studio
```

O crea un script de seed en `prisma/seed.ts`.

### 3.3 Verificar Logs de Seguridad

Los logs de seguridad se guardan automáticamente en:
- **Desarrollo**: Console
- **Producción**: Base de datos (tabla `security_logs`)

---

## 4. Configuración de Dominio Personalizado

### 4.1 En Vercel

1. Ve a tu proyecto → Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS records según Vercel

### 4.2 Actualizar AUTH_URL

Actualiza la variable de entorno:

```
AUTH_URL=https://tu-dominio.com
```

---

## 5. Monitoreo y Mantenimiento

### 5.1 Logs de Seguridad

Para ver intentos de login fallidos:

```typescript
import { getFailedLoginAttempts } from "@/lib/security-logger";

const attempts = await getFailedLoginAttempts("email@example.com");
```

### 5.2 Actividad Sospechosa

```typescript
import { getSuspiciousActivity } from "@/lib/security-logger";

const suspicious = await getSuspiciousActivity(24); // últimas 24 horas
```

### 5.3 Backup de Base de Datos

- **Vercel Postgres**: Automático
- **Supabase**: Automático (plan pro)
- **Neon**: Automático

---

## 6. Seguridad Post-Deploy

### ✅ Checklist de Seguridad

- [ ] AUTH_SECRET generado aleatoriamente
- [ ] Contraseña de admin cambiada
- [ ] DATABASE_URL configurado con SSL
- [ ] Redis configurado (opcional)
- [ ] HTTPS habilitado (automático en Vercel)
- [ ] Variables de entorno NO committeadas
- [ ] Logs de seguridad funcionando
- [ ] Rate limiting activo

### 🔒 Headers de Seguridad

Los siguientes headers están configurados automáticamente:

- Content-Security-Policy
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

---

## 7. Troubleshooting

### Error: "Prisma Client not found"

```bash
npm run db:generate
```

### Error: "Database connection failed"

Verifica que `DATABASE_URL` esté correctamente configurada y que incluya SSL:

```
?sslmode=require
```

### Error: "Auth secret not set"

Genera un nuevo secret:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## 8. Scripts Útiles

```bash
# Cambiar contraseña
npm run change-password

# Generar cliente Prisma
npm run db:generate

# Migrar base de datos
npm run db:push

# Abrir Prisma Studio
npm run db:studio

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

---

## 9. Costos Estimados

### Tier Gratuito (Hobby)

- **Vercel**: Gratis (hobby)
- **Supabase**: 500MB DB, gratis
- **Upstash Redis**: 10K comandos/día, gratis
- **Total**: $0/mes

### Tier Profesional

- **Vercel Pro**: $20/mes
- **Supabase Pro**: $25/mes
- **Upstash Redis**: ~$5/mes
- **Total**: ~$50/mes

---

## 10. Soporte

Para problemas o preguntas:
- Email: contacto@tecnodespegue.com
- GitHub Issues: [tu-repo]

---

**¡Listo para producción! 🎉**
