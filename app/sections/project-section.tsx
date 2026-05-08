'use client';

import { PROJECTS } from '@/data';
import SeeMore from '@/ui/see-more';
import Image from 'next/image';
import Link from 'next/link';
import { GrProjects } from 'react-icons/gr';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

export default function ProjectSection() {
  return (
    <div className="gap-6 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
          <GrProjects className="text-3xl text-accent" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.name} delay={0.1 * index} y={20} width="100%">
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="card-standard h-full group"
            >
              <div className="flex items-center gap-4 mb-4">
                {project.logo && (
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/30 transition-colors"
                  >
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </motion.div>
                )}
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stacks.map((stack) => (
                  <span key={stack} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-accent/5 text-accent/80 border border-accent/10 rounded">
                    {stack}
                  </span>
                ))}
              </div>

              <div className="text-gray-400 mb-6 flex-grow">
                <SeeMore text={project.description} />
              </div>

              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full text-sm text-center cursor-pointer"
                >
                  View Project
                </motion.div>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
