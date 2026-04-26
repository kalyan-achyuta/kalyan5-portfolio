
import { Instagram, DiscIcon, Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#get-in-touch' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/achyutakalyan?igsh=MWp4MHd1ZnI3NnU3dQ==' },
    { icon: DiscIcon, label: 'Discord', href: 'https://discord.gg/wEsYP7rp' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent mb-6">
              AK
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Full-stack developer passionate about creating innovative solutions and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <h4 className="text-white font-semibold text-lg md:text-xl mb-6">
              Quick Links
            </h4>

            <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm md:text-base transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Me In */}
          <div className="lg:col-span-1 flex flex-col items-end">
            <h4 className="text-white font-semibold text-lg md:text-xl mb-6">
              Find Me In
            </h4>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-pink-400/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-105"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8 md:mb-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left flex items-center gap-2">
            <span>© Achyuta Kalyan. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-105"
          >
            <span>Back to Top</span>

            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

