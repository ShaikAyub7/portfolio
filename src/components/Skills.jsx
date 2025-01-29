/* eslint-disable react/prop-types */
import "../index.css";

const Skills = ({ skillList }) => {
  return (
    <div className="Skills" id="skill">
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Skills
      </h1>

      <div className="skill-list">
        {skillList.map((skill, index) => (
          <li key={index} className="skill-item">
            <img
              src={skill.icon}
              alt=""
              style={{
                width: "25px",
                height: "25px",
                textAlign: "center",
                marginRight: "1rem",
                objectFit: "cover",
              }}
            />
            <span style={{ fontSize: "1.2rem" }}>{skill.language}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Skills;
