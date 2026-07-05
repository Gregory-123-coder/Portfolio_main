import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <a href="#hero" className="footer-logo">GR<span>.</span></a>
        <p className="footer-copy">© {new Date().getFullYear()} Gregory Robert · Mumbai, India</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/gregory-robert-7441512b5" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/gregory-123-coder" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:gregorynadarrobert@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
