export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24" >

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative z-10">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          G Lalitha Lochana
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-400 mb-6">
          Full Stack Developer | Backend Engineer
        </h2>

        <p className="max-w-2xl text-slate-300 mb-6 text-lg leading-relaxed">
          I design secure REST APIs, scalable backend systems, and production-ready
          full stack applications using Java, Spring Boot, and modern web technologies.
        </p>

        <p className="text-slate-500 mb-10 text-sm tracking-wide">
          Specializing in backend architecture, authentication systems, and payment integrations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          <a
            href="https://github.com/lalitha21012004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/40 font-medium"
          >
            View GitHub
          </a>

          <a
            href="#projects"
            className="px-8 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition duration-300 font-medium"
          >
            View Projects
          </a>

        </div>

      </div>
    </section>
  );
}