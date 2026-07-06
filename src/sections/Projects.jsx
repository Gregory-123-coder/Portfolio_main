import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Personalised AI Learning Platform',
    description: 'An AI-driven educational platform that predicts content difficulty and adapts learning paths for each student using ML models and RAG pipelines. Built during my internship at Skill Guru Foundation.',
    tags: ['Python', 'ML', 'RAG', 'LangChain', 'NLP'],
    demo: 'https://drive.google.com/file/d/1uzHjLB3bvuV0svIIHIHL1qqUYGcROqYo/view?usp=drive_link',
    highlight: true,
    code: 'AI',
    label: 'AI Platform',
  },
  {
    title: 'ET GenAI Hackathon Project',
    description: 'Semi-finalist submission at the ET Generative AI Hackathon. An agentic AI solution built with LangChain/LangGraph demonstrating real-world generative AI capabilities.',
    tags: ['LangChain', 'LangGraph', 'Generative AI', 'Agents'],
    demo: null ,
    highlight: true,
    code: 'ET',
    label: 'Hackathon',
  },
  {
    title: 'Pet Adoption App',
    description: 'Cross-platform mobile application built with Flutter and Firebase. Features real-time data sync, secure authentication, and full adoption workflow management.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
    demo: null,
    highlight: false,
    code: 'APP',
    label: 'Mobile App',
  },
  {
    title: 'Flutter Desktop Application',
    description: 'Internal operations tool developed for Change Networks. Handled complex API integrations and business-logic automation across desktop platforms via Flutter.',
    tags: ['Flutter', 'Dart', 'API Integration', 'Desktop'],
    demo: null,
    highlight: false,
    code: 'OPS',
    label: 'Desktop App',
  },
  {
    title: 'Shipment Management System',
    description: 'Decentralised shipment management system built on blockchain. Uses Ganache for local blockchain, MetaMask for wallet auth, and Solidity smart contracts for immutable records.',
    tags: ['Solidity', 'Ganache', 'MetaMask', 'Web3', 'Blockchain'],
    demo: null,
    highlight: false,
    code: 'WEB3',
    label: 'Blockchain',
  },
];

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">What I've Built</span>
          <div className="gold-rule" />
          <h2 className="section-heading">Featured<br /><span>Projects</span></h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className={`project-card reveal delay-${(i % 4) + 1} ${p.highlight ? 'project-highlight' : ''}`}>
              <div className="project-top">
                <span className="project-code">{p.code}</span>
                <span className="tag tag-ember">{p.label}</span>
                {p.highlight && <span className="project-featured">Featured</span>}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="project-demo">
                  Watch Demo
                </a>
              )}
              {!p.demo && (
                <span className="project-no-demo">Private / Internal Project</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
