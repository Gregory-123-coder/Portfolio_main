import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const WORDS = ['AI Engineer', 'ML Practitioner', 'Agentic AI Builder', 'RAG Architect', 'Full-Stack Developer'];

export default function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  // Fire particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let W, H;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor(x, y, fromMouse) {
        this.x = x;
        this.y = y;
        this.fromMouse = fromMouse;
        this.vx = (Math.random() - 0.5) * (fromMouse ? 3 : 1.2);
        this.vy = -(Math.random() * (fromMouse ? 5 : 3) + 1.5);
        this.alpha = fromMouse ? 0.9 : 0.7;
        this.size = Math.random() * (fromMouse ? 5 : 3.5) + 1.5;
        this.decay = Math.random() * 0.012 + 0.008;
        const t = Math.random();
        if (t < 0.4) this.color = `255, ${Math.floor(100 + t * 120)}, 0`;
        else if (t < 0.7) this.color = `220, ${Math.floor(50 + t * 80)}, 0`;
        else this.color = `255, ${Math.floor(180 + t * 60)}, ${Math.floor(t * 30)}`;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy *= 0.97;
        this.vx *= 0.98;
        this.alpha -= this.decay;
        this.size *= 0.993;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        g.addColorStop(0, `rgba(${this.color}, 1)`);
        g.addColorStop(1, `rgba(${this.color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function spawnAmbient() {
      const count = 3;
      for (let i = 0; i < count; i++) {
        const x = W * 0.3 + (Math.random() - 0.5) * W * 0.5;
        const y = H * 0.7 + Math.random() * H * 0.2;
        particles.push(new Particle(x, y, false));
      }
    }

    function spawnMouse() {
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      if (mx < 0 || my < 0 || mx > W || my > H) return;
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(mx + (Math.random() - 0.5) * 20, my + (Math.random() - 0.5) * 20, true));
      }
    }

    let frame = 0;
    function loop() {
      ctx.clearRect(0, 0, W, H);
      frame++;
      if (frame % 2 === 0) spawnAmbient();
      if (frame % 1 === 0) spawnMouse();
      particles = particles.filter(p => p.alpha > 0);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(loop);
    }
    loop();

    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', onMove);
    const onLeave = () => { mouseRef.current = { x: -999, y: -999 }; };
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content container">
        <div className="hero-text">
          <span className="hero-eyebrow">Mumbai, India — Open to Global Opportunities</span>
          <h1 className="hero-name">Gregory<br /><span>Robert</span></h1>
          <div className="hero-typewriter">
            <span className="typewriter-label">{displayed}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-tagline">Building intelligent systems at the intersection of AI and engineering.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">9.5</span><span className="stat-label">CGPA</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Certifications</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">3+</span><span className="stat-label">Internships</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="80" r="42" fill="#E8DDD0"/>
                <ellipse cx="100" cy="165" rx="58" ry="38" fill="#E8DDD0"/>
                <circle cx="100" cy="78" r="34" fill="#C2390A" opacity="0.15"/>
                <text x="100" y="95" textAnchor="middle" fontSize="48" fill="#C2390A" fontFamily="serif" fontWeight="bold">GR</text>
                <circle cx="100" cy="78" r="40" stroke="#C2390A" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.4"/>
              </svg>
            </div>
          </div>
          <div className="floating-badge badge-1"><span>🤖</span> Agentic AI</div>
          <div className="floating-badge badge-2"><span>⚡</span> LangGraph</div>
          <div className="floating-badge badge-3"><span>🔥</span> RAG Pipelines</div>
          <div className="floating-badge badge-4"><span>☁️</span> AWS · OCI</div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
