import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
  maxLife: number;
}

interface MousePos {
  x: number;
  y: number;
}

const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePos>({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const colors = ['#3b82f6', '#1e40af', '#9333ea', '#a855f7', '#7c3aed', '#60a5fa', '#06b6d4'];

  const createParticle = (x: number, y: number, isFromMouse = false) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = isFromMouse ? Math.random() * 6 + 4 : Math.random() * 2 + 1;

    const particle: Particle = {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: isFromMouse ? Math.random() * 4 + 2 : Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: isFromMouse ? 60 : 120,
    };

    particlesRef.current.push(particle);
  };

  const drawLine = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, alpha: number) => {
    ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.3})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const updateAndDrawParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Update particles
    for (let i = particlesRef.current.length - 1; i >= 0; i--) {
      const p = particlesRef.current[i];

      // Update position
      p.x += p.vx;
      p.y += p.vy;
      p.life++;

      // Apply gravity
      p.vy += 0.1;

      // Bounce off walls
      if (p.x - p.radius < 0) {
        p.x = p.radius;
        p.vx *= -0.8;
      }
      if (p.x + p.radius > width) {
        p.x = width - p.radius;
        p.vx *= -0.8;
      }
      if (p.y - p.radius < 0) {
        p.y = p.radius;
        p.vy *= -0.8;
      }
      if (p.y + p.radius > height) {
        p.y = height - p.radius;
        p.vy *= -0.8;
      }

      // Calculate alpha based on life
      const fadeStart = p.maxLife * 0.7;
      let alpha = 1;
      if (p.life > fadeStart) {
        alpha = 1 - (p.life - fadeStart) / (p.maxLife - fadeStart);
      }

      // Draw particle
      ctx.fillStyle = p.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw connections to nearby particles
      for (let j = i + 1; j < Math.min(i + 10, particlesRef.current.length); j++) {
        const other = particlesRef.current[j];
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          drawLine(ctx, p.x, p.y, other.x, other.y, Math.max(alpha, 1 - distance / 150) * 0.5);
        }
      }

      // Remove dead particles
      if (p.life > p.maxLife) {
        particlesRef.current.splice(i, 1);
      }
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas with slight trail effect
    ctx.fillStyle = 'rgba(15, 23, 42, 0.15)';
    ctx.fillRect(0, 0, width, height);

    // Update and draw particles
    updateAndDrawParticles(ctx, width, height);

    // Draw mouse position indicator
    const mouseRadius = 30;
    const gradient = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, mouseRadius);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw central point
    ctx.fillStyle = 'rgba(147, 51, 234, 0.6)';
    ctx.beginPath();
    ctx.arc(mouseRef.current.x, mouseRef.current.y, 4, 0, Math.PI * 2);
    ctx.fill();

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create particles at mouse position occasionally
      if (Math.random() < 0.3) {
        createParticle(e.clientX, e.clientY, true);
      }
    };

    // Touch move handler for mobile
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouseRef.current = { x: touch.clientX, y: touch.clientY };

      if (Math.random() < 0.2) {
        createParticle(touch.clientX, touch.clientY, true);
      }
    };

    // Click handler
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        createParticle(e.clientX, e.clientY, true);
      }
    };

    // Initialize with some random particles
    for (let i = 0; i < 30; i++) {
      createParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        false
      );
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick);

    // Start animation loop
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 cursor-crosshair"
      style={{ display: 'block' }}
    />
  );
};

export default InteractiveCanvas;
