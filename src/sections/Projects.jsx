import { portfolio } from "../data/Portfolio";

export default function Projects() {
  const projects = portfolio.projects || [];
  if (!projects.length) return null;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <div className="text-gray-700 mb-6">{project.description}</div>
              <div className="mb-6">
                <span className="font-semibold text-indigo-600 mr-2">Tech Stack:</span>
                {Array.isArray(project.tech) && project.tech.length > 0 ? (
                  <span className="inline-flex flex-wrap gap-2 align-middle">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="text-gray-400 text-xs">None</span>
                )}
              </div>
              <div className="mt-auto flex gap-4 text-sm">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-gray-800 hover:underline"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}