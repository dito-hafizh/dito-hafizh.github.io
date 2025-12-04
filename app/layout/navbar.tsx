import Link from 'next/link';

export default function Navbar() {
  const navItems: string[] = ['Resume', 'About', 'Portfolio'];

  return (
    <nav className="flex items-center justify-center space-x-8 py-4">
      {navItems.map((item) => (
        <Link
          key={item}
          aria-label={`Go to ${item}`}
          href={`#${item.toLowerCase()}`}
          title={item}
          className="font-bold text-black transition-colors duration-300 hover:text-neutral-500"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
