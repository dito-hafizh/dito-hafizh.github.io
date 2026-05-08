export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="mt-4 pb-12 pt-8 border-t border-white/5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm font-medium tracking-wide">
          © <span suppressHydrationWarning>{currentYear}</span> <span className="text-white">Dito Hafizh</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium tracking-wide">
          <span>Crafted with</span>
          <span className="text-accent">❤️</span>
          <span>in Surabaya</span>
        </div>
      </div>
    </footer>
  );
}
