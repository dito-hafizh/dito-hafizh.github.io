import { EDUCATIONS } from '@/data';
import SeeMore from '@/ui/see-more';
import { IoIosSchool } from 'react-icons/io';
import { RiHomeOfficeLine } from 'react-icons/ri';
import { SiInternetcomputer } from 'react-icons/si';

export default function EducationSection() {
  return (
    <div id="education" className="gap-content md:gap-section flex flex-col">
      <div className="gap-content flex items-center">
        <IoIosSchool className="text-constant-md md:text-constant-lg font-bold" />
        <h1 className="text-constant-md md:text-constant-lg font-bold">
          Education
        </h1>
      </div>
      {EDUCATIONS.map((education) => (
        <div key={education.school} className="gap-content flex flex-col">
          <div className="gap-content flex items-center">
            <RiHomeOfficeLine className="text-constant-lg font-bold" />
            <h2 className="text-constant-md font-bold">{education.school}</h2>
          </div>
          <h3 className="font-bold">
            {education.city}, {education.country}
          </h3>
          <div className="card-standard">
            <p className="font-bold text-gray-500">
              {education.startDate} - {education.endDate}
            </p>
            <div className="gap-content flex items-center">
              <SiInternetcomputer className="text-constant-md font-bold" />
              <h3 className="font-bold">{education.degree}</h3>
            </div>
            <SeeMore text={education.description} />
          </div>
        </div>
      ))}
    </div>
  );
}
