import { useCallback, useEffect, useRef, useState } from "react";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  // SSR safe + respect reduced motion preference
  if (typeof window === "undefined") return null;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return null;
  }

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [Particles, setParticles] = useState<React.ComponentType<any> | null>(
    null
  );

  // init callback: load the slim engine dynamically when tsParticles initializes
  const particlesInit = useCallback(async (engine: Engine) => {
    const { loadSlim } = await import("tsparticles-slim");
    await loadSlim(engine);
  }, []);

  // Lazy-load the react-tsparticles component when the wrapper enters the viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let canceled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // dynamic import so the bundle isn't loaded until needed
            import("react-tsparticles")
              .then((mod) => {
                if (!canceled) {
                  // set the component constructor
                  setParticles(() => mod.default as React.ComponentType<any>);
                }
              })
              .catch(() => {
                /* ignore loading errors (optional: handle/log) */
              });

            observer.disconnect();
            break;
          }
        }
      },
      { root: null, threshold: 0 }
    );

    observer.observe(el);

    return () => {
      canceled = true;
      observer.disconnect();
    };
  }, []);

  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#b5dcff", "#a78bfa", "#34d399"],
      },
      links: {
        color: "#b5dcff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
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
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    // wrapper is used as the IntersectionObserver target; role/aria-hidden since decorative
    <div ref={wrapperRef} aria-hidden role="presentation">
      {Particles ? (
        <Particles id="tsparticles" init={particlesInit} options={options} />
      ) : null}
    </div>
  );
}