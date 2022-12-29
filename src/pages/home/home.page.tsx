import { useTheme } from "styled-components";
import { Container } from "../../components/flex/container.component";
import { useParticles } from "../../hooks";
import { AnimatedParticles } from "../../components";

export function HomePage() {
  const theme = useTheme();
  const particles = useParticles({
    style: { position: "fixed" },
  });

  return (
    <Container minHeight={theme.getRemainingScreenHeight()}>
      <AnimatedParticles {...particles} />
    </Container>
  );
}
