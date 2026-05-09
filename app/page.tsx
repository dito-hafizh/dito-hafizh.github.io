import AboutSection, { ContactCard } from '@/sections/about-section';
import CertificationSection from '@/sections/certification-section';
import ProjectSection from '@/sections/project-section';
import PublicationSection from '@/sections/publication-section';
import EducationSection from '@/sections/education-section';
import WorkSection from '@/sections/work-section';

export default function Home() {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
        {/* Row 1: Profile & Contact */}
        <div className="md:col-span-3 lg:col-span-3" id="about">
          <AboutSection />
        </div>
        
        <div className="md:col-span-1 lg:col-span-1">
          <ContactCard />
        </div>

        {/* Row 2: Experience, Education, Certifications */}
        <div className="md:col-span-4 lg:col-span-2" id="work">
          <WorkSection />
        </div>

        <div className="md:col-span-2 lg:col-span-1" id="education">
          <EducationSection />
        </div>

        <div className="md:col-span-2 lg:col-span-1" id="certifications">
          <CertificationSection />
        </div>

        {/* Row 3: Projects & Publications */}
        <div id="projects" className="md:col-span-4 lg:col-span-2">
          <ProjectSection />
        </div>

        <div id="publications" className="md:col-span-4 lg:col-span-2">
          <PublicationSection />
        </div>
      </div>
    </div>
  );
}
