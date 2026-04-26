import { useState } from 'react';

export function Navbar() {
  const navItems = ['Home', 'Features', 'Projects', 'Resume', 'Get In Touch'];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 backdrop-blur-md bg-opacity-90 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          AK
        </div>

        <div className="hidden md:flex gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-xs md:text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden text-gray-300 hover:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800/50">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
