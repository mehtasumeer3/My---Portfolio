import { portfolio } from "../data/Portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const github = portfolio.socials?.github;
  const linkedin = portfolio.socials?.linkedin;
  const email = portfolio?.contact?.email;

  
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4 text-center">
        {/* Social Icons Row */}
        <div className="flex justify-center space-x-6 mb-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {/* GitHub SVG */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.011-1.25-.017-2.27-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.808 1.305 3.495.998.108-.776.418-1.305.762-1.606-2.665-.302-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.235-3.22-.124-.303-.536-1.525.117-3.176 0 0 1.008-.323 3.3 1.23A11.51 11.51 0 0 1 12 6.844c1.02.004 2.048.138 3.01.403 2.292-1.553 3.298-1.23 3.298-1.23.655 1.651.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.22 0 4.609-2.803 5.625-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.014 2.903-.014 3.296 0 .319.217.694.826.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12Z"
                />
              </svg>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {/* LinkedIn SVG */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.177v-5.569c0-1.327-.024-3.036-1.85-3.036-1.851 0-2.133 1.445-2.133 2.939v5.666H9.108V9h3.053v1.561h.044c.426-.805 1.463-1.656 3.013-1.656 3.224 0 3.819 2.122 3.819 4.881v6.666zM5.337 7.433a1.753 1.753 0 1 1 0-3.506 1.753 1.753 0 0 1 0 3.506zM7.119 20.452H3.553V9h3.566v11.452z"
                />
              </svg>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {/* Email SVG */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M19.25 4.5H4.75A2.25 2.25 0 0 0 2.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.25 4.5Zm0 1.5c.414 0 .75.336.75.75v.18l-8 5.5-8-5.5V6.75a.75.75 0 0 1 .75-.75h14.5Zm.75 12.75a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75V8.215l8.372 5.758a.75.75 0 0 0 .855 0l8.373-5.758V17.25Z"
                />
              </svg>
            </a>
          )}
        </div>
        
        {/* Copyright Row */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {year} Sumeer Mehta. All rights reserved.
          </p>
        </div>
        {/* Tagline */}
        <div className="text-center">
          <span className="text-xs text-gray-400 tracking-wide">
            
          </span>
        </div>
      </div>
    </footer>
  );
}