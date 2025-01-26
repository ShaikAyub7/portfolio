import { cardsText } from "../data";
import "../index.css";
const Projects = () => {
  return (
    <div className="projects">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        My Projects
      </h1>
      <div className="cards">
        {cardsText.map((card) => (
          <div className="project-card" key={card.id}>
            <img src={card.image} alt={`${card.name} preview`} />

            <div className="card-content">
              <h3 style={{ marginBottom: "1rem" }}>{card.name}</h3>
              <p style={{ marginBottom: "1rem" }}>{card.text}</p>
              <h4 style={{ marginBottom: "1rem" }}>
                Technologies : {card.technologies}
              </h4>
              <a href={card.link} style={{ color: "#fff" }}>
                <button
                  type="button"
                  className="button-18"
                  style={{ textAlign: "center" }}
                >
                  view
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
