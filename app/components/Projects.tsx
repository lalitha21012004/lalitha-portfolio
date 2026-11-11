export default function Projects() {
  const projects = [
    {
      title: "MedExtract AI",
      status: "Production-Grade",
      description:
        "A full-stack health application engineered to process medical reports and provide clinical summaries and interactive patient Q&A.",
      architecture: [
        "Django backend with Vite-driven React frontend",
        "Hosted on Vercel with Render backend deployment",
        "GroqCloud and Gemini API integration for AI inferencing",
        "Secure JWT authentication and OCR report extraction pipelines",
        "Structured parameter risk-level evaluations with dynamic metric tables",
      ],
      tech: [
        "Python",
        "Django",
        "React",
        "Vite",
        "Gemini API",
        "GroqCloud",
        "JWT",
      ],
    },
    {
      title: "TN Agribot",
      status: "Active System",
      description:
        "An interactive, multilingual agricultural chatbot designed to process and resolve queries for farming communities.",
      architecture: [
        "Python and Flask backend infrastructure",
        "Relational database schemas designed in MySQL",
        "Multilingual chat data processing and retrieval",
      ],
      tech: [
        "Python",
        "Flask",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      title: "E-Commerce Platform with Stripe Integration",
      status: "Actively Improving",
      description:
        "A secure full-stack commerce application focused on backend robustness, authentication, and payment reliability.",
      architecture: [
        "Layered architecture (Controller → Service → Repository)",
        "JWT-based authentication with Spring Security",
        "Stripe Payment Intent API integration",
        "Relational schema with normalized tables",
        "Global exception handling & standardized API responses",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "JWT",
        "Stripe API",
      ],
    },
    {
      title: "Microservices-Based Order Management System",
      status: "Design & Scaling Phase",
      description:
        "A distributed backend system designed to explore service isolation, inter-service communication, and failure management strategies.",
      architecture: [
        "Choreography-based event-driven design",
        "Service-to-service REST communication",
        "Retry & failure management handling",
        "API Gateway routing strategy",
        "Docker-based containerization",
      ],
      tech: [
        "Spring Boot",
        "Spring Cloud",
        "REST APIs",
        "MySQL",
        "Docker",
      ],
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Backend & Full-Stack Engineering Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Focused on scalable architectures, secure authentication mechanisms,
            AI integrations, and reliable payment workflows.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-10 hover:border-blue-500 transition duration-300 shadow-xl"
            >
              {/* Title */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
                <span className="text-xs px-3 py-1 bg-slate-700 rounded-full text-slate-300">
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Focus */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-4">
                  Architecture Highlights
                </h4>
                <ul className="space-y-2 text-slate-400">
                  {project.architecture.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-slate-700 rounded-full text-slate-300"
                  >
                    {tech}
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

```
