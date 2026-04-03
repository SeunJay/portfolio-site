import { StaticImageData } from "next/image";
import duduplugs from "../public/images/duduplugs.png";
import vaulta from "../public/images/vaulta.png";
import eventporte from "../public/images/eventporte.png";
import payaza from "../public/images/payaza.png";
import payazaBlog from "../public/images/payaza-blog.png";
import sloud from "../public/images/sloud.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  // image: string;
  image: StaticImageData;
  technologies: string[];
  github: string;
  demo: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Duduplugs",
    description:
      "An African-focused social platform blending engagement, commerce, and community hubs for music, dance, fashion, and culture.",

    image: duduplugs,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://app.duduplugs.com/",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Vaulta",
    description:
      "A cross-border payment solution that enables fast and secure international transactions for businesses and individuals.",

    image: vaulta,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://business.usevaulta.com/",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "EventPorte",
    description:
      "A modern event ticketing platform for creating, managing, and selling tickets with real-time revenue tracking",

    image: eventporte,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/johndoe/task-manager",
    demo: "https://www.eventporte.com/",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Sloud",
    description:
      "Digital platform for merchants to manage stores, process payments, and track business analytics.",
    image: sloud,
    technologies: ["React", "Typescript", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/johndoe/weather-dashboard",
    demo: "https://front.sloud.app/",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Payaza Website",
    description: "The official website of Payaza Africa",
    image: payaza,
    technologies: ["Nuxt", "Typescript", "Tailwind CSS", "Pinia"],
    github: "https://github.com/johndoe/task-manager",
    demo: "https://payaza.africa/",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Payaza Blog",
    description: "The official Blog site of Payaza Africa",
    // image:
    //   "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    image: payazaBlog,
    technologies: ["Nuxt", "Typescript", "Tailwind CSS", "Pinia"],
    github: "https://github.com/johndoe/ai-chat",
    demo: "https://blog.payaza.africa/",
    category: "Full Stack",
  },
];
