'use client';

import EducationSection from '@/sections/education-section';
import WorkSection from '@/sections/work-section';
import { Reveal } from '@/ui/reveal';
import { Fragment } from 'react';

export default function WorkEducationSection() {
  const sections = [WorkSection, EducationSection];

  return (
    <div className="gap-section md:gap-section-md flex flex-col items-start justify-center md:flex-row">
      {sections.map((SectionComponent, index) => (
        <Reveal key={index}>
          <Fragment key={index}>
            <div className="gap-content flex basis-1/2 flex-col">
              <SectionComponent />
            </div>
            {index < sections.length - 1 && (
              <div className="self-stretch border-l-2 border-gray-300"></div>
            )}
          </Fragment>
        </Reveal>
      ))}
    </div>
  );
}
