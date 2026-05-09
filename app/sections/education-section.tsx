'use client';

import { EDUCATIONS } from '@/data';
import { IoIosSchool } from 'react-icons/io';
import { SiInternetcomputer } from 'react-icons/si';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

export default function EducationSection() {
  return (
    <div className="h-full">
      <Reveal width="100%" y={10}>
        <motion.div 
          whileHover={{ y: -5 }}
          className="bento-card h-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <IoIosSchool className="text-2xl text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {EDUCATIONS.map((education) => (
              <div 
                key={education.school} 
                className="group bg-white/[0.02] p-5 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <IoIosSchool className="text-xl text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                      {education.startDate} — {education.endDate}
                    </span>
                    <h3 className="text-md font-bold text-white leading-tight">{education.school}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <SiInternetcomputer className="text-sm text-accent/70" />
                    <h4 className="text-sm font-bold text-gray-300">{education.degree}</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
}
