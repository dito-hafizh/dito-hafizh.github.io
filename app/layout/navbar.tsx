import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Work', id: 'work-education' },
    { name: 'Education', id: 'work-education' },
    { name: 'Project', id: 'projects' },
    { name: 'Publication', id: 'publications' },
    { name: 'Certification', id: 'certifications' },
  ];

  return (
    <nav className="flex items-center justify-center space-x-8 py-4">
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
    </nav>
  );
}
