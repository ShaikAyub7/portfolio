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
            marginBottom: "1.3rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Hi There!
        </h2>

        <h1
          className="hero-text"
          style={{ lineHeight: "1.9rem", textAlign: "center" }}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-3"
            style={{ width: "20px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
