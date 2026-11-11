"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Let’s Connect & Build Scalable Systems</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you have a full-stack opportunity, consulting project, or technical question, feel free to drop a message or reach out directly.
        </p>

        {/* Contact Form */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 mb-12 text-left shadow-xl max-w-2xl mx-auto">
          {submitted ? (
            <div className="p-4 bg-emerald-900/50 border border-emerald-600 rounded-xl text-center text-emerald-300">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Lalitha Lochana"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="lochlalitha67@gmail.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Lalitha, I'd like to discuss a project..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition duration-300 shadow-lg shadow-blue-600/30"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Action Links */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:lochlalitha67@gmail.com"
            className="px-8 py-3.5 bg-blue-600 rounded-xl hover:bg-blue-500 transition duration-300 font-medium shadow-md"
          >
            Email Me Directly
          </a>
          <a
            href="https://www.linkedin.com/in/g-lalitha-lochana-57a228276/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-slate-600 rounded-xl hover:bg-slate-800 transition duration-300 font-medium"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/lalitha21012004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-slate-600 rounded-xl hover:bg-slate-800 transition duration-300 font-medium"
          >
            GitHub Portfolio
          </a>
        </div>

      </div>
    </section>
  );
}
