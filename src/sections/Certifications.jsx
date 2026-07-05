import { useReveal } from '../hooks/useReveal';
import './Certifications.css';

const CERTS = [
  {
    name: 'IBM Agentic AI Professional Certificate',
    issuer: 'IBM / Coursera',
    date: '2026',
    status: 'completed',
    highlights: ['LangChain & LangGraph Agents', 'RAG Pipelines', 'Reflection-Based Agents', 'Multi-Agent Systems'],
    icon: '🤖',
  },
  {
    name: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM / Coursera',
    date: 'In Progress · 2026',
    status: 'inprogress',
    highlights: [],
    icon: '⚙️',
  },
  {
    name: 'Linux for Developers (IBM)',
    issuer: 'IBM / Coursera',
    date: 'In Progress · 2026',
    status: 'inprogress',
    highlights: [],
    icon: '🐧',
  },
  {
    name: 'OCI Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Sep 2025 · Valid until Sep 2027',
    status: 'completed',
    highlights: [],
    icon: '☁️',
  },
  {
    name: 'OCI AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Aug 2025 · Valid until Aug 2027',
    status: 'completed',
    highlights: [],
    icon: '🔷',
  },
  {
    name: 'MySQL HeatWave Implementation Certified Associate',
    issuer: 'Oracle University',
    date: 'Oct 2025',
    status: 'completed',
    highlights: [],
    icon: '🗄️',
  },
  {
    name: 'Microsoft Front-End Developer Professional Certificate',
    issuer: 'Microsoft / Coursera',
    date: 'Dec 2025',
    status: 'completed',
    highlights: [],
    icon: '🪟',
  },
  {
    name: 'Python for Everybody Specialisation',
    issuer: 'University of Michigan / Coursera',
    date: 'Jul 2025',
    status: 'completed',
    highlights: [],
    icon: '🐍',
  },
  {
    name: 'Data Science Foundations Specialisation',
    issuer: 'University of London & IBM / Coursera',
    date: 'Oct 2025',
    status: 'completed',
    highlights: [],
    icon: '📊',
  },
  {
    name: 'Flutter & Dart — The Complete Guide',
    issuer: 'Udemy (Academind)',
    date: 'Sep 2024',
    status: 'completed',
    highlights: [],
    icon: '📱',
  },
  {
    name: '.NET Core & C# Certification',
    issuer: 'NSDC',
    date: '2025',
    status: 'completed',
    highlights: [],
    icon: '🔵',
  },
];

export default function Certifications() {
  const ref = useReveal();
  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Credentials</span>
          <div className="gold-rule" />
          <h2 className="section-heading">Certifications &<br /><span>Learning</span></h2>
        </div>
        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <div key={i} className={`cert-card reveal delay-${(i % 5) + 1} ${c.status === 'inprogress' ? 'cert-inprogress' : ''}`}>
              <div className="cert-top">
                <span className="cert-icon">{c.icon}</span>
                <span className={`cert-status ${c.status === 'inprogress' ? 'status-inprogress' : 'status-done'}`}>
                  {c.status === 'inprogress' ? 'In Progress' : '✓ Completed'}
                </span>
              </div>
              <h3 className="cert-name">{c.name}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <p className="cert-date">{c.date}</p>
              {c.highlights.length > 0 && (
                <div className="cert-highlights">
                  {c.highlights.map(h => <span key={h} className="tag tag-ember">{h}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
