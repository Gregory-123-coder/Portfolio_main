import { useReveal } from '../hooks/useReveal';
import './Story.css';

const CHAPTERS = [
  {
    step: '01',
    title: 'Learning the systems',
    copy: 'A strong academic base in AI and Data Science shaped the way I think: break problems into signals, models, interfaces, and outcomes.',
  },
  {
    step: '02',
    title: 'Building useful intelligence',
    copy: 'Internships and hackathons pushed me toward practical AI: RAG workflows, agentic pipelines, difficulty prediction, and learning platforms.',
  },
  {
    step: '03',
    title: 'Shipping across the stack',
    copy: 'Flutter, Firebase, cloud services, and web engineering let me turn models into products people can actually use.',
  },
  {
    step: '04',
    title: 'Moving toward research-grade AI',
    copy: 'The next chapter is deeper AI engineering: GATE 2027, graduate study, MLOps, LLM systems, and reliable agent architectures.',
  },
];

export default function Story() {
  const ref = useReveal();

  return (
    <section id="story" className="story" ref={ref}>
      <div className="story-backdrop" aria-hidden="true" />
      <div className="container">
        <div className="story-header reveal">
          <span className="section-eyebrow">The Throughline</span>
          <div className="gold-rule" />
          <h2 className="section-heading">A portfolio with a<br /><span>clear narrative arc.</span></h2>
          <p>
            My work is not a random collection of projects. It is a steady move from learning AI fundamentals,
            to building intelligent products, to preparing for deeper research and global engineering roles.
          </p>
        </div>

        <div className="story-reel">
          {CHAPTERS.map((chapter, index) => (
            <article key={chapter.step} className={`story-card reveal-zoom delay-${index + 1}`}>
              <span className="story-step">{chapter.step}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
