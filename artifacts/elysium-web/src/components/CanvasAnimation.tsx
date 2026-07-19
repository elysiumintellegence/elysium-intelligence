import React, { useEffect, useRef } from 'react';

export const CanvasAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lines: any[] = [];
    
    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      lines = Array.from({ length: 25 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 40 + Math.random() * 80,
        width: 1 + Math.random(),
        baseAlpha: 0.15 + Math.random() * 0.45,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        sparks: Array.from({ length: Math.floor(Math.random() * 3) }).map(() => ({
          yOffset: Math.random() * 500,
          speed: 100 + Math.random() * 200
        }))
      }));
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle grid dots
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      for(let x = 0; x < canvas.width; x += 80) {
        for(let y = 0; y < canvas.height; y += 80) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      lines.forEach(line => {
        line.y += line.speed * dt;
        if (line.y > canvas.height) {
          line.y = -100; // Reset
          line.x = Math.random() * canvas.width;
        }

        const alpha = line.baseAlpha + Math.sin(time * line.pulseSpeed + line.pulseOffset) * 0.1;
        
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(60, 255, 20, 0.15)';
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(60, 255, 20, ${alpha})`;
        ctx.lineWidth = line.width;
        
        const gradient = ctx.createLinearGradient(line.x, line.y - 150, line.x, line.y + 150);
        gradient.addColorStop(0, 'rgba(60, 255, 20, 0)');
        gradient.addColorStop(0.5, `rgba(60, 255, 20, ${alpha})`);
        gradient.addColorStop(1, 'rgba(60, 255, 20, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.moveTo(line.x, line.y - 150);
        ctx.lineTo(line.x, line.y + 150);
        ctx.stroke();
        
        // Sparks
        line.sparks.forEach((spark: any) => {
          spark.yOffset += spark.speed * dt;
          if (spark.yOffset > 300) spark.yOffset = -300;
          
          const sparkY = line.y + spark.yOffset;
          if (sparkY > 0 && sparkY < canvas.height) {
            ctx.beginPath();
            ctx.fillStyle = '#3CFF14';
            ctx.arc(line.x, sparkY, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};