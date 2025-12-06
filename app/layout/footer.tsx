export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col w-full gap-section py-section">
      <hr className="border-t-2 border-gray-300" />
      <div className="w-full flex flex-col md:flex-row items-center">
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
