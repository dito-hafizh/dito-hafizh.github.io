'use client';

import ProfilePic from '@/ui/profile-pic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import { GrCertificate, GrProjects } from 'react-icons/gr';
import { IoIosSchool } from 'react-icons/io';
import { PiVideoConferenceFill } from 'react-icons/pi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if footer is visible
      const footer = document.getElementById('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // If the top of the footer is visible in the viewport
        if (footerRect.top < windowHeight) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', id: 'work', icon: BsBriefcaseFill },
    { name: 'Education', id: 'education', icon: IoIosSchool },
    { name: 'Project', id: 'projects', icon: GrProjects },
    { name: 'Publication', id: 'publications', icon: PiVideoConferenceFill },
    { name: 'Certification', id: 'certifications', icon: GrCertificate },
  ];

  return (
    <nav
      className={`/* Mobile: Bottom Dock */ /* Desktop: Top Navbar */ pointer-events-none fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-6 rounded-full border border-white/20 bg-white/50 px-6 py-3 shadow-lg backdrop-blur-md transition-all duration-300 md:top-0 md:right-0 md:bottom-auto md:left-0 md:translate-x-0 md:gap-0 md:rounded-none md:border-none md:px-0 md:py-4 ${isScrolled ? 'pointer-events-auto md:bg-white/30 md:shadow-sm md:backdrop-blur-md' : 'md:bg-transparent md:shadow-none'} ${isFooterVisible ? 'translate-y-[200%] opacity-0 md:translate-y-0 md:opacity-100' : ''}`}
    >
      {/* Profile Pic - Only visible on Desktop when scrolled */}
      <div
        className={`pointer-events-auto hidden overflow-hidden transition-all duration-300 ease-in-out md:block ${
          isScrolled ? 'mr-4 w-10 opacity-100' : 'mr-0 w-0 opacity-0'
        }`}
      >
        <Link href="#about" aria-label="Go to About">
          <ProfilePic
            width={40}
            height={40}
            className="h-10 w-10 cursor-pointer rounded-full object-contain"
          />
        </Link>
      </div>

      {/* Nav Items Container */}
      <div className="flex items-center gap-6 md:gap-0 md:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            aria-label={`Go to ${item.name}`}
            href={`#${item.id}`}
            title={item.name}
            className="pointer-events-auto flex items-center justify-center font-bold text-black transition-colors duration-300 hover:text-neutral-500"
          >
            {/* Mobile Icon */}
            <item.icon className="text-2xl md:hidden" />

            {/* Desktop Text */}
            <span className="hidden md:block">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
