import { PROJECTS } from '@/data';
import SeeMore from '@/ui/see-more';
import Image from 'next/image';
import Link from 'next/link';
import { GrProjects } from 'react-icons/gr';

export default function ProjectSection() {
  return (
    <div className="gap-content md:gap-section flex flex-col">
      <div className="gap-content flex items-center">
        <GrProjects className="text-constant-md md:text-constant-lg font-bold" />
        <h1 className="text-constant-md md:text-constant-lg font-bold">
          Projects
        </h1>
      </div>
      {PROJECTS.map((project) => (
        <div key={project.name} className="gap-section flex flex-col">
          <div className="gap-content flex items-center">
            {project.logo && (
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={50}
                height={50}
                className="object-contain"
              />
            )}
            <h2 className="text-constant-md font-bold">{project.name}</h2>
          </div>
          <div className="card-standard">
            <div className="gap-content flex items-center">
              <h3 className="font-bold">Techonogy Stacks:</h3>
              <h3 className="font-bold text-gray-500">
                {project.stacks.filter(Boolean).join(', ')}
              </h3>
            </div>
            <SeeMore text={project.description} />
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                View Project
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
