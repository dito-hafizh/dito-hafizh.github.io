import { CERTIFICATIONS } from '@/data/certification';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';

export default function CertificationSection() {
  return (
    <div className="gap-content md:gap-section flex flex-col">
      <div className="gap-content flex items-center">
        <GrCertificate className="text-constant-md md:text-constant-lg font-bold" />
        <h1 className="text-constant-md md:text-constant-lg font-bold">Certifications</h1>
      </div>
      {CERTIFICATIONS.map((certification) => (
        <div key={certification.name} className="gap-content flex flex-col">
          <div className="gap-content flex items-center">
            <FaGoogle className="text-constant-lg font-bold" />
            <h2 className="text-constant-md font-bold">
              {certification.name}
              {new Date(certification.endDate) < new Date() && ' (Expired)'}
            </h2>
          </div>
          <p className="font-bold text-gray-500">
            {certification.startDate} - {certification.endDate}
          </p>
          <Link
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
              View Certificate
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
