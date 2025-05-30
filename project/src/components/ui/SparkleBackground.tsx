import React, { useEffect, useRef } from 'react';

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const SparkleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize sparkles
    const initSparkles = () => {
      const numberOfSparkles = Math.min(Math.floor(window.innerWidth * window.innerHeight / 15000), 50);
      
      sparklesRef.current = Array.from({ length: numberOfSparkles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5,
        speed: Math.random() * 0.3 + 0.1,
      }));
    };
    
    // Draw sparkles
    const drawSparkles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      sparklesRef.current.forEach(sparkle => {
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${sparkle.opacity})`;
        ctx.shadowColor = 'rgba(200, 182, 255, 0.8)';
        ctx.shadowBlur = 6;
        ctx.fill();
        
        // Update sparkle position (subtle floating effect)
        sparkle.y -= sparkle.speed;
        
        // Reset sparkle if it goes off the top
        if (sparkle.y < -10) {
          sparkle.y = canvas.height + 10;
          sparkle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(drawSparkles);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initSparkles();
    drawSparkles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default SparkleBackground;