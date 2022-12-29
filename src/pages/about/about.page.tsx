import { AnimatedParticles, Text } from "../../components";
import { Container } from "../../components/flex/container.component";
import { useTheme } from "styled-components";
import { useParticles } from "../../hooks";

export function AboutPage() {
  const theme = useTheme();
  const particles = useParticles({
    style: { position: "fixed" },
  });

  return (
    <Container minHeight={theme.getRemainingScreenHeight()}>
      <Text variant={"title"}>About</Text>
      <AnimatedParticles {...particles} />
    </Container>
  );
}
