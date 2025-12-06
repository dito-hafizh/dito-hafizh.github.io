import { PUBLICATIONS } from "@/data";
import SeeMore from "@/ui/see-more";
import Link from "next/link";
import { PiVideoConferenceFill } from "react-icons/pi";

export default function PublicationSection() {
    return (
        <div className="flex flex-col gap-section">
            <div className="flex items-center gap-content">
                <PiVideoConferenceFill className="text-constant-lg font-bold" />
                <h1 className="text-constant-lg font-bold">Publications</h1>
            </div>
            {PUBLICATIONS.map((publication) => (
                <div key={publication.title} className="flex flex-col gap-content">
                    <div className="flex items-center gap-content">
                        <h2 className="text-constant-md font-bold">{publication.title}</h2>
                    </div>
                    <SeeMore text={publication.description} />
                    <Link href={publication.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                            View Publication
                        </button>
                    </Link>  
                </div>
            ))} 
        </div>
    );
}