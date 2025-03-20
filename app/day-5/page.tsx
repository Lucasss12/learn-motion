/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projets from "./projets.json";
import Link from "next/link";

export default function Page() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projets.map((projet) => (
          <motion.li
            key={projet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: projet.id * 0.2 }}
            layoutId={`card-${projet.id}`}
            className="border-2 rounded-3xl p-2 shadow-sm bg-white"
          >
            <motion.img
              src={projet.image}
              alt={projet.title}
              width={300}
              className="w-full rounded-2xl cursor-pointer"
              onClick={() => setSelectedProject(projet)}
            />
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <h1>{projet.title}</h1>
                <Link href={projet.link} className="text-gray-600 underline">
                  voir plus
                </Link>
              </div>
              {projet.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-md mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 1 }}  
            animate={{ opacity: 1 }}   
            exit={{ opacity: 1 }}      
            transition={{ duration: 0.25 }} 
            onClick={() => setSelectedProject(null)} 
          >
            <motion.div
              className="bg-white p-6 rounded-3xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2"
              onClick={(e) => e.stopPropagation()} 
              layoutId={`card-${selectedProject.id}`} 
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-2xl"
              />
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-xl font-bold">{selectedProject.title}</h2>
                <button
                  className="bg-red-500 text-white px-5 py-1 rounded-md"
                  onClick={() => setSelectedProject(null)} 
                >
                  Fermer
                </button>
              </div>
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-md mr-2"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
