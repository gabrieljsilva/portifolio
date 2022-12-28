import { Container } from "../../components/flex/container.component";
import { useTheme } from "styled-components";
import { useParticles } from "../../hooks";
import { AnimatedParticles } from "../../components";

export function HomePage() {
  const theme = useTheme();
  const particlesHeight = `calc(100vh - ${theme.topBarNavigationHeight} - 5px)`; // 5px is used to prevent scroll

  const { options, initializer } = useParticles({
    style: {
      height: particlesHeight,
      position: "fixed",
    },
  });

  return (
    <Container minHeight={theme.getRemainingScreenHeight()}>
      <AnimatedParticles initializer={initializer} options={options} />
    </Container>
  );
}
