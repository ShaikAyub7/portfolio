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
                width: "30px",
                height: "30px",
                textAlign: "center",
                marginRight: "1rem",
              }}
            />
            <span>{skill.language}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Skills;
