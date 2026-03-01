export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">

        <p className="mb-2">
          © {new Date().getFullYear()} Lalitha Lochana. All rights reserved.
        </p>

        <p>
          Built with Next.js, TypeScript & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}