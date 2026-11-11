import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            G Lalitha Lochana
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-400 mb-6">
            Full Stack Developer | Backend Engineer
          </h2>

          <p className="text-slate-300 mb-6 text-lg leading-relaxed">
            I design secure REST APIs, scalable backend systems, and production-ready
            full stack applications using Java, Spring Boot, and modern web technologies.
          </p>

          <p className="text-slate-500 mb-10 text-sm tracking-wide">
            Specializing in backend architecture, authentication systems, and payment integrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/lalitha21012004"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/40 font-medium text-white text-center"
            >
              View GitHub
            </a>

            <a
              href="#projects"
              className="px-8 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition duration-300 font-medium text-slate-300 text-center"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Profile Image Container */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-800">
            {/* 
              Instructions:
              1. Save your profile image inside the `public/` folder of your Next.js project (e.g., `public/profile.jpg`).
              2. Change the `src="/profile.jpg"` path below to match your image file name.
            */}
            <Image
              src="./public/profile.jpg" 
              alt="G Lalitha Lochana"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
