export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Scalable Systems
        </h2>

        {/* Description */}
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          I’m currently open to backend development opportunities and
          engineering roles where I can contribute to building secure,
          scalable, and production-ready systems.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:yourmail@example.com"
            className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-500 transition duration-300 font-medium"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-600 rounded-xl hover:bg-slate-800 transition duration-300 font-medium"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-600 rounded-xl hover:bg-slate-800 transition duration-300 font-medium"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}