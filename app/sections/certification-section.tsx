'use client';

import { CERTIFICATIONS } from '@/data/certification';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CertificationSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const parseDate = (dateStr: string) => {
    if (!dateStr) return new Date(0);
    const normalizedDateStr = dateStr.trim().toLowerCase();
    if (normalizedDateStr === 'present') return new Date();
    
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) return date;

    // Fallback for formats like "Jan 2022"
    const parts = normalizedDateStr.split(/\s+/);
    if (parts.length === 2) {
      const months: { [key: string]: number } = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
      };
      const monthStr = parts[0].slice(0, 3);
      const month = months[monthStr];
      const year = parseInt(parts[1]);
      if (month !== undefined && !isNaN(year)) {
        // Return the last day of the month to be safe
        return new Date(year, month + 1, 0);
      }
    }
    return new Date(0); // Fallback to epoch if parsing fails
  };

  return (
    <div className="h-full">
      <Reveal width="100%" y={10}>
        <motion.div 
          whileHover={{ y: -5 }}
          className="bento-card h-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <GrCertificate className="text-2xl text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-white">Certifications</h2>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((certification) => {
              const expirationDate = parseDate(certification.endDate);
              const isExpired = isMounted ? expirationDate < new Date() : false;
              
              return (
                <div 
                  key={certification.name}
                  className="group bg-white/[0.02] p-5 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 flex flex-col justify-between gap-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/30 transition-colors">
                        <FaGoogle className="text-xl text-accent" />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {isMounted && (
                          <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${isExpired ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-accent/10 text-accent border-accent/20'}`}>
                            {isExpired ? 'Expired' : 'Active'}
                          </span>
                        )}
                        <span className="text-[9px] font-bold text-gray-500 whitespace-nowrap uppercase tracking-tighter">
                          {certification.startDate} - {certification.endDate}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-md font-bold text-white leading-tight group-hover:text-accent transition-colors">
                      {certification.name}
                    </h3>
                  </div>
                  <Link
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-[9px] py-2.5 block text-center uppercase tracking-widest font-black"
                  >
                    Verify
                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
}
