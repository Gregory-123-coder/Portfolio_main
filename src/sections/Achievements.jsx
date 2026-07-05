import { useReveal } from '../hooks/useReveal';
import './Achievements.css';

const ACHIEVEMENTS = [
  { label: 'Semi-Finalist', event: 'ET Generative AI Hackathon', tier: 'gold', icon: '🏆' },
  { label: '2nd Prize', event: 'Cognition Project Presentation, SIES GST (Oct 2024)', tier: 'gold', icon: '🥈' },
  { label: 'Top 10', event: 'Synapse Case Study Competition, SIES GST (Feb 2026)', tier: 'silver', icon: '📊' },
  { label: 'School Topper', event: 'ISC Science Stream, Presentation Convent School', tier: 'gold', icon: '🎓' },
  { label: 'Participant', event: 'FedEx SMART Hackathon, Shaastra 2026 (IIT Madras)', tier: 'bronze', icon: '⚡' },
  { label: 'Participant', event: "Bounty Quest 2026, Pragyan'26 (NIT Tiruchirappalli)", tier: 'bronze', icon: '🔥' },
  { label: 'Participant', event: 'OpScape 2.0 (IIM Tiruchirappalli)', tier: 'bronze', icon: '📈' },
  { label: 'Participant', event: 'Hackfest Innov8 Tmrw (VIT Mumbai), Team Eternals', tier: 'bronze', icon: '💡' },
  { label: 'Participant', event: 'Hero Campus Challenge Season 10 (Hero MotoCorp)', tier: 'bronze', icon: '🚀' },
  { label: 'Participant', event: 'AI Quiz Competition 2026 (KIoT, Tamil Nadu)', tier: 'bronze', icon: '🧩' },
];

export default function Achievements() {
  const ref = useReveal();
  return (
    <section id="achievements" className="achievements" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Recognition</span>
          <div className="gold-rule" />
          <h2 className="section-heading">Achievements &<br /><span>Competitions</span></h2>
        </div>
        <div className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className={`ach-card reveal delay-${(i % 5) + 1} ach-${a.tier}`}>
              <span className="ach-icon">{a.icon}</span>
              <div>
                <span className={`ach-label ach-label-${a.tier}`}>{a.label}</span>
                <p className="ach-event">{a.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
