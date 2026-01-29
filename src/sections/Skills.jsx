import { portfolio } from "../data/Portfolio";

const PILL_STYLES_BY_TITLE = [
  { match: ["frontend"], pillClass: "bg-indigo-100 text-indigo-800" },
  { match: ["backend"], pillClass: "bg-green-100 text-green-800" },
  { match: ["tools", "practices"], pillClass: "bg-yellow-100 text-yellow-800" },
  { match: ["fundamentals", "basics", "core"], pillClass: "bg-pink-100 text-pink-800" },
];

function getPillClass(title = "") {
  const t = title.toLowerCase();
  const found = PILL_STYLES_BY_TITLE.find((x) => x.match.some((m) => t.includes(m)));
  return found?.pillClass ?? "bg-gray-100 text-gray-800";
}

export default function Skills() {
  const skillsArr = Array.isArray(portfolio?.skills) ? portfolio.skills : [];

  // if empty, still render a visible placeholder (so you know it’s wired)
  if (!skillsArr.length) {
    return (
      <section id="skills" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Skills
          </h2>
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center text-gray-600">
            Add skills in <span className="font-semibold">data/Portfolio.js</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsArr.map((cat, idx) => {
            const title = cat?.title ?? `Category ${idx + 1}`;
            const items = Array.isArray(cat?.pills) ? cat.pills : [];
            const pillClass = getPillClass(title);

            return (
              <div
                key={`${title}-${idx}`}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-8"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
                  {title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.length ? (
                    items.map((skill, sIdx) => (
                      <span
                        key={`${skill}-${sIdx}`}
                        className={`${pillClass} inline-flex rounded-full px-4 py-2 text-sm font-medium`}
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400 text-sm">No data</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}