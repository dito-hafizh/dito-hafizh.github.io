'use client';

import { CERTIFICATIONS } from '@/data/certification';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import { Reveal } from '@/ui/reveal';
import { useEffect, useState } from 'react';

export default function CertificationSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="gap-6 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
          <GrCertificate className="text-3xl text-accent" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((certification, index) => {
          const isExpired = isMounted ? new Date(certification.endDate) < new Date() : false;
          
          return (
            <Reveal key={certification.name} delay={0.1 * index} width="100%">
              <div className="card-standard group h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/30 transition-colors">
                    <FaGoogle className="text-2xl text-accent" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {isMounted && (
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${isExpired ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-accent/10 text-accent border-accent/20'}`}>
                        {isExpired ? 'Expired' : 'Active'}
                      </span>
                    )}
                    <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                      {certification.startDate} - {certification.endDate}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-6 leading-snug group-hover:text-accent transition-colors">
                  {certification.name}
                </h3>
                <div className="mt-auto">
                  <Link
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-xs py-2 block text-center"
                  >
                    View Certificate
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
