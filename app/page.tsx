import AboutSection from '@/sections/about-section';
import CertificationSection from '@/sections/certification-section';
import ProjectSection from '@/sections/project-section';
import PublicationSection from '@/sections/publication-section';
import WorkEducationSection from '@/sections/work-education-section';
import { Reveal } from '@/ui/reveal';

export default function Home() {
  const sections = [
    { component: AboutSection, id: 'about' },
    { component: WorkEducationSection, id: 'work' },
    { component: ProjectSection, id: 'projects' },
    { component: PublicationSection, id: 'publications' },
    { component: CertificationSection, id: 'certifications' },
  ];

  return (
    <div className="flex flex-col items-start justify-center">
      {sections.map(({ component: SectionComponent, id }) =>
        id == 'work' ? (
          <section
            key={id}
            className="md:p-desktop p-mobile py-section w-full"
            id={id}
          >
            <SectionComponent />
          </section>
        ) : (
          <Reveal key={id}>
            <section
              key={id}
              className="md:p-desktop p-mobile py-section w-full"
              id={id}
            >
              <SectionComponent />
            </section>
          </Reveal>
        )
      )}
    </div>
  );
}
