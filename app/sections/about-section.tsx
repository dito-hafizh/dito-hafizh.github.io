'use client';

import { ME } from '@/data';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { Reveal } from '@/ui/reveal';
import { motion } from 'framer-motion';

import ProfilePic from '@/ui/profile-pic';

export default function AboutSection() {
  return (
    <div className="gap-6 flex flex-col items-center justify-center md:flex-row md:items-start">
      <div className="gap-4 flex basis-3/5 flex-col">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <Reveal delay={0.1}>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="hidden md:block cursor-pointer"
            >
              <ProfilePic
                className="h-32 w-32 rounded-2xl object-contain border border-white/10 shadow-[0_0_30px_rgba(19,146,38,0.1)]"
                width={128}
                height={128}
              />
            </motion.div>
          </Reveal>
          <div className="flex flex-col text-center md:text-left">
            <Reveal delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {ME.name}
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold text-gradient mt-1">
                {ME.profession}
              </h2>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.4} width="100%">
          <motion.div 
            whileHover={{ y: -2 }}
            className="card-standard text-lg leading-relaxed text-gray-300"
          >
            {ME.description}
          </motion.div>
        </Reveal>
      </div>
      <div className="flex basis-2/5 flex-col w-full">
        <Reveal delay={0.5} width="100%">
          <motion.div 
            whileHover={{ y: -2 }}
            className="card-standard h-full justify-center"
          >
            <div className="space-y-3 text-center md:text-left">
              <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">Contact Information</p>
              <h3 className="text-lg font-semibold">{ME.email}</h3>
              <h3 className="text-lg font-semibold">{ME.phone}</h3>
              <h3 className="text-lg font-semibold text-gray-400">
                {ME.city}, {ME.country}
              </h3>
            </div>
            <div className="flex flex-row gap-4 mt-6 justify-center md:justify-start">
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
                    className="p-3 bg-white/5 rounded-xl block hover:text-accent transition-colors border border-white/5 hover:border-accent/20 shadow-sm"
                  >
                    <social.icon className="text-2xl" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}
