import { useState } from 'react';

export function Resume() {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = ['Education', 'Experience', 'Professional Skills', 'Achievements'];

  const education = [
    {
      degree: 'B.Tech in ECE',
      institution: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology',
      score: '7.68 CGPA',
      description: 'The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.',
      year: '2017 - 2021',
      timeline: 'left',
    },
    {
      degree: 'MPC in XII',
      institution: 'Narayana Junior College',
      score: '91.8%',
      description: 'Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.',
      year: '2015 - 2017',
      timeline: 'left',
    },
    {
      degree: 'Secondary School Education (X)',
      institution: 'Dr. KKR Gowtham Concept School',
      score: '8.2 CGPA',
      description: 'Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.',
      year: '2014 - 2015',
      timeline: 'left',
    },
  ];

  const experience = [
    {
      role: 'Sr. Associate Consultant',
      company: 'Infosys',
      location: 'BENGALURU',
      description: 'Infosys enables businesses to accelerate digital transformation through cloud, AI, consulting, and next-generation technology solutions.',
      year: '2025 - PRESENT',
      timeline: 'right',
    },
    {
      role: 'Sr. Software Engineer',
      company: 'HCL Tech',
      location: 'BENGALURU',
      description: 'HCLTech empowers global enterprises with innovative digital engineering, AI-driven solutions, and scalable technology transformation services.',
      year: '2021 - 2025',
      timeline: 'right',
    },
  ];

  const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'SQL',
    'System Design',
  ];

  const achievements = [
    'Completed certifications in DSA, React, JavaScript, SQL & HLD from Scaler Academy',
    'Improved applications performance by 40%',
    'Worked on enterprise client projects across multiple domains (Banking/Healthcare/Aviation)',
    'Collaborated with and mentored junior developers across multiple projects',
  ];

  return (
    <section id="resume" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 py-20 px-6 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-pink-500 font-semibold text-xs md:text-sm tracking-widest">5+ YEARS OF EXPERIENCE</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16">My Resume</h2>

        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-400 mb-12 md:mb-16">
          {tabs.map((tab, index) => {
            const tabKey = tab.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeTab === tabKey;
            return (
              <span key={tab} className="inline-flex items-center gap-2">
                <button
                  onClick={() => setActiveTab(tabKey)}
                  className={`inline-flex items-center rounded-full px-3 py-2 transition-all duration-300 font-medium ${
                    isActive
                      ? 'bg-pink-500 text-white shadow-sm'
                      : 'bg-slate-900/70 text-gray-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
                {index < tabs.length - 1 && <span className="text-slate-500">/</span>}
              </span>
            );
          })}
        </div>

        <div className="space-y-8">
          {activeTab === 'education' && (
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700" />
              <div className="space-y-12">
                {education.map((item, index) => (
                  <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="hidden md:block absolute left-1/2 top-26 w-4 h-4 bg-pink-500 rounded-full border-2 border-slate-950 shadow-lg transform -translate-x-1/2" />
                    <div className={index % 2 === 1 ? 'md:order-2 md:text-left text-left' : 'md:order-1 md:text-right text-right'}>
                      <div className={`${index % 2 === 1 ? 'md:pr-8' : 'md:pl-8'} space-y-3`}>
                        <p className="text-pink-500 font-semibold text-xs md:text-sm">{item.year}</p>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{item.degree}</h3>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                      <div className="relative bg-slate-900/50 border border-slate-800/50 p-6 md:p-8 rounded-lg hover:border-pink-500/30 transition-all duration-300">
                        <p className="text-pink-500 font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                          <span className="text-lg">✓</span>
                          {item.score}
                        </p>
                        <p className="text-gray-300 font-semibold mb-3 text-sm">{item.institution}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'professional-skills' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800/50 hover:border-blue-400/30 rounded-lg p-4 md:p-6 text-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <p className="text-gray-300 font-semibold text-sm md:text-base">{skill}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700" />
              <div className="space-y-12">
                {experience.map((item, index) => (
                  <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="hidden md:block absolute left-1/2 top-30 w-4 h-4 bg-pink-500 rounded-full border-2 border-slate-950 shadow-lg transform -translate-x-1/2" />
                    <div className={index % 2 === 1 ? 'md:order-2 md:text-left text-left' : 'md:order-1 md:text-right text-right'}>
                      <div className={`${index % 2 === 1 ? 'md:pr-8' : 'md:pl-8'} space-y-3`}>
                        <p className="text-pink-500 font-semibold text-xs md:text-sm">{item.year}</p>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{item.role}</h3>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                      <div className="relative bg-slate-900/50 border border-slate-800/50 p-6 md:p-8 rounded-lg hover:border-pink-500/30 transition-all duration-300">
                        <p className="text-pink-500 font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                          <span className="text-lg">✓</span>
                          {item.location}
                        </p>
                        <p className="text-gray-300 font-semibold mb-3 text-sm">{item.company}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-4 md:p-6 hover:border-blue-400/40 transition-all duration-300"
                >
                  <p className="text-gray-300 text-sm md:text-base font-medium flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>
    </section>
  );
}
