import { portfolio } from "../data/Portfolio";

export default function Education() {
  const items = Array.isArray(portfolio?.education) ? portfolio.education : [];
  if (!items.length) return null;

  return (
    <section id="education" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {items.map((e, idx) => {
          const title = e?.title ?? "";
          const subtitle = e?.subtitle ?? "";
          const cgpa = e?.meta?.cgpa ?? "";
          const duration = e?.meta?.duration ?? "";

          return (
            <div
              key={`${title || "edu"}-${idx}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              {title && (
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
              )}

              {(subtitle || duration) && (
                <p className="text-indigo-600 font-medium mb-2">
                  {[subtitle, duration].filter(Boolean).join(" • ")}
                </p>
              )}

              {cgpa && <p className="text-gray-700">CGPA: {cgpa}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}