import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimatedBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            grab: { distance: 200, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: {
            value: theme === "dark" ? "#3b82f6" : "#6366f1",
          },
          links: {
            color: theme === "dark" ? "#3b82f6" : "#6366f1",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBackground;
