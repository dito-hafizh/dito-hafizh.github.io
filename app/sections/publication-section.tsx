import { PUBLICATIONS } from '@/data';
import SeeMore from '@/ui/see-more';
import Link from 'next/link';
import { PiVideoConferenceFill } from 'react-icons/pi';

export default function PublicationSection() {
  return (
    <div className="gap-content md:gap-section flex flex-col">
      <div className="gap-content flex items-center">
        <PiVideoConferenceFill className="text-constant-md md:text-constant-lg font-bold" />
        <h1 className="text-constant-md md:text-constant-lg font-bold">
          Publications
        </h1>
      </div>
      {PUBLICATIONS.map((publication) => (
        <div key={publication.title} className="gap-content flex flex-col">
          <div className="gap-content flex items-center">
            <h2 className="text-constant-md font-bold">{publication.title}</h2>
          </div>
          <div className="card-standard">
            <div className="gap-content flex items-center">
              <h3 className="font-bold text-gray-500">{publication.date}</h3>
            </div>
            <SeeMore text={publication.description} />
            <Link
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                View Publication
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
