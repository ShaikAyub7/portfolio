import "../index.css";

const Home = () => {
  return (
    <div className="hero container">
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
        <h1
          className="hero-title"
          style={{ marginBottom: "1rem", textAlign: "center" }}
        >
          Shaik Ayub
        </h1>

        <p
          className="hero-text"
          style={{ lineHeight: "1.5rem", textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem reiciendis eligendi minima sed, odio magnam expedita ad
          corporis, excepturi labore amet eum aliquid id velit deleniti a quo,
          omnis eos!
        </p>
        <button
          type="button"
          className="btn"
          style={{
            marginTop: "2rem",
            padding: "10px",
            borderRadius: "20px",
            background: "darkblue",
            color: "#fff",
            fontWeight: "600",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Home;
