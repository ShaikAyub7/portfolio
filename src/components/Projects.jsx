import {
  Card,
  Image,
  Text,
  Grid,
  Button,
  Group,
  Container,
} from "@mantine/core";
import { cardsText } from "../data";

function Demo() {
  return (
    <Container>
      <div className="projects" id="projects">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            marginTop: "2rem",
            fontSize: "2rem",
            width: "100%",
          }}
        >
          My Projects
        </h2>
        <Grid gutter="md">
          {cardsText.map((card) => (
            <Grid.Col key={card.id} span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                sx={{
                  maxHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Section component="a" href={card.link}>
                  <Image src={card.image} height={200} alt={card.name} />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{card.name}</Text>
                </Group>
                <Text size="sm" c="dimmed">
                  {card.text}
                </Text>
                <Button
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  component="a"
                  href={card.link}
                >
                  Preview
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Demo;
