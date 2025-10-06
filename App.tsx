
import React from 'react';

// --- DATA ---
const projects = [
  {
    title: "Online Order Pro",
    url: "https://autosystem.web.konten.site/",
  },
  {
    title: "Report Generator PDF",
    url: "https://reportmedia.konten.site/",
  },
  {
    title: "Gold Calculation & Customer Database",
    url: "https://mgsbsystem.konten.site/",
  },
];

// --- SVG ICONS ---
const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.19a.75.75 0 00-.053 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

// --- COMPONENTS ---
const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <div className="relative mb-8">
        <div className="p-1.5 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full">
          <div className="bg-slate-900 p-1 rounded-full">
            <img
              src="https://raw.githubusercontent.com/pakudin999/portfolio-fikrie/main/photofikrie.png"
              alt="Mohamad Fikrie"
              className="w-48 h-48 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-2 gradient-text bg-gradient-to-r from-cyan-400 to-teal-500">
        Mohamad Fikrie
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-slate-400 mb-4">
        Content Creator & AI Enthusiast
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mb-8"></div>
      <div className="max-w-2xl p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
        <p className="text-slate-300 leading-relaxed">
          Seorang kreatif multimedia yang bersemangat dari Johor, Malaysia, dengan diploma dalam Aplikasi Multimedia. Saya menggabungkan kemahiran suntingan terkini dengan inovasi AI untuk menghidupkan penceritaan digital.
        </p>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-8 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700/50 hover:border-cyan-400/50 transform transition-all duration-300 ease-in-out hover:-translate-y-2 group"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <ExternalLinkIcon className="w-6 h-6 text-slate-500 group-hover:text-teal-400 transition-colors duration-300" />
      </div>
    </a>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text bg-gradient-to-r from-cyan-400 to-teal-500">
            My Projects
          </h2>
          <p className="text-slate-500">You can buy and custom.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} url={project.url} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-8 text-center text-slate-500 border-t border-slate-800">
      <p>&copy; {currentYear} MOHAMAD FIKRIE</p>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <main className="bg-slate-900 min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default App;
