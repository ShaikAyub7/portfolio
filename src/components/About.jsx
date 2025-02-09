import "../index.css";
import {
  Card,
  Image,
  Text,
  Flex,
  Button,
  Group,
  Container,
} from "@mantine/core";
const About = () => {
  return (
    <Container>
      <div className="about container" id="about">
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>About</h1>

        <p
          style={{
            textAlign: "center",
            lineHeight: "1.5rem",
            fontWeight: "400",
          }}
        >
          Hi, I’m Shaik Ayub, a passionate front-end developer dedicated to
          crafting seamless, user-friendly web experiences. With a keen eye for
          detail and a love for clean code, I specialize in turning ideas into
          visually stunning and functional interfaces. 💡 I thrive on solving
          challenges and building responsive, interactive websites that not only
          look great but also perform exceptionally well across all devices
        </p>
      </div>
    </Container>
  );
};

export default About;
