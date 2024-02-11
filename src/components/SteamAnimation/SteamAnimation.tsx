import { useRef, useEffect } from 'react';

export default function SteamAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Exit early if canvas is null

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Exit early if context is null

    // Draw the coffee cup
    ctx.beginPath();
    ctx.arc(150,  150,  75,  0, Math.PI *  2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth =  5;
    ctx.stroke();

    // Initialize particles
    const particles = Array.from({ length:  100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() -  0.5,
      vy: Math.random() -  0.5,
      color: '#fff'
    }));

    // Animation loop
    const animateParticles = () => {
      ctx.clearRect(0,  0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y,  2,  0, Math.PI *  2);
        ctx.closePath();
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Reset particle position if it goes off-screen
        if (particle.x <  0 || particle.x > canvas.width || particle.y <  0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(animateParticles);
    };

    const animationId = requestAnimationFrame(animateParticles);

    // Return a cleanup function to stop the animation
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} width={300} height={300} />;
}
