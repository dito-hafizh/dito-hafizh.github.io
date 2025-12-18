'use client';

import { ME } from '@/data';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

import ProfilePic from '@/ui/profile-pic';

export default function AboutSection() {
  return (
    <div className="gap-section flex flex-col items-center justify-center md:flex-row md:items-end">
      <div className="gap-content-sm md:gap-content flex basis-1/2 flex-col">
        <hr className="py-content border-t-2 border-gray-300 md:hidden" />
        <div className="flex flex-row items-center gap-4">
          {/* Profile Pic visible only on desktop here */}
          <div className="hidden md:block">
            <ProfilePic
              className="h-30 w-30 rounded-full object-contain"
              width={120}
              height={120}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-constant-md md:text-constant-lg font-bold">
              {ME.name}
            </h1>
            <h1 className="text-constant-md md:text-constant-lg font-bold text-nowrap">
              {ME.profession}
            </h1>
          </div>
        </div>
        <h1 className="pt-content md:pt-section text-justify">
          {ME.description}
        </h1>
      </div>
      <div className="flex basis-1/2 flex-col items-center">
        <div className="gap-content-sm md:gap-content flex flex-col items-center md:items-start">
          <h1>{ME.email}</h1>
          <h1>{ME.phone}</h1>
          <h1>
            {ME.city}, {ME.country}
          </h1>
          <div className="gap-content-sm md:gap-content flex flex-row">
            <Link href={ME.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-constant-md md:text-5xl" />
            </Link>
            <Link href={ME.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-constant-md md:text-5xl" />
            </Link>
            <Link href={ME.medium} target="_blank" rel="noopener noreferrer">
              <FaMedium className="text-constant-md md:text-5xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
