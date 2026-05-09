'use client';

import { WORKS } from '@/data';
import Link from 'next/link';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

export default function WorkSection() {
  return (
    <div className="h-full">
      <Reveal width="100%" y={10}>
        <motion.div 
          whileHover={{ y: -5 }}
          className="bento-card h-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <HiOutlineOfficeBuilding className="text-2xl text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
            {WORKS.map((work) => (
              <div key={work.company} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center z-10 shadow-xl">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
                
                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {work.link ? (
                      <Link href={work.link} target="_blank" className="hover:text-accent transition-colors">
                        {work.company}
                      </Link>
                    ) : (
                      work.company
                    )}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    {[work.city, work.country].filter(Boolean).join(', ')}
                  </p>
                </div>

                <div className="space-y-6">
                  {work.positions.map((position) => (
                    <div 
                      key={position.position} 
                      className="group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                        <h4 className="text-md font-bold text-gray-200 group-hover:text-accent transition-colors">{position.position}</h4>
                        <span className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded-md text-accent border border-accent/20 whitespace-nowrap w-fit">
                          {position.startDate} — {position.endDate}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
}
