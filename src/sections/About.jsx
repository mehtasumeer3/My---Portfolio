import { portfolio } from "../data/Portfolio";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 ">
        About Me
      </h2>
      {/* portfolio.about should be an array of paragraphs */}
      {Array.isArray(portfolio.about) && portfolio.about.length > 0 ? (
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          {portfolio.about.slice(0, 2).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default About;
