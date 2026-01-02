"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
    >
      <div className="relative h-64 w-full overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-fill group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
          {/* <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-semibold">
            {project.category}
          </span> */}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {/* <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
          >
            GitHub
          </Link> */}
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
