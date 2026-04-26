import { Typewriter } from './Typewriter';

export function Hero() {
  const roles = [
    'Professional Coder',
    'UI/UX Designer',
    'Fullstack Web Developer',
    'System Designer',
  ];

  const skills = [
    { name: 'JS', color: 'hover:text-yellow-300', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'DSA', color: 'hover:text-green-400', url: 'https://dsaanimator.com/#linkedlist' },
    { name: 'MERN', color: 'hover:text-yellow-400', url: 'https://www.geeksforgeeks.org/mern/understand-mern-stack/' },
    { name: 'SYSTEM DESIGN', color: 'hover:text-blue-400', url: 'https://github.com/ashishps1/awesome-system-design-resources?utm_source=chatgpt.com' },
  ];

  return (
    <>
      <section id="home" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 py-20 px-6 md:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <div>
                <p className="text-blue-400 font-medium mb-2 flex items-center gap-2 text-xs md:text-sm">
                  <span className="inline-block w-6 md:w-8 h-px bg-blue-400"></span>
                  Welcome to my portfolio
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                  <span className="block text-gray-100 mb-1 md:mb-2">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Kalyan
                  </span>
                </h1>
              </div>

              <div className="h-12 md:h-14 flex items-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  <span className="text-blue-400">
                    <Typewriter words={roles} speed={80} delayBetweenWords={2500} />
                  </span>
                  <span className="animate-pulse text-blue-400">|</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Intend to build great career within high-tech corporate environment surrounded by driven individuals and dedicated professionals. Ready to contribute and make meaningful impact.
              </p>

              <div>
                <p className="text-gray-300 font-semibold mb-3 text-xs md:text-sm">BEST SKILL ON</p>
                <div className="flex gap-3 md:gap-4 flex-wrap">
                  {skills.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-slate-800 hover:bg-slate-700 text-gray-300 ${skill.color} px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer text-xs md:text-sm`}
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-80 sm:h-96 md:h-[28rem] order-1 md:order-2 md:max-w-sm md:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-blue-400/30 shadow-2xl">
                <img
                  src="/image.png"
                  alt="Kalyan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </div>
    </>
  );
}
