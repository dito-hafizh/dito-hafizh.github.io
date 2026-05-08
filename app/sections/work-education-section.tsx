'use client';

import EducationSection from '@/sections/education-section';
import WorkSection from '@/sections/work-section';
import { Reveal } from '@/ui/reveal';

export default function WorkEducationSection() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Reveal width="100%">
        <section id="work">
          <WorkSection />
        </section>
      </Reveal>
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Reveal width="100%">
        <section id="education">
          <EducationSection />
        </section>
      </Reveal>
    </div>
  );
}
