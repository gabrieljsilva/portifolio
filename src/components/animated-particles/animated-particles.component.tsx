import Particles, { IParticlesProps } from "react-tsparticles";
import { Engine } from "tsparticles-engine";

export interface IParticles {
  initializer: (engine: Engine) => Promise<void>;
  options: IParticlesProps["options"];
}

interface AnimatedParticlesProps extends IParticles {
  componentId?: string;
}

export function AnimatedParticles({ componentId, options, initializer }: AnimatedParticlesProps) {
  return <Particles id={componentId ?? "tsparticles"} options={options} init={initializer} />;
}
