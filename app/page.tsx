import AboutSection from '@/sections/about-section';
import ProjectSection from '@/sections/project-section';
import WorkEducationSection from '@/sections/work-education-section';
import CertificationSection from './sections/certification-section';
import PublicationSection from './sections/publication-section';

export default function Home() {
  const sections = [
    { component: AboutSection, id: 'about' },
    { component: WorkEducationSection, id: 'work-education' },
    { component: ProjectSection, id: 'projects' },
    { component: PublicationSection, id: 'publications' },
    { component: CertificationSection, id: 'certifications' },
  ];

  return (  
    <div className="flex flex-col items-start justify-center">
      {sections.map(({ component: SectionComponent, id }) => (
        <div key={id} className="p-desktop py-section w-full" id={id}>
          <SectionComponent />
        </div>
      ))}
    </div>
  );
}
