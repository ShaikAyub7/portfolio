import { socialLinks } from "../data";
import "../index.css";
socialLinks;

const Home = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-content">
        <div className="hero-img">
          <img
            src="./profile pic.jpg"
            alt=""
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              borderRadius: "50%",
            }}
          />
        </div>
        <h2
          className="hero-title"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Hi There!
        </h2>

        <h1
          className="hero-text"
          style={{ lineHeight: "1.5rem", textAlign: "center" }}
        >
          I&apos;m Shaik Ayub
        </h1>

        <div style={{ margin: "1.5rem" }} className="links">
          <a href="https://github.com/ShaikAyub7">
            <i
              className="fa-brands fa-github fa-2x"
              style={{ marginRight: "1rem" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/shaik-ayub7">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>

        <a
          href="./resume pdf.pdf"
          download="ShaikAyub_CV.pdf"
          className="button-18"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "15px",
            marginRight: "10px",
            marginLeft: "10px",
            borderRadius: "30px",
            background: "darkblue",
            color: "#fff",
            fontWeight: "600",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Download CV &nbsp;
          <img
            src="./download.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
