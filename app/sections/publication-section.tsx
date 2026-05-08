'use client';

import { PUBLICATIONS } from '@/data';
import SeeMore from '@/ui/see-more';
import Link from 'next/link';
import { PiVideoConferenceFill } from 'react-icons/pi';
import { Reveal } from '@/ui/reveal';

export default function PublicationSection() {
  return (
    <div className="gap-6 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
          <PiVideoConferenceFill className="text-3xl text-accent" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          Publications
        </h2>
      </div>
      <div className="space-y-6">
        {PUBLICATIONS.map((publication, index) => (
          <Reveal key={publication.title} delay={0.1 * index} width="100%">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-gradient">{publication.title}</h3>
              <div className="card-standard relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-semibold text-accent/80 tracking-wider uppercase">
                    {publication.date}
                  </span>
                  <div className="text-gray-400 leading-relaxed">
                    <SeeMore text={publication.description} />
                  </div>
                  <div className="mt-2">
                    <Link
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm px-8 inline-block"
                    >
                      View Publication
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
