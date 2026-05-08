'use client';

import { EDUCATIONS } from '@/data';
import SeeMore from '@/ui/see-more';
import { IoIosSchool } from 'react-icons/io';
import { SiInternetcomputer } from 'react-icons/si';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

export default function EducationSection() {
  return (
    <div id="education" className="gap-6 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
          <IoIosSchool className="text-3xl text-accent" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          Education
        </h2>
      </div>
      <div className="space-y-8">
        {EDUCATIONS.map((education, index) => (
          <Reveal key={education.school} delay={0.1 * index} width="100%">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold text-gradient">{education.school}</h3>
                <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  {education.city}, {education.country}
                </span>
              </div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="card-standard relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: 10 }}
                      className="p-1.5 bg-white/5 rounded-lg border border-white/10"
                    >
                      <SiInternetcomputer className="text-xl text-accent" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{education.degree}</h4>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-white/5 rounded-full text-accent border border-accent/20 whitespace-nowrap">
                    {education.startDate} — {education.endDate}
                  </span>
                </div>
                <div className="text-gray-400 leading-relaxed">
                  <SeeMore text={education.description} />
                </div>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
