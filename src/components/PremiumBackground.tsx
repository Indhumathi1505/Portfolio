import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  originalVx: number;
  originalVy: number;
  alpha: number;
}

interface TwinkleStar {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
}

interface FloatingShape {
  x: number;
  y: number;
  size: number;
  type: "circle" | "square" | "triangle" | "hexagon";
  rotation: number;
  rotationSpeed: number;
  vx: number;
  vy: number;
  alpha: number;
}

interface PremiumBackgroundProps {
  theme: "dark" | "light" | "cyber" | "corporate";
}

export default function PremiumBackground({ theme }: PremiumBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme-specific color parameters
  const isDark = theme === "dark" || theme === "cyber";
  const primaryColor = 
    theme === "cyber" 
      ? "6, 182, 212" // Cyan
      : theme === "corporate" 
        ? "10, 102, 194" // Navy Blue
        : theme === "light" 
          ? "79, 70, 229" // Indigo
          : "139, 92, 246"; // Violet (Default Dark)

  const secondaryColor = 
    theme === "cyber" 
      ? "59, 130, 246" // Blue
      : theme === "corporate" 
        ? "0, 119, 181" // Light Blue
        : theme === "light" 
          ? "59, 130, 246" // Blue
          : "99, 102, 241"; // Indigo (Default Dark)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let stars: TwinkleStar[] = [];
    let shapes: FloatingShape[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements(canvas.width, canvas.height);
    };

    const initElements = (width: number, height: number) => {
      // 1. Interactive Connected Particles
      particles = [];
      const particleCount = Math.min(65, Math.floor((width * height) / 30000));
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.35;
        const vy = (Math.random() - 0.5) * 0.35;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          vx,
          vy,
          originalVx: vx,
          originalVy: vy,
          alpha: Math.random() * 0.4 + 0.1,
        });
      }

      // 2. Twinkle Starfield
      stars = [];
      const starCount = Math.min(80, Math.floor((width * height) / 22000));
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.1 + 0.4,
          alpha: Math.random(),
          speed: Math.random() * 0.015 + 0.005,
        });
      }

      // 3. Floating Geometric Shapes
      shapes = [];
      const shapeCount = Math.min(12, Math.floor((width * height) / 140000));
      const types: Array<"circle" | "square" | "triangle" | "hexagon"> = [
        "circle",
        "square",
        "triangle",
        "hexagon",
      ];
      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 14 + 7,
          type: types[Math.floor(Math.random() * types.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.006,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          alpha: Math.random() * 0.1 + 0.03,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const drawHexagon = (c: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      c.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        c.lineTo(x + size * Math.cos(angle), y + size * Math.sin(angle));
      }
      c.closePath();
    };

    const drawTriangle = (c: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      c.beginPath();
      c.lineTo(x, y - size);
      c.lineTo(x + size, y + size);
      c.lineTo(x - size, y + size);
      c.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Easing Mouse Coordinates
      const mouse = mouseRef.current;
      if (mouse.x === -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      // Parallax scroll calculations
      const parallaxOffset = scrollY * 0.12;

      // 1. Twinkling Stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed = -star.speed;
        }
        const starColor = isDark ? "255, 255, 255" : primaryColor;
        ctx.fillStyle = `rgba(${starColor}, ${Math.max(0.1, star.alpha * 0.5)})`;
        ctx.beginPath();
        let targetY = (star.y - parallaxOffset) % canvas.height;
        if (targetY < 0) targetY += canvas.height;
        ctx.arc(star.x, targetY, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Floating Geometric Shapes
      shapes.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        if (shape.x < -55) shape.x = canvas.width + 55;
        if (shape.x > canvas.width + 55) shape.x = -55;
        if (shape.y < -55) shape.y = canvas.height + 55;
        if (shape.y > canvas.height + 55) shape.y = -55;

        ctx.save();
        let renderY = (shape.y - parallaxOffset * 0.5) % canvas.height;
        if (renderY < -55) renderY += canvas.height + 110;
        
        ctx.translate(shape.x, renderY);
        ctx.rotate(shape.rotation);
        ctx.strokeStyle = `rgba(${secondaryColor}, ${isDark ? shape.alpha : shape.alpha * 0.6})`;
        ctx.lineWidth = 1.0;

        if (shape.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (shape.type === "square") {
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else if (shape.type === "triangle") {
          drawTriangle(ctx, 0, 0, shape.size);
          ctx.stroke();
        } else if (shape.type === "hexagon") {
          drawHexagon(ctx, 0, 0, shape.size);
          ctx.stroke();
        }
        ctx.restore();
      });

      // 3. Interactive Connected Particles with repel mechanics
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.targetX !== -1000) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            const angle = Math.atan2(dy, dx);
            const targetVx = Math.cos(angle) * force * 1.4;
            const targetVy = Math.sin(angle) * force * 1.4;
            p.vx += (targetVx - p.vx) * 0.1;
            p.vy += (targetVy - p.vy) * 0.1;
          } else {
            p.vx += (p.originalVx - p.vx) * 0.05;
            p.vy += (p.originalVy - p.vy) * 0.05;
          }
        } else {
          p.vx += (p.originalVx - p.vx) * 0.05;
          p.vy += (p.originalVy - p.vy) * 0.05;
        }

        ctx.fillStyle = `rgba(${primaryColor}, ${isDark ? p.alpha : p.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 125) {
            ctx.strokeStyle = `rgba(${secondaryColor}, ${0.11 * (1 - dist / 125) * (isDark ? 1 : 0.5)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // 4. Mouse radial easing glow aura
      if (mouse.targetX !== -1000) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150
        );
        gradient.addColorStop(0, `rgba(${primaryColor}, ${isDark ? 0.08 : 0.04})`);
        gradient.addColorStop(0.5, `rgba(${secondaryColor}, ${isDark ? 0.03 : 0.01})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [scrollY, primaryColor, secondaryColor, isDark]);

  // Color mapping based on theme
  const getThemeBackground = () => {
    switch (theme) {
      case "light": return "bg-[#FAF9F6]";
      case "corporate": return "bg-[#F3F5F8]";
      case "cyber": return "bg-[#010103]";
      default: return "bg-[#020205]";
    }
  };

  const getGridOpacity = () => {
    switch (theme) {
      case "light": return "opacity-[0.35]";
      case "corporate": return "opacity-[0.45]";
      case "cyber": return "opacity-[0.65]";
      default: return "opacity-[0.55]";
    }
  };

  const getOrbOpacity = () => {
    switch (theme) {
      case "light": return "opacity-[0.04]";
      case "corporate": return "opacity-[0.05]";
      default: return "opacity-[0.09]";
    }
  };

  return (
    <div className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${getThemeBackground()} transition-colors duration-500`}>
      
      {/* Background Aurora Orbs */}
      <div className={`absolute top-0 left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-indigo-500/80 via-purple-600/40 to-transparent blur-[120px] aurora-orb pointer-events-none ${getOrbOpacity()}`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-violet-500/60 via-fuchsia-500/30 to-transparent blur-[140px] aurora-orb-slow pointer-events-none ${getOrbOpacity()}`} />
      <div className={`absolute top-[40%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-cyan-500/40 via-blue-600/20 to-transparent blur-[100px] aurora-orb animate-pulse-glow pointer-events-none ${getOrbOpacity()}`} />

      {/* Floating Particles via DOM */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-particle shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 5 + 's',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      {/* Grid Tech Overlay */}
      <div className={`absolute inset-0 bg-grid-pattern animate-grid-drift pointer-events-none ${getGridOpacity()}`} />
      <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#020205] via-transparent" : "from-[#FAF9F6] via-transparent"} to-transparent pointer-events-none`} />

      {/* Main interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
