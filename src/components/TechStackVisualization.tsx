import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  label: string;
  category: 'frontend' | 'backend' | 'tools';
}

interface Charge {
  x: number;
  y: number;
  force: number;
  fade: number;
}

const TechStackVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const chargesRef = useRef<Charge[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const techStacks = {
    frontend: [
      { label: 'React', color: '#61dafb' },
      { label: 'TypeScript', color: '#3178c6' },
      { label: 'Tailwind', color: '#06b6d4' },
    ],
    backend: [
      { label: 'Python', color: '#3776ab' },
      { label: 'Django', color: '#092e20' },
      { label: 'PostgreSQL', color: '#336791' },
    ],
    tools: [
      { label: 'Vite', color: '#646cff' },
      { label: 'Git', color: '#f1502f' },
      { label: 'Vercel', color: '#000000' },
    ],
  };

  const initializeNodes = (width: number, height: number) => {
    nodesRef.current = [];
    let nodeIndex = 0;

    Object.entries(techStacks).forEach(([category, techs], catIndex) => {
      const categoryY = ((catIndex + 1) * height) / 4;

      techs.forEach((tech, techIndex) => {
        const angleStep = (Math.PI * 2) / techs.length;
        const angle = angleStep * techIndex;
        const radius = 60;

        const node: Node = {
          x: width / 2 + Math.cos(angle) * radius,
          y: categoryY + Math.sin(angle) * radius * 0.3,
          vx: 0,
          vy: 0,
          radius: 35,
          color: tech.color,
          label: tech.label,
          category: category as 'frontend' | 'backend' | 'tools',
        };

        nodesRef.current.push(node);
        nodeIndex++;
      });
    });
  };

  const drawNode = (ctx: CanvasRenderingContext2D, node: Node, pulseAmount: number) => {
    // Outer glow
    const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius + 15);
    gradient.addColorStop(0, `${node.color}30`);
    gradient.addColorStop(1, `${node.color}00`);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius + 15, 0, Math.PI * 2);
    ctx.fill();

    // Main circle
    ctx.fillStyle = node.color;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius * (0.9 + pulseAmount * 0.1), 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Border
    ctx.strokeStyle = node.color;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Label
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = `${node.color}80`;
    ctx.shadowBlur = 10;
    ctx.fillText(node.label, node.x, node.y);
    ctx.shadowColor = 'transparent';
  };

  const drawConnection = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, alpha: number) => {
    ctx.strokeStyle = `rgba(147, 51, 234, ${alpha})`;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  const updateNodes = (mouseX: number, mouseY: number) => {
    for (let i = 0; i < nodesRef.current.length; i++) {
      const node = nodesRef.current[i];

      // Mouse repulsion
      const dx = node.x - mouseX;
      const dy = node.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 200) {
        const force = (200 - distance) / 200;
        node.vx += (dx / distance) * force * 2;
        node.vy += (dy / distance) * force * 2;
      }

      // Damping
      node.vx *= 0.92;
      node.vy *= 0.92;

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounds checking
      if (node.x - node.radius < 0) node.x = node.radius;
      if (node.x + node.radius > canvasRef.current!.width) node.x = canvasRef.current!.width - node.radius;
      if (node.y - node.radius < 0) node.y = node.radius;
      if (node.y + node.radius > canvasRef.current!.height) node.y = canvasRef.current!.height - node.radius;
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
    ctx.lineWidth = 1;
    const gridSize = 50;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Update nodes
    updateNodes(mouseRef.current.x, mouseRef.current.y);

    // Draw connections
    for (let i = 0; i < nodesRef.current.length; i++) {
      for (let j = i + 1; j < nodesRef.current.length; j++) {
        const n1 = nodesRef.current[i];
        const n2 = nodesRef.current[j];

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300 && n1.category === n2.category) {
          const alpha = (1 - distance / 300) * 0.4;
          drawConnection(ctx, n1.x, n1.y, n2.x, n2.y, alpha);
        }
      }
    }

    // Draw nodes
    const time = Date.now() / 1000;
    for (const node of nodesRef.current) {
      const pulse = Math.sin(time * 2 + nodesRef.current.indexOf(node)) * 0.5 + 0.5;
      drawNode(ctx, node, pulse);
    }

    // Draw charges (click effects)
    for (let i = chargesRef.current.length - 1; i >= 0; i--) {
      const charge = chargesRef.current[i];
      charge.fade -= 0.02;

      if (charge.fade <= 0) {
        chargesRef.current.splice(i, 1);
      } else {
        ctx.strokeStyle = `rgba(99, 102, 241, ${charge.fade * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, charge.force * charge.fade, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initializeNodes(canvas.width, canvas.height);
    };

    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      chargesRef.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        force: 100,
        fade: 1,
      });
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-700 bg-slate-800/30">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 text-white/50 text-sm">
          Hover to explore • Click for effect
        </div>
      </div>
    </div>
  );
};

export default TechStackVisualization;
