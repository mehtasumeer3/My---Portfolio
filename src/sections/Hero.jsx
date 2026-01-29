import { portfolio } from "../data/Portfolio";

const SOCIAL_ICONS = [
  {
    name: "GitHub",
    href: portfolio.socials.github,
    svg: (
      <svg width="40" height="40" fill="none" aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M12 2C6.476 2 2 6.486 2 12.021c0 4.426 2.867 8.178 6.839 9.504.5.092.682-.217.682-.482 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.072 1.533 1.032 1.533 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.349-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.27.097-2.646 0 0 .84-.27 2.75 1.025A9.528 9.528 0 0 1 12 6.844c.849.004 1.705.115 2.505.337 1.909-1.295 2.748-1.025 2.748-1.025.545 1.376.202 2.393.099 2.646.64.701 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.565 4.944.359.309.678.919.678 1.854 0 1.338-.012 2.421-.012 2.75 0 .268.18.578.688.48C19.134 20.196 22 16.446 22 12.02 22 6.486 17.523 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: portfolio.socials.linkedin,
    svg: (
      <svg width="40" height="40" fill="none" aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5Zm-11.75 20.25h-3v-10h3v10Zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75 0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75c0 .966-.784 1.75-1.75 1.75zm14.25 11.25h-3v-5.25c0-1.175-.021-2.687-1.639-2.687-1.64 0-1.891 1.282-1.891 2.604v5.333h-3v-10h2.885v1.36h.041c.402-.761 1.387-1.56 2.854-1.56 3.053 0 3.615 2.01 3.615 4.623v5.577Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Email",
    href: `mailto:${portfolio.socials.email}`,
    svg: (
      <svg width="40" height="40" fill="none" aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2-8 5-8-5h16ZM4 18V8l8 5 8-5v10H4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function scrollToSection(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
// min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center p-4"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center p-4"
    >
      <div className="w-full flex flex-col items-center text-center max-w-3xl">
        {/* Name */}
        <h1
          className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.10s" }}
        >
          {portfolio.name}
        </h1>
        {/* Title Line */}
        <h2
          className="text-xl md:text-2xl font-medium text-white/90 mb-3 animate-fade-in-up"
          style={{ animationDelay: "0.20s" }}
        >
          {portfolio.titleLine}
        </h2>
        {/* Quote */}
        <blockquote
          className="text-lg md:text-xl italic text-white/80 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.30s" }}
        >
          {portfolio.heroQuote}
        </blockquote>
        {/* Buttons */}
        <div
          className="flex gap-4 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.40s" }}
        >
          <a
            href="#projects"
            onClick={e => scrollToSection(e, "projects")}
            className="text-2xl inline-block px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow hover:bg-indigo-100 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          >
            View Projects
          </a>
          <a
            href=""
            className="text-2xl inline-block px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow hover:bg-indigo-100 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"

            download
          >
            Download Resume
          </a>
        </div>
        {/* Social Icons */}
        <div
          className="flex gap-6 justify-center mt-2 animate-fade-in-up"
          style={{ animationDelay: "0.50s" }}
        >
          {SOCIAL_ICONS.map((icon) => (
            <a
              key={icon.name}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition"
              aria-label={icon.name}
            >
              {icon.svg}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}