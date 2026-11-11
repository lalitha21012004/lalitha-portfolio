import React from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  architecture: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "MedExtract AI",
    subtitle: "Full Stack Medical Report Analysis Application",
    description:
      "Engineered a production-grade health platform that automates OCR text extraction from medical reports, evaluates parameter risk levels, and generates clinical summaries with interactive Q&A.",
    architecture:
      "Django REST backend, Vite-driven React.js frontend, deployed on Vercel (Frontend) and Render (Backend). Integrated GroqCloud (openai/gpt-oss-120b) and Gemini APIs with secure JWT authentication.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "Vite",
      "PostgreSQL",
      "GroqCloud API",
      "Gemini API",
      "JWT Auth",
      "Vercel",
      "Render",
      "REST APIs"
    ],
    githubUrl: "https://github.com/lalitha21012004",
    liveUrl: "https://github.com/lalitha21012004/medextract-ai"
  },
  {
    title: "TN Agribot",
    subtitle: "Multilingual Agricultural Chatbot",
    description:
      "Developed a backend pipeline and interactive chatbot system tailored for farming communities to deliver context-aware, multilingual query resolutions.",
    architecture:
      "Python & Flask micro-backend architecture connected to a structured relational schema in MySQL for high-accuracy query storage and retrieval.",
    skills: [
      "Python",
      "Flask",
      "MySQL",
      "REST APIs",
      "Relational DB Design",
      "Backend Pipelines"
    ],
    githubUrl: "https://github.com/lalitha21012004",
    liveUrl: "https://github.com/lalitha21012004/AgriBot-TN"
  },
  {
    title: "CI/CD Pipeline Adapters & Automation",
    subtitle: "Enterprise DevOps & Integration Workflows (Ticking Minds)",
    description:
      "Architected scalable backend components and deployment pipeline adapters to automate build, testing, and deployment synchronization across distributed services.",
    architecture:
      "Multi-platform CI/CD integration interfacing Azure DevOps, Jenkins, and GitLab pipelines with verifications for database-driven configurations.",
    skills: [
      "Azure DevOps",
      "Jenkins",
      "GitLab CI/CD",
      "Docker",
      "Git",
      "Backend Architecture",
      "System Verification"
    ]
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Production-grade applications, full-stack architectures, and automated pipelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {project.subtitle}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                {project.description}
              </p>

              <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 bg-slate-100 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                <strong>System Architecture:</strong> {project.architecture}
              </div>

              {/* Skill Tags */}
              <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-4 text-sm font-medium pt-2 border-t border-slate-100 dark:border-slate-700">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        GitHub Code →
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
