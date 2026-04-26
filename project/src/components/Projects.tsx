import { Globe } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Investment Banking',
      company: 'Deutsche Bank',
      description: 'German Client. Developed the Brokerage and Advisory Sourcing Approach (BASA) project within Deutsche Bank\'s Investment &Advisory IT Department, enhancing operational efficiency.!',
      logo: '/projectOne.jpg',
      url: 'https://country.db.com/india/index?language_id=1&kid=india-sl.redirect-en.shortcut',
      color: 'text-blue-600',
    },
    {
      title: 'Health Care',
      company: 'AIA',
      description: 'Australian Client. Designed and implemented a Document Management System (DMS) that reduced document retrieval time by 30% and significantly enhanced organizational efficiency.!',
      logo: '/projectTwo.jpg',
      url: 'https://www.aia.com/en',
      color: 'text-pink-600',
    },
    {
      title: 'Insurance Banking',
      company: 'USAA',
      description: 'US Client. Developed and implemented scalable solutions at USAA, improving event data quality and reducing errors by 30% through enhanced validation and monitoring.!',
      logo: '/projectThree.png',
      url: 'https://www.usaa.com/?akredirect=true',
      color: 'text-blue-700',
    },
    {
      title: 'Aviation',
      company: 'Lufthansa',
      description: 'German Client. Developed a scalable data pipeline for Lufthansa\'s operations, improving data processing efficiency by 25% and enabling real-time analytics.!',
      logo: '/projectFour.png',
      url: 'https://www.lufthansa.com/in/en/homepage',
      color: 'text-yellow-600',
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 py-20 px-6 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-pink-500 font-semibold text-xs md:text-sm tracking-widest">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16">Client Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-lg overflow-hidden hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="bg-white h-40 md:h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={project.company}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-pink-500 font-bold text-xs md:text-sm tracking-widest">{project.title}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <Globe size={20} className="cursor-pointer" />
                  </a>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{project.company}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>
    </section>
  );
}
