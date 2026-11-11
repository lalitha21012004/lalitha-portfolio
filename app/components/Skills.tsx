import React from 'react';

const skillsCategory = [
  {
    category: "Web & Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Vite", "Flutter"]
  },
  {
    category: "Programming & Languages",
    skills: ["Java", "Python", "C#", "C++"]
  },
  {
    category: "Backend & Frameworks",
    skills: ["Django", "Django REST Framework", "Flask", "Spring Boot", "Node.js", "REST APIs"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL 16", "MySQL", "MongoDB"]
  },
  {
    category: "DevOps & Cloud Deployment",
    skills: ["Docker", "Vercel", "Render", "Azure DevOps", "Jenkins", "GitLab CI/CD"]
  },
  {
    category: "Developer Tools",
    skills: ["Git & GitHub", "GitHub Codespaces", "Postman", "VS Code"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-10 bg-white dark:bg-slate-850" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Technical Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategory.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
