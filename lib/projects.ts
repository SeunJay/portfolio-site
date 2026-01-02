import { StaticImageData } from "next/image";
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
    title: "Vaulta",
    description:
      "A cross-border payment solution that enables fast and secure international transactions for businesses and individuals.",
    // image:
    //   "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    image: vaulta,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://business.usevaulta.com/",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "EventPorte",
    description:
      "A modern event ticketing platform for creating, managing, and selling tickets with real-time revenue tracking",
    // image:
    //   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    image: eventporte,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/johndoe/task-manager",
    demo: "https://www.eventporte.com/",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Sloud",
    description:
      "Digital platform for merchants to manage stores, process payments, and track business analytics.",
    // image:
    //   "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    image: sloud,
    technologies: ["React", "Typescript", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/johndoe/weather-dashboard",
    demo: "https://front.sloud.app/",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Payaza Website",
    description: "The official website of Payaza Africa",
    // image:
    //   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    image: payaza,
    technologies: ["Nuxt", "Typescript", "Tailwind CSS", "Pinia"],
    github: "https://github.com/johndoe/task-manager",
    demo: "https://payaza.africa/",
    category: "Frontend",
  },
  {
    id: 5,
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
