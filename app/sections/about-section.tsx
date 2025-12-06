'use client';

import { ME } from '@/data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <div className="gap-section flex flex-row items-start justify-center">
      <div className="gap-content flex basis-1/2 flex-col">
        <h1 className="text-constant-lg font-bold">{ME.name}</h1>
        <h1 className="text-constant-md font-bold">{ME.profession}</h1>
        <h1 className="pt-section text-justify">{ME.description}</h1>
      </div>
      <div className="flex basis-1/2 flex-col items-center">
        <div className="gap-content flex flex-col items-start">
          <h1>{ME.email}</h1>
          <h1>{ME.phone}</h1>
          <h1>
            {ME.city}, {ME.country}
          </h1>
          <div className="gap-content flex flex-row">
            <FaLinkedin className="text-5xl" />
            <FaGithub className="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
