import { portfolio } from "../data/Portfolio";

const Contact = () => {
  const email =
    portfolio?.email ??
    portfolio?.contact?.email ??
    "";
  const phone =
    portfolio?.phone ??
    portfolio?.contact?.phone ??
    "";
  const location =
    portfolio?.location ??
    portfolio?.contact?.location ??
    "";
  const github =
    portfolio?.socials?.github ??
    portfolio?.contact?.socials?.github ??
    "";
  const linkedin =
    portfolio?.socials?.linkedin ??
    portfolio?.contact?.socials?.linkedin ??
    "";

  const hasContact =
    !!email || !!phone || !!location || !!github || !!linkedin;

  if (!hasContact) return null;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-14 text-center text-gray-900">
          Contact Me
        </h2>
        <div className="grid place-items-center">
          <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-gray-100 p-10">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Get in Touch
            </h3>

            <div className="space-y-5">
              {email && (
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-semibold min-w-[80px]">
                    Email:
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-black hover:underline break-all"
                  >
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-semibold min-w-[80px]">
                    Phone:
                  </span>
                  <a
                    href={`tel:${phone}`}
                    className="text-black"
                  >
                    {phone}
                  </a>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-semibold min-w-[80px]">
                    Location:
                  </span>
                  <span className="text-gray-800 break-all">{location}</span>
                </div>
              )}
            </div>

            {(github || linkedin) && (
              <div className="mt-8">
                <div className="font-semibold text-gray-800 mb-3"></div>
                <div className="flex gap-3">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
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
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M20.447 20.452h-3.177v-5.569c0-1.327-.024-3.036-1.85-3.036-1.851 0-2.133 1.445-2.133 2.939v5.666H9.108V9h3.053v1.561h.044c.426-.805 1.463-1.656 3.013-1.656 3.224 0 3.819 2.122 3.819 4.881v6.666zM5.337 7.433a1.753 1.753 0 1 1 0-3.506 1.753 1.753 0 0 1 0 3.506zM7.119 20.452H3.553V9h3.566v11.452z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;