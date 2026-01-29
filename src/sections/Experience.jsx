import { portfolio } from "../data/Portfolio";

export default function Experience() {
  const experiences = Array.isArray(portfolio.experience) ? portfolio.experience : [];
  if (!experiences.length) return null;

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-14 text-center">Experience</h2>
        {/* Mobile (no timeline, no circle) */}
        <div className="md:hidden space-y-6">
          {experiences.map((item, i) => {
            const company = item.company || item.title || "";
            const role = item.role || item.subtitle || "";
            const duration = item.duration || item.meta?.duration || "";
            const bullets = item.points || item.bullets || [];
            return (
              <div key={i} className="max-w-2xl mx-auto w-full bg-white border border-gray-100 rounded-xl shadow-lg p-6">
                <div className="text-lg font-semibold text-gray-900">
                  {company}
                  {role &&
                    <span className="font-normal text-gray-700"> — {role}</span>
                  }
                </div>
                {duration &&
                  <div className="text-indigo-600 text-sm mt-1">{duration}</div>
                }
                {bullets.length > 0 && (
                  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 leading-relaxed">
                    {bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        {/* Desktop timeline */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-indigo-200 pointer-events-none" aria-hidden="true" />
          <div>
            {experiences.map((item, i) => {
              const company = item.company || item.title || "";
              const role = item.role || item.subtitle || "";
              const duration = item.duration || item.meta?.duration || "";
              const bullets = item.points || item.bullets || [];
              const isRight = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="grid md:grid-cols-[1fr_80px_1fr] items-center py-10"
                >
                  {/* Left card */}
                  <div className={isRight ? "" : "pr-8 flex justify-end"}>
                    {!isRight && (
                      <div className="w-full max-w-[520px] bg-white border border-gray-100 rounded-xl shadow-lg p-6">
                        <div className="text-lg font-semibold text-gray-900">
                          {company}
                          {role &&
                            <span className="font-normal text-gray-700"> — {role}</span>
                          }
                        </div>
                        {duration &&
                          <div className="text-indigo-600 text-sm mt-1">{duration}</div>
                        }
                        {bullets.length > 0 && (
                          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 leading-relaxed">
                            {bullets.map((b, j) => (
                              <li key={j}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                  {/* Timeline circle */}
                  <div className="relative flex items-center justify-center">
                    <span className="w-9 h-9 rounded-full bg-indigo-600 text-white font-semibold flex items-center justify-center shadow">
                      {i + 1}
                    </span>
                  </div>
                  {/* Right card */}
                  <div className={isRight ? "pl-8 flex justify-start" : ""}>
                    {isRight && (
                      <div className="w-full max-w-[520px] bg-white border border-gray-100 rounded-xl shadow-lg p-6">
                        <div className="text-lg font-semibold text-gray-900">
                          {company}
                          {role &&
                            <span className="font-normal text-gray-700"> — {role}</span>
                          }
                        </div>
                        {duration &&
                          <div className="text-indigo-600 text-sm mt-1">{duration}</div>
                        }
                        {bullets.length > 0 && (
                          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 leading-relaxed">
                            {bullets.map((b, j) => (
                              <li key={j}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
