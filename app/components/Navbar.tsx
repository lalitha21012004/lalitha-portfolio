"use client";

export default function Navbar() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="text-lg font-semibold">
          Lalitha.
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-slate-300 hover:text-white transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}