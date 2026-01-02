# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive for all devices
- ⚡ Built with Next.js 15 App Router
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🚀 Optimized for performance

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Ready for Vercel

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section with animations
│   ├── About.tsx            # About section with skills
│   ├── Projects.tsx         # Projects section with filtering
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer component
│   └── ui/
│       └── ProjectCard.tsx  # Reusable project card
├── lib/
│   └── projects.ts          # Projects data
└── public/
    └── images/              # Image assets
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Sections

### Hero
- Animated introduction with fade-in and slide-up effects
- Call-to-action buttons
- Social media links

### About
- Personal introduction
- Skills showcase with animated cards
- Progress bars for different skill categories

### Projects
- Grid layout with 6 projects
- Filterable by category (All, Full Stack, Frontend, Backend)
- Hover effects on project cards
- Links to GitHub and live demos

### Contact
- Contact form with validation
- Contact information display
- Social media integration

## Customization

### Update Personal Information

1. **Name and Title:**
   - Edit `app/layout.tsx` for page metadata
   - Edit `components/Hero.tsx` for hero section
   - Edit `components/Footer.tsx` for footer

2. **Projects:**
   - Edit `lib/projects.ts` to add/modify projects

3. **Skills:**
   - Edit `components/About.tsx` to update skills array

4. **Contact Info:**
   - Edit `components/Contact.tsx` for contact details

5. **Social Links:**
   - Update URLs in `components/Hero.tsx`, `components/Contact.tsx`, and `components/Footer.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

## License

MIT License - feel free to use this template for your own portfolio!

## Author

John Doe - Full-Stack Developer

---

Built with ❤️ using Next.js 15
