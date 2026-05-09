'use client';

import { ME } from '@/data';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiOutlineUser } from 'react-icons/hi';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

import ProfilePic from '@/ui/profile-pic';

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 h-full">
      <Reveal delay={0.1} width="100%">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bento-card bg-gradient-to-br from-white/[0.05] to-transparent h-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <HiOutlineUser className="text-2xl text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-white">Profile</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="cursor-pointer"
            >
              <ProfilePic
                className="h-32 w-32 rounded-3xl object-contain border border-white/10 shadow-2xl"
                width={128}
                height={128}
              />
            </motion.div>
            <div className="flex flex-col text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                {ME.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accent">
                {ME.profession}
              </h2>
              <p className="text-gray-400 mt-4 leading-relaxed max-w-2xl">
                {ME.description}
              </p>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
}

export function ContactCard() {
  return (
    <Reveal delay={0.5} width="100%">
      <motion.div 
        whileHover={{ y: -5 }}
        className="bento-card h-full flex flex-col justify-between"
      >
        <div className="space-y-4">
          <p className="text-accent font-bold tracking-widest uppercase text-[10px]">Reach Out</p>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white truncate">{ME.email}</h3>
            <h3 className="text-md font-medium text-gray-400">{ME.city}, {ME.country}</h3>
          </div>
        </div>
        
        <div className="flex flex-row gap-3 mt-8">
          {[
            { icon: FaLinkedin, href: ME.linkedin },
            { icon: FaGithub, href: ME.github },
            { icon: FaMedium, href: ME.medium }
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/5 rounded-2xl block hover:text-accent transition-all border border-white/5 hover:border-accent/20"
              >
                <social.icon className="text-xl" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}
