export default function ProjectCard({
    title,
    subtitle,
    description,
    tech = [],
    github,
    live,
  }) {
    return (
      <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
  
        {subtitle && (
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
        )}
  
        <p className="text-gray-700 mb-4">{description}</p>
  
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
  
        <div className="flex gap-4 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Live
            </a>
          )}
        </div>
      </div>
    );
  }