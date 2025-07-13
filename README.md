# Portfolio Website v2

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, particle effects, and an intuitive user experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 13, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Particle Effects**: Dynamic background particle system
- **Component Library**: Comprehensive UI components using Radix UI
- **Dark Theme**: Sleek dark mode design
- **Sections Include**:
  - Hero section with introduction
  - About section with personal information
  - Skills showcase
  - Professional timeline/journey
  - Contact form
  - Smooth scroll navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 13.5.1
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.2.2
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.3.3
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 12.23.0
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with Zod validation

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mayt-as/portfolio_v2.git
   cd portfolio_v2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3001`

## 🚀 Available Scripts

- `npm run dev` - Start the development server on port 3001
- `npm run build` - Build the application for production
- `npm run start` - Start the production server on port 3000
- `npm run preview` - Preview the built application
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
portfolio_v2/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/              # Reusable components
│   ├── effects/            # Visual effects components
│   │   └── ParticleBackground.tsx
│   ├── navigation/         # Navigation components
│   │   └── Navigation.tsx
│   ├── sections/           # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── TimelineSection.tsx
│   └── ui/                 # UI component library
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
└── config files           # Configuration files
```

## 🎨 Customization

### Colors
The project uses a custom color scheme with gradients. Main colors include:
- Background: `#121212` (Dark)
- Primary Gradient: `#00A3FF` to `#7B4DFF`
- Text: White/Light colors

### Components
All components are built with modularity in mind:
- **Sections**: Individual page sections that can be easily modified
- **UI Components**: Reusable components based on Radix UI
- **Effects**: Interactive visual elements

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add it to the main page in `app/page.tsx`
3. Update the navigation sections array

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Configuration

### Tailwind CSS
Configuration is in `tailwind.config.ts` with custom:
- Colors and gradients
- Animations
- Component variants

### Next.js
Configuration is in `next.config.js` for:
- Build optimization
- Image optimization
- Custom webpack settings

## 📄 License

This project is private and intended for personal use.

## 👨‍💻 Author

**Satyam Pandey**
- GitHub: [@mayt-as](https://github.com/mayt-as)
- LinkedIn: [satyampande](https://linkedin.com/in/satyampande)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📞 Support

If you have any questions or need help with the project, feel free to reach out through the contact form on the website or create an issue in the repository.

---

**Built with ❤️ using Next.js and TypeScript**
