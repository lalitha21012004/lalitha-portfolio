export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "Microservices",
        "JWT Authentication",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "Relational Data Modeling",
        "Normalization",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Git",
        "Postman",
        "CI/CD Basics",
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        "OOP",
        "System Design Basics",
        "API Security",
        "Failure Handling & Retry Mechanisms",
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Focused on backend engineering, scalable architectures, and secure API development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-700 rounded-full text-slate-300"
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
}