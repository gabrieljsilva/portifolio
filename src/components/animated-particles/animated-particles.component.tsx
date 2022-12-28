import Particles, { IParticlesProps } from "react-tsparticles";
import { Engine } from "tsparticles-engine";

interface AnimatedParticlesProps {
  componentId?: string;
  initializer: (engine: Engine) => Promise<void>;
  options: IParticlesProps["options"];
}

export function AnimatedParticles({ componentId, options, initializer }: AnimatedParticlesProps) {
  return <Particles id={componentId ?? "tsparticles"} options={options} init={initializer} />;
}
