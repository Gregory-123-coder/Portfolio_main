import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="reveal">
              <span className="section-eyebrow">Who I Am</span>
              <div className="gold-rule" />
              <h2 className="section-heading">Driven by curiosity,<br /><span>built on code.</span></h2>
            </div>
            <div className="reveal delay-1">
              <p className="about-para">
                I'm Gregory Robert, a final-year B.Tech student in AI & Data Science at SIES Graduate School of Technology, Mumbai — maintaining a CGPA of <strong>9.5/10</strong>. I build end-to-end intelligent systems, from agentic AI pipelines to full-stack web and mobile applications.
              </p>
              <p className="about-para">
                My work spans <strong>LangChain & LangGraph agent architectures</strong>, RAG pipelines, ML-based prediction systems, and cloud deployment on AWS and Oracle Cloud. I'm equally comfortable designing a Flutter UI and fine-tuning an AI retrieval system.
              </p>
              <p className="about-para">
                I'm preparing for <strong>GATE 2027 (DA)</strong> and targeting a Masters in AI/ML Engineering — actively exploring opportunities in Germany and Ireland.
              </p>
            </div>
            <div className="reveal delay-2 about-links">
              <a href="mailto:gregorynadarrobert@gmail.com" className="btn-primary">Say Hello</a>
              <a href="https://linkedin.com/in/gregory-robert-7441512b5" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn ↗</a>
            </div>
          </div>

          <div className="about-right reveal-right delay-1">
            <div className="about-card">
              <div className="about-card-icon">🎓</div>
              <h3>Education</h3>
              <p>B.Tech — AI & Data Science<br /><em>SIES GST, Mumbai University</em></p>
              <p className="about-card-meta">Expected 2027 · CGPA 9.5</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🌍</div>
              <h3>Languages</h3>
              <div className="lang-tags">
                {['English', 'Hindi', 'Tamil'].map(l => (
                  <span key={l} className="tag">{l}</span>
                ))}
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🎯</div>
              <h3>Currently</h3>
              <ul className="about-currently">
                <li>Preparing for GATE 2027 DA</li>
                <li>IBM AI Engineering Certificate</li>
                <li>Linux for Developers (IBM)</li>
                <li>Open to internships & research roles</li>
              </ul>
            </div>
            <div className="about-card interest-card">
              <div className="about-card-icon">⚡</div>
              <h3>Core Interests</h3>
              <div className="lang-tags">
                {['Agentic AI', 'RAG Systems', 'MLOps', 'AI Research', 'LLMs', 'Cloud Infra'].map(i => (
                  <span key={i} className="tag tag-ember">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
