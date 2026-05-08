'use client';

import { WORKS } from '@/data';
import Link from 'next/link';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

export default function WorkSection() {
  return (
    <div className="gap-6 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
          <HiOutlineOfficeBuilding className="text-3xl text-accent" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          Work Experience
        </h2>
      </div>
      <div className="space-y-8">
        {WORKS.map((work) => (
          <div key={work.company} className="flex flex-col gap-3">
            <Reveal width="100%" y={10}>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  {work.link ? (
                    <Link
                      href={work.link}
                      target="_blank"
                      className="text-gradient hover:opacity-80 transition-opacity"
                    >
                      {work.company}
                    </Link>
                  ) : (
                    <span className="text-gradient">{work.company}</span>
                  )}
                </h3>
                <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  {[work.city, work.country].filter(Boolean).join(', ')}
                </span>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {work.positions.map((position, pIdx) => (
                <Reveal key={position.position} delay={0.1 * pIdx} width="100%">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="card-standard relative overflow-hidden group h-full"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{position.position}</h4>
                      <span className="text-sm font-medium px-3 py-1 bg-white/5 rounded-full text-accent border border-accent/20">
                        {position.startDate} — {position.endDate}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{position.description}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
