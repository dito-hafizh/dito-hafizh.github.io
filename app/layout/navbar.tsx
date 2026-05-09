'use client';

import ProfilePic from '@/ui/profile-pic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import { GrCertificate, GrProjects } from 'react-icons/gr';
import { IoIosSchool } from 'react-icons/io';
import { PiVideoConferenceFill } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);

      const footer = document.getElementById('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (footerRect.top < windowHeight) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Work', id: 'work', icon: BsBriefcaseFill },
    { name: 'Education', id: 'education', icon: IoIosSchool },
    { name: 'Project', id: 'projects', icon: GrProjects },
    { name: 'Publication', id: 'publications', icon: PiVideoConferenceFill },
    { name: 'Certification', id: 'certifications', icon: GrCertificate },
  ];

  // Helper to determine Y translation
  const getYTranslation = () => {
    if (isFooterVisible) return 100;
    if (!isVisible) {
      // On mobile (bottom dock), hide by moving down. On desktop (top bar), hide by moving up.
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      return isMobile ? 100 : -100;
    }
    return 0;
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        y: getYTranslation(),
        opacity: isFooterVisible || !isVisible ? 0 : 1,
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`
        /* Mobile: Bottom Dock */
        fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-6 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-2xl pointer-events-none
        border border-white/10 bg-[#020606]/80
        
        /* Desktop: Top Navbar */
        md:top-0 md:right-0 md:bottom-auto md:left-0 md:translate-x-0 md:gap-0 md:rounded-none md:border-b md:px-0 md:py-4
        ${isScrolled ? 'md:bg-[#020606]/80 md:border-white/10' : 'md:bg-transparent md:border-transparent'}
      `}
      style={{
        boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      }}
    >
      {/* Profile Pic - Only visible on Desktop when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: -20 }}
            animate={{ width: 'auto', opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: -20 }}
            className="pointer-events-auto hidden overflow-hidden md:block mr-6 ml-8"
          >
            <Link href="#about" aria-label="Go to About">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <ProfilePic
                  width={40}
                  height={40}
                  className="h-10 w-10 cursor-pointer rounded-xl object-contain border border-white/10 shadow-[0_0_15px_rgba(19,146,38,0.2)]"
                />
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav Items Container */}
      <div className="flex items-center gap-6 md:gap-8 md:ml-auto md:mr-12">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              aria-label={`Go to ${item.name}`}
              href={`#${item.id}`}
              title={item.name}
              className="pointer-events-auto flex items-center justify-center text-sm font-bold tracking-wide uppercase text-gray-400 transition-colors duration-300 hover:text-accent"
            >
              {/* Mobile Icon */}
              <item.icon className="text-2xl md:hidden" />

              {/* Desktop Text */}
              <span className="hidden md:block">{item.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
