'use client';

import { WORKS } from '@/data';
import Link from 'next/link';
import { Fragment } from 'react';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { RiHomeOfficeLine } from 'react-icons/ri';

export default function WorkSection() {
  return (
    <div className="gap-content md:gap-section flex flex-col">
      <div className="gap-content flex items-center">
        <HiOutlineOfficeBuilding className="text-constnat-md md:text-constant-lg font-bold" />
        <h1 className="text-constant-md md:text-constant-lg font-bold">
          Work Experience
        </h1>
      </div>
      {WORKS.map((work, index) => (
        <Fragment key={work.company}>
          <div className="gap-content flex flex-col">
            <h2 className="text-constant-md gap-content flex items-center font-bold">
              <RiHomeOfficeLine className="text-constant-md font-bold" />
              {work.link ? (
                <Link
                  href={work.link}
                  target="_blank"
                  className="transition-opacity hover:opacity-80"
                >
                  {work.company}
                </Link>
              ) : (
                work.company
              )}
            </h2>
            <h3 className='font-bold'>{[work.city, work.country].filter(Boolean).join(', ')}</h3>
            {work.positions.map((position) => (
              <div key={position.position} className="card-standard">
                <p className="font-bold text-gray-500">
                  {position.startDate} - {position.endDate}
                </p>
                <h3 className="font-bold">{position.position}</h3>
                <p className="text-justify">{position.description}</p>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
