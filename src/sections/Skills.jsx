import { useReveal } from '../hooks/useReveal';
import { useEffect, useRef } from 'react';
import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'JavaScript', 'Dart', 'SQL', 'C', 'C#'],
  },
  {
    category: 'Agentic AI & Frameworks',
    icon: '🤖',
    skills: ['LangChain', 'LangGraph', 'RAG Pipelines', 'AI Agents', 'Reflection-Based Agents', 'Multi-Agent Systems'],
  },
  {
    category: 'AI / ML Concepts',
    icon: '🧠',
    skills: ['Machine Learning', 'Generative AI', 'Agentic AI', 'NLP', 'Difficulty Prediction', 'Feature Engineering'],
  },
  {
    category: 'Frontend & Mobile',
    icon: '📱',
    skills: ['Flutter', 'Angular', 'Express.js', '.NET Core', 'Blazor'],
  },
  {
    category: 'Databases & Cloud',
    icon: '☁️',
    skills: ['Firebase', 'MySQL HeatWave', 'Oracle Cloud (OCI)', 'AWS (EC2, S3, Lambda)', 'Ganache', 'MetaMask'],
  },
];

const PROFICIENCY = [
  { label: 'Python & ML', pct: 88 },
  { label: 'LangChain / LangGraph', pct: 82 },
  { label: 'Flutter / Dart', pct: 80 },
  { label: 'RAG Pipelines', pct: 80 },
  { label: 'SQL & Databases', pct: 75 },
  { label: 'Cloud (AWS · OCI)', pct: 70 },
];

function ProficiencyBar({ label, pct, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => { el.style.width = pct + '%'; }, delay * 100);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div className="prof-item">
      <div className="prof-header">
        <span className="prof-label">{label}</span>
        <span className="prof-pct">{pct}%</span>
      </div>
      <div className="prof-track">
        <div ref={ref} className="prof-fill" style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">My Toolkit</span>
          <div className="gold-rule" />
          <h2 className="section-heading">Technical<br /><span>Skills</span></h2>
        </div>
        <div className="skills-layout">
          <div className="skills-tags-grid reveal delay-1">
            {SKILL_GROUPS.map((g, i) => (
              <div key={i} className="skill-group">
                <div className="skill-group-header">
                  <span className="skill-group-icon">{g.icon}</span>
                  <span className="skill-group-cat">{g.category}</span>
                </div>
                <div className="skill-pills">
                  {g.skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="skills-bars reveal-right delay-2">
            <h3 className="skills-bars-title">Proficiency Overview</h3>
            {PROFICIENCY.map((p, i) => (
              <ProficiencyBar key={i} {...p} delay={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
