import { EDUCATIONS } from '@/data';
import SeeMore from '@/ui/see-more';
import { IoIosSchool } from 'react-icons/io';
import { RiHomeOfficeLine } from 'react-icons/ri';
import { SiInternetcomputer } from 'react-icons/si';

export default function EducationSection() {
  return (
    <div className="flex flex-col gap-section">
      <div className="flex items-center gap-content">
        <IoIosSchool className="text-constant-lg font-bold" />
        <h1 className="text-constant-lg font-bold">Education</h1>
      </div>
      {EDUCATIONS.map((education) => (
        <div key={education.school} className="flex flex-col gap-content">
          <div className="flex items-center gap-content">
            <RiHomeOfficeLine className="text-constant-lg font-bold" />
            <h2 className="text-constant-md font-bold">{education.school}</h2>
          </div>
          <h3>
            {education.city}, {education.country}
          </h3>
          <p className="font-bold text-gray-500">
            {education.startDate} - {education.endDate}
          </p>
          <div className="flex items-center gap-content">
            <SiInternetcomputer className="text-constant-md font-bold" />
            <h3 className="font-bold">{education.degree}</h3>
          </div>
          <SeeMore text={education.description} />
        </div>
      ))}
    </div>
  );
}
