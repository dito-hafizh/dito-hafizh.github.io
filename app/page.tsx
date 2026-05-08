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
    <div className="flex flex-col items-start justify-center pb-4">
      {sections.map(({ component: SectionComponent, id }, index) => (
        <Reveal key={id} width="100%" delay={0.1 * (index + 1)}>
          <section
            key={id}
            className="py-8 md:py-12 w-full"
            id={id}
          >
            <SectionComponent />
          </section>
        </Reveal>
      ))}
    </div>
  );
}
