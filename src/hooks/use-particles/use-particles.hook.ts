import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { IParticlesProps } from "react-tsparticles";
import * as R from "ramda";
import { IParticles } from "../../components";

export function useParticles(options?: IParticlesProps["options"]): IParticles {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return {
		initializer: particlesInit,
		options: R.mergeRight(options!, defaultParticlesOptions!),
	};
}

const defaultParticlesOptions: IParticlesProps["options"] = {
	fullScreen: false,
	background: {
		color: {
			value: "transparent",
		},
	},
	fpsLimit: 60,
	particles: {
		color: {
			value: "#fff",
		},
		links: {
			color: "#fff",
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
