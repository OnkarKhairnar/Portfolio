import { profile } from '../../data/profile';
import SheetHeader from '../ui/SheetHeader';
import Reveal from '../ui/Reveal';

const Contact = () => {
  const p = profile;
  const rows = [
    ['DRAWN BY', p.shortName],
    ['ROLE', p.title],
    ['LOCATION', p.location],
    ['EMAIL', p.email],
    ['GITHUB', p.github.handle],
    ['SCALE', '1:1'],
    ['SHEET', '06 OF 06'],
  ];

  return (
    <section id="contact">
      <SheetHeader n={6} title="CONTACT" />
      <div className="wrap">
        <Reveal className="contact-panel">
          <div>
            <h2>
              Let's build
              <br />
              something.
            </h2>
            <p>Open to full-time roles, collaborations, or just a conversation about a problem worth solving.</p>
            <div className="cta-row">
              <a className="btn solid" href={`mailto:${p.email}`}>
                Email Me →
              </a>
              <a className="btn" href={p.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="titleblock">
            {rows.map(([k, v]) => (
              <div className="row" key={k}>
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;