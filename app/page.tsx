import AboutSection from '@/sections/about-section';
import ProjectSection from '@/sections/project-section';
import WorkEducationSection from '@/sections/work-education-section';
import PublicationSection from './sections/publication-section';

export default function Home() {
  const sections = [AboutSection, WorkEducationSection, ProjectSection, PublicationSection];

  return (  
    <div className="flex flex-col items-start justify-center">
      {sections.map((SectionComponent, index) => (
        <div key={index} className="p-desktop py-section w-full">
          <SectionComponent />
        </div>
      ))}
    </div>
  );
}
