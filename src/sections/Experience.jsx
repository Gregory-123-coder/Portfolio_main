import { useReveal } from '../hooks/useReveal';
import './Experience.css';

const EXPERIENCE = [
  {
    role: 'AI/ML Intern',
    org: 'Skill Guru Foundation (NGO)',
    period: 'Dec 2025 – Feb 2026',
    type: 'Internship',
    bullets: [
      'Built ML models for question and content difficulty prediction to personalise student learning paths.',
      'Performed feature engineering, model evaluation, and performance analysis on real-world educational datasets.',
      'Implemented RAG-based AI workflows to improve content recommendations and adaptive assessments.',
    ],
    tags: ['Python', 'ML', 'RAG', 'LangChain'],
  },
  {
    role: 'Flutter Developer Intern',
    org: 'Change Networks',
    period: 'Sep 2025 – Oct 2025',
    type: 'Internship',
    bullets: [
      'Built Flutter-based cross-platform desktop applications for internal operations.',
      'Handled API integration and frontend development, improving workflow automation.',
    ],
    tags: ['Flutter', 'Dart', 'API Integration'],
  },
  {
    role: 'Flutter Developer — In-house Internship',
    org: 'SIES GST AI & Data Science Dept.',
    period: 'Jun 2024 (15 days)',
    type: 'In-house',
    bullets: [
      'Developed a full-featured Pet Adoption App using Flutter and Firebase.',
      'Completed value-added course on Mobile App Development using Flutter.',
    ],
    tags: ['Flutter', 'Firebase', 'Mobile Dev'],
  },
  {
    role: 'Blockchain Technology — In-house Internship',
    org: 'SIES GST AI & Data Science Dept.',
    period: 'Jan 2025 (15 days)',
    type: 'In-house',
    bullets: [
      'Completed Blockchain Technology course and built a Crowdfunding / Chat App as the internship project.',
    ],
    tags: ['Solidity', 'Ganache', 'MetaMask', 'Web3'],
  },
];

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Where I've Worked</span>
          <div className="gold-rule" />
          <h2 className="section-heading">Experience &<br /><span>Internships</span></h2>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <div key={i} className={`timeline-item reveal delay-${i + 1}`}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-org">{item.org}</p>
                  </div>
                  <div className="timeline-right">
                    <span className="timeline-period">{item.period}</span>
                    <span className={`timeline-badge ${item.type === 'Internship' ? 'badge-intern' : 'badge-inhouse'}`}>{item.type}</span>
                  </div>
                </div>
                <ul className="timeline-bullets">
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="timeline-tags">
                  {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
