export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Experience
          </h2>
        </div>

        {/* Experience Card */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-10 hover:border-blue-500 transition duration-300 shadow-xl">

          {/* Role + Company */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Software Developer Intern
              </h3>
              <p className="text-slate-400">
                Ticking Minds
              </p>
            </div>

            <span className="text-sm text-slate-400 mt-2 md:mt-0">
              Duration: Internship
            </span>
          </div>

          {/* Work Description */}
          <ul className="space-y-3 text-slate-300 leading-relaxed">
            <li>
              • Assisted in backend API development using Spring Boot for internal applications.
            </li>
            <li>
              • Designed RESTful endpoints and implemented validation logic for data consistency.
            </li>
            <li>
              • Collaborated with frontend developers to integrate APIs and ensure smooth data flow.
            </li>
            <li>
              • Performed debugging and performance optimization for existing services.
            </li>
            <li>
              • Used Git for version control and participated in code reviews.
            </li>
          </ul>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Java", "Spring Boot", "REST APIs", "MySQL", "Git"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-slate-700 rounded-full text-slate-300"
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