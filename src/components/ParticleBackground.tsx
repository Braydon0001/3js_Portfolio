import { useEffect, useState } from "react";

const createParticle = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const addRandomParticals = () => {
      const newParticle = createParticle();
      setParticles((prev) => [...prev.slice(-75), newParticle]);
    };

    const interval = setInterval(addRandomParticals, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[6]">
      {particles.map((particle) => {
        return (
          <div
            key={particle.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-paricle-radial"
            style={{
              top: particle.top,
              left: particle.left,
              animation: `move ${particle.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
