import { cardsText } from "../data";
import "../index.css";
const Projects = () => {
  return (
    <div className="projects container mx-auto py-10 px-4" id="projects">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          marginTop: "2rem",
          fontSize: "2rem",
          // fontWeight: "bold",
        }}
      >
        My Projects
      </h2>
      <div
        className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ padding: "0 1rem" }}
      >
        {cardsText.map((card) => (
          <div
            className="project-card rounded-xl shadow-lg overflow-hidden bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            key={card.id}
          >
            <img
              src={card.image}
              alt={`${card.name} preview`}
              className="w-full h-48 object-cover"
            />
            <div className="card-content p-4">
              <h3
                style={{
                  marginBottom: "0.8rem",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#1a202c",
                }}
              >
                {card.name}
              </h3>
              <p
                style={{
                  marginBottom: "0.8rem",
                  color: "#4a5568",
                  lineHeight: "1.6",
                }}
              >
                {card.text}
              </p>
              <h4
                style={{
                  marginBottom: "1rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#2d3748",
                }}
              >
                Technologies:{" "}
                <span
                  style={{
                    fontWeight: "400",
                    color: "#718096",
                  }}
                >
                  {card.technologies}
                </span>
              </h4>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="button-18 w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200"
                >
                  View Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
