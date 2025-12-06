"use client";

import ProfilePic from '@/ui/profile-pic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', id: 'work-education' },
    { name: 'Education', id: 'work-education' },
    { name: 'Project', id: 'projects' },
    { name: 'Publication', id: 'publications' },
    { name: 'Certification', id: 'certifications' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/30 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isScrolled ? 'w-10 opacity-100 mr-4' : 'w-0 opacity-0 mr-0'
        }`}
      >
        <Link href="#about" aria-label="Go to About">
          <ProfilePic width={40} height={40} className="w-10 h-10 rounded-full object-contain cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            aria-label={`Go to ${item.name}`}
            href={`#${item.id}`}
            title={item.name}
            className="font-bold text-black transition-colors duration-300 hover:text-neutral-500"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
