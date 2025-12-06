import { CERTIFICATIONS } from "@/data/certification";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

export default function CertificationSection() {
    return (
            <div className="flex flex-col gap-section">
              <div className="flex items-center gap-content">
                <GrCertificate className="text-constant-lg font-bold" />
                <h1 className="text-constant-lg font-bold">Certifications</h1>
              </div>
              {CERTIFICATIONS.map((certification) => (
                <div key={certification.name} className="flex flex-col gap-content">
                  <div className="flex items-center gap-content">
                    <FaGoogle className="text-constant-lg font-bold" />
                <h2 className="text-constant-md font-bold">
                  {certification.name} 
                  {new Date(certification.endDate) < new Date() && " (Expired)"}
                </h2>
                  </div>
                  <p className="font-bold text-gray-500">
                    {certification.startDate} - {certification.endDate}
                  </p>  
                  <Link href={certification.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                      View Certificate
                    </button>
                  </Link>
                </div>
              ))}
            </div>
    );
}   