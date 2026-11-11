import FadeIn from "./FadeIn";
export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        {/* Content Box */}
        <FadeIn>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              I am a detail-oriented <strong className="text-white">Software Engineer</strong> with hands-on industry experience building automated CI/CD pipeline adapters, RESTful microservices, and modern full-stack applications. I hold a <strong className="text-white">B.E. in Computer Science Engineering (CGPA: 8.78)</strong>.
            </p>

            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
              My technical focus spans backend engineering using <strong className="text-white">Python (Django/Flask)</strong> and <strong className="text-white">Java/Spring Boot</strong>, alongside frontend integration in <strong className="text-white">React.js</strong>. Projects like <strong className="text-white">MedExtract AI</strong>—an asynchronous medical report analysis system—highlight my passion for handling OCR extraction, AI model inferencing, and dynamic reporting pipelines.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-700">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                <h3 className="text-blue-400 font-bold mb-1">Backend & APIs</h3>
                <p className="text-slate-400 text-sm">Django REST Framework, Spring Boot, Node.js, microservices, and database migrations.</p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                <h3 className="text-blue-400 font-bold mb-1">DevOps & CI/CD</h3>
                <p className="text-slate-400 text-sm">Docker containerization, Azure DevOps, Jenkins, GitLab workflows, Vercel, and Render deployments.</p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                <h3 className="text-blue-400 font-bold mb-1">Problem-Solving</h3>
                <p className="text-slate-400 text-sm">Systematic debugging, asynchronous execution with Redis/Celery, and database optimization.</p>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
