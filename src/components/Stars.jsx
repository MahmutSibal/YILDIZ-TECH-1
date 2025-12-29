import React, { useRef, useEffect } from 'react';

// Simple canvas-based code rain (Matrix-like) effect.
const Stars = () => {
  const canvasRef = useRef(null);

  useEffect(()=>{
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const fontSize = 14;
    const columns = Math.floor(width / fontSize) + 1;
    const drops = new Array(columns).fill(0);

    const chars = '01{}[]()<>/\\|;:.,+-*_~!@#$%^&abcdefghijklmnopqrstuvwxyz()';

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    let raf;

    function draw() {
      ctx.fillStyle = 'rgba(6,11,22,0.15)';
      ctx.fillRect(0,0,width,height);

      // Use site blue tone for code rain to match branding
      const blueA = '#1d7eff';
      const blueB = '#5fb0ff';
      // Slight brightness variation per column
      
      ctx.fillStyle = blueA;
      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for(let i=0;i<drops.length;i++){
        const text = chars.charAt(Math.floor(Math.random()*chars.length));
        const x = i*fontSize;
        const y = drops[i]*fontSize;
        // vary color slightly
        ctx.fillStyle = (Math.random() > 0.6) ? blueB : blueA;
        ctx.fillText(text, x, y);
        if(y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    draw();

    return ()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  },[]);

  return (
    <div className="absolute inset-0 -z-10 opacity-90">
      <canvas ref={canvasRef} className="code-rain-canvas" />
    </div>
  );
};

export default Stars;
