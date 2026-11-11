import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Card */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-10 hover:border-blue-500 transition duration-300 shadow-xl">

          {/* Role + Company */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Software Engineer
              </h3>
              <p className="text-blue-400 font-medium">
                Ticking Minds
              </p>
            </div>

            <span className="text-sm text-slate-400 mt-2 md:mt-0 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
              September 2025 – January 2026 | Chennai, India
            </span>
          </div>

          {/* Work Description */}
          <ul className="space-y-3 text-slate-300 leading-relaxed">
            <li>
              • Architected and developed scalable backend components and custom pipeline adapters for Azure, Jenkins, and GitLab CI/CD workflows[cite: 1].
            </li>
            <li>
              • Validated complex system workflows and ensured seamless backend communication and integration across distributed services[cite: 1].
            </li>
            <li>
              • Verified database-driven configurations and collaborated to systematically troubleshoot and fix deployment and integration errors[cite: 1].
            </li>
          </ul>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Azure DevOps",
              "Jenkins",
              "GitLab CI/CD",
              "Docker",
              "Git",
              "Backend Architecture",
              "System Verification"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-md bg-blue-950/60 text-blue-300 border border-blue-900"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
