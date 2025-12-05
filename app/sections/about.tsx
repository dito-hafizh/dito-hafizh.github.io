'use client';

import { FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
    <div className="flex flex-row justify-center items-start gap-section">
        <div className="flex flex-col basis-1/2 gap-content">
            <h1 className="font-bold text-5xl">Dito Hafizh Indriarto,</h1>
            <h1 className="font-bold text-2xl">Software Engineer</h1>
            <h1 className="pt-section">
                Seasoned Software Engineer with 7+ years of experience architecting high-performance mobile and cloud solutions. 
                I combine deep expertise in native mobile development (Kotlin/Java) with modern cross-platform strategies using Flutter. 
                On the server side, I design and deploy scalable infrastructure on GCP or AWS, 
                utilizing Golang and Elixir to handle complex backend logic and data mining tasks.
            </h1>
        </div>
        <div className="flex flex-col basis-1/2 items-center">
            <div className="flex flex-col items-start gap-content">
                <h1 className="text-1xl">ditohafizh@gmail.com</h1>
                <h1 className="text-1xl">+62 857 3008 4960</h1>
                <h1 className="text-1xl">Surabaya, Indonesia</h1>
                <FaLinkedin className="text-5xl" />
            </div>
        </div>
    </div>
    );
}