import FadeIn from "./FadeIn";
export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About Me
          </h2>
        </div>
        </FadeIn>

        {/* Content */}
        <FadeIn>
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-12 shadow-xl">

          <p className="text-slate-300 leading-relaxed mb-6">
            I am a backend-focused software developer building scalable systems
            using Java and Spring Boot. My primary interest lies in designing
            secure APIs, handling distributed workflows, and implementing
            reliable payment and authentication mechanisms.
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            Recently, I have been working on Stripe-integrated commerce systems
            and microservices-based architectures, focusing on transactional
            consistency, failure handling strategies, and service isolation.
          </p>

          <p className="text-slate-300 leading-relaxed">
            I aim to contribute to engineering teams that value clean
            architecture, performance optimization, and production-ready
            backend systems.
          </p>

        </div>
        </FadeIn>
      </div>
    </section>
  );
}