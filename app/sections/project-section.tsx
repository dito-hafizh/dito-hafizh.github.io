import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import { GrProjects } from "react-icons/gr";

export default function ProjectSection() {
  return (
        <div className="flex flex-col gap-section">
          <div className="flex items-center gap-content">
            <GrProjects className="text-constant-lg font-bold" />
            <h1 className="text-constant-lg font-bold">Projects</h1>
          </div>
          {PROJECTS.map((project) => (
            <div key={project.name} className="flex flex-col gap-content">
              <div className="flex items-center gap-content">
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
              <div className="flex items-center gap-content">
                <h3 className="font-bold">Techonogy Stacks:</h3>
                <h3 className="font-bold text-gray-500">{project.stacks.filter(Boolean).join(", ")}</h3>
              </div>
              <p className="text-justify">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                  View Project
                </button>
              </a>  
            </div>
          ))}
        </div>
  );
}