'use client';

import { PUBLICATIONS } from '@/data';
import Link from 'next/link';
import { PiVideoConferenceFill } from 'react-icons/pi';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

export default function PublicationSection() {
  return (
    <div className="h-full">
      <Reveal width="100%" y={10}>
        <motion.div 
          whileHover={{ y: -5 }}
          className="bento-card h-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <PiVideoConferenceFill className="text-2xl text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-white">Publications</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PUBLICATIONS.map((publication) => (
              <div 
                key={publication.title} 
                className="group bg-white/[0.02] p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                      <PiVideoConferenceFill className="text-xl text-accent" />
                    </div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{publication.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white leading-tight">{publication.title}</h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {publication.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-[10px] py-3 block text-center uppercase tracking-widest font-black"
                  >
                    View Publication
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
}
