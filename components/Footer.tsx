import Link from "next/link";
import { Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:renekuhm2@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tecnodespegue
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transformo ideas en soluciones digitales. Desarrollo web moderno y
              programación de alta calidad para impulsar tu negocio al siguiente
              nivel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#servicios"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre-mi"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:renekuhm2@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  renekuhm2@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+542334409838"
                  className="hover:text-primary transition-colors"
                >
                  +54 2334 409838
                </a>
              </li>
              <li className="pt-2">
                Eduardo Castex, La Pampa, Argentina
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>
            &copy; {currentYear} Tecnodespegue. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
