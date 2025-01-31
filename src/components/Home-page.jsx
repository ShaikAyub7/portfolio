import { motion } from "framer-motion";
import "../index.css";

const Home = () => {
  return (
    <motion.div
      className="hero "
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="hero-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="hero-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="./profile pic.jpg"
            alt="Profile"
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              borderRadius: "50%",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </motion.div>

        <motion.h2
          className="hero-title"
          style={{
            marginBottom: "1.3rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi There!
        </motion.h2>

        <motion.h1
          className="hero-text"
          style={{
            lineHeight: "1.9rem",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I&apos;m Shaik Ayub
        </motion.h1>

        <motion.div
          style={{ margin: "1.5rem" }}
          className="links"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.a
            href="https://github.com/ShaikAyub7"
            className="icon-link"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i
              className="fa-brands fa-github fa-2x"
              style={{ marginRight: "1rem", color: "#fff" }}
            ></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shaik-ayub7"
            className="icon-link"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i
              className="fa-brands fa-linkedin fa-2x"
              style={{ color: "#fff" }}
            ></i>
          </motion.a>
        </motion.div>

        <motion.a
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
          whileHover={{
            scale: 1.1,
            backgroundColor: "#0056b3",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
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
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
