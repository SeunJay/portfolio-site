"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "Tailwind CSS",
    "GraphQL",
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hello! I'm Seun Jay
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I’m a passionate Frontend-focused Full-Stack Engineer with over 6
              years of professional experience building fast, reliable, and
              scalable web applications. I’m skilled at transforming complex
              product requirements into simple, intuitive, and high-impact user
              experiences.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I specialize in React, Next.js, TypeScript, Tailwind CSS, and
              modern frontend architectures — and I also work confidently across
              the backend using Node.js, Express/NestJS, and MongoDB. My
              experience spans building B2B payment platforms, event & ticketing
              products, KYB/KYC customer compliance flows, analytics dashboards,
              and reusable SDK-style UI components.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I’ve delivered production systems end-to-end, and collaborated
              with cross-functional teams to take products from concept to
              deployment — all while maintaining strong user-centric thinking
              and code quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 text-center font-semibold text-gray-700 hover:shadow-lg transition-shadow"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* <div className="mt-8 space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    Frontend Development
                  </span>
                  <span className="text-gray-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "95%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="bg-blue-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    Backend Development
                  </span>
                  <span className="text-gray-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "90%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="bg-purple-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">
                    DevOps & Cloud
                  </span>
                  <span className="text-gray-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "85%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="bg-indigo-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
