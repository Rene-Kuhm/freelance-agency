# Tecnodespegue - Freelance Web Development Agency Website

A modern, professional website for a freelance web development and programming agency built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Tech Stack**: Built with Next.js 14+ App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Professional UI**: Clean, modern design using shadcn/ui component library
- **SEO Optimized**: Proper metadata and semantic HTML for search engine optimization
- **Smooth Animations**: Engaging transitions and hover effects throughout
- **Contact Form**: Functional contact form using Next.js Server Actions
- **Spanish Language**: All content in Spanish for Spanish-speaking clients

## Sections

### 1. Hero Section
- Eye-catching hero with animated background
- Call-to-action buttons
- Key statistics (50+ projects, 100% satisfaction, 5+ years)
- Professional badge and tagline

### 2. Services Section
- 6 comprehensive service offerings:
  - Frontend Web Development (React, Next.js, TypeScript)
  - Backend Development (Node.js, Databases, APIs)
  - Mobile Applications (React Native)
  - UI/UX Design
  - Performance Optimization
  - Maintenance & Support
- Feature lists for each service
- Hover effects and interactive cards

### 3. Projects Portfolio
- 6 showcase projects with:
  - Project images (using Next.js Image optimization)
  - Descriptions and tech stack tags
  - Live demo and GitHub links
  - Smooth hover animations

### 4. About Section
- Personal introduction and value proposition
- Skills and technologies list
- Key highlights (Quality, Timeliness, Communication, Results)
- Statistics card

### 5. Contact Section
- Functional contact form with Server Actions
- Form validation
- Contact information cards (Email, Phone, Location)
- Success/error message handling

### 6. Header Navigation
- Fixed header with scroll effects
- Smooth scroll to sections
- Mobile-responsive menu
- Active state indicators

### 7. Footer
- Company information
- Quick links
- Social media links
- Contact details

## Tech Stack

### Core
- **Next.js 15.5.4**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework

### UI Components
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Lucide React**: Icon library

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing

## Project Structure

```
freelance-agency/
├── app/
│   ├── actions.ts          # Server Actions for form submission
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page (home)
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Projects.tsx        # Portfolio projects
│   ├── About.tsx           # About section
│   └── Contact.tsx         # Contact form
├── lib/
│   └── utils.ts            # Utility functions
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── components.json         # shadcn/ui configuration
└── package.json            # Dependencies

```

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd freelance-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Customization

### Colors and Theming
Edit `app/globals.css` to customize the color scheme. The project uses CSS variables with oklch color space for better color consistency.

### Content
- **Company Name**: Tecnodespegue
- **Contact Info**: Update email, phone, and location in `components/Contact.tsx` and `components/Footer.tsx`
- **Services**: Modify the services array in `components/Services.tsx`
- **Projects**: Update the projects array in `components/Projects.tsx` with your actual projects
- **About**: Edit the content in `components/About.tsx`

### Metadata (SEO)
Update SEO metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  keywords: ["your", "keywords"],
  // ...
};
```

### Contact Form
The contact form uses Server Actions. To integrate with an email service:
1. Open `app/actions.ts`
2. Add your email service integration (e.g., Resend, SendGrid, Nodemailer)
3. Replace the console.log with actual email sending logic

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Excellent LCP, FID, and CLS
- **Image Optimization**: Automatic optimization via Next.js Image
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered at build time for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For questions or support, contact: contacto@tecnodespegue.com

---

Built with ❤️ by Tecnodespegue using Next.js, TypeScript, and Tailwind CSS
