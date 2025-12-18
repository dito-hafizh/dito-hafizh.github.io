export default function Footer() {
  return (
    <footer id="footer" className="gap-section py-section flex w-full flex-col">
      <hr className="border-t-2 border-gray-300" />
      <div className="flex w-full flex-col items-center md:flex-row">
        <div className="md:flex-1">
          <h1>© 2025 Dito Hafizh - All rights reserved</h1>
        </div>
        <div className="md:flex-1">
          <h1>
            Made with <span className="text-red-500">❤️</span>
          </h1>
        </div>
      </div>
    </footer>
  );
}
