import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles, { IParticlesProps } from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { Container } from "../../components/flex/container.component";
import { useTheme } from "styled-components";

export function HomePage() {
  const theme = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Container height={`calc(100vh - ${theme.headerHeight})`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          style: {
            height: `calc(100vh - ${theme.headerHeight} - 5px)`, // 5px is used to prevent scroll
          },
          ...ParticleOptions,
        }}
      />
    </Container>
  );
}

const ParticleOptions: IParticlesProps["options"] = {
  fullScreen: false,
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#000",
    },
    links: {
      color: "#000",
      distance: 150,
      enable: true,
      opacity: 0.25,
      width: 0.5,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
