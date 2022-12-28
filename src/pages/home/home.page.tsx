import { Container } from "../../components/flex/container.component";
import { useTheme } from "styled-components";
import { useParticles } from "../../hooks";
import { AnimatedParticles } from "../../components";

export function HomePage() {
  const theme = useTheme();
  const { options, initializer } = useParticles({
    style: { position: "fixed" },
  });

  return (
    <Container minHeight={theme.getRemainingScreenHeight()}>
      <AnimatedParticles initializer={initializer} options={options} />
    </Container>
  );
}
