import { Code2, Network, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Network,
      title: 'Desining Scalable Systems',
      description: 'I design scalable, fault-tolerant systems using distributed architecture, caching, and performance-first principles.',
      color: 'text-pink-500',
    },
    {
      icon: Code2,
      title: 'Building High-Performance Web Apps',
      description: 'Building fast, responsive MERN applications with optimized APIs, efficient rendering, and clean architecture.',
      color: 'text-pink-500',
    },
    {
      icon: Zap,
      title: 'Optimization and Problem Solving',
      description: 'Solving complex problems using data structures and algorithms with a focus on efficiency and scalability.',
      color: 'text-pink-500',
    },
  ];

  return (
    <section id="features" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 py-20 px-6 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-pink-500 font-semibold text-xs md:text-sm tracking-widest">FEATURES</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16">What I Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur border border-slate-800/50 hover:border-blue-400/30 rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="group-hover:-translate-y-2 transition-transform duration-300">
                  <div className={`${feature.color} mb-4 inline-block`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">{feature.description}</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>
    </section>
  );
}
