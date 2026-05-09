'use client';

import { PROJECTS } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { GrProjects } from 'react-icons/gr';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

export default function ProjectSection() {
  return (
    <div className="h-full">
      <Reveal width="100%" y={10}>
        <motion.div 
          whileHover={{ y: -5 }}
          className="bento-card h-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <GrProjects className="text-2xl text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-white">Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.map((project) => (
              <div 
                key={project.name}
                className="group flex flex-col h-full bg-white/[0.02] p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {project.logo && (
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/30 transition-colors">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stacks.map((stack) => (
                    <span key={stack} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded-md">
                      {stack}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto block"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-[10px] py-2.5 text-center cursor-pointer tracking-widest uppercase font-black"
                  >
                    View Project
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
}
