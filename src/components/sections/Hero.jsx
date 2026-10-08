import { profile } from "../../data/profile";
import { asset } from "../../utils/asset";
import SheetHeader from "../ui/SheetHeader";
import Reveal from "../ui/Reveal";

const Hero = () => {
  const p = profile;
  return (
    <section id="home" className="hero">
      <SheetHeader n={1} title="PROFILE" />
      <div className="wrap">
        <div className="hero-grid">
          <Reveal>
            <div className="role">{p.role}</div>
            <h1>
              {p.firstName}
              <span>{p.lastName}</span>
            </h1>
            <p className="lede">{p.lede}</p>
            <div className="cta-row">
              <a className="btn solid" href={asset(p.resume)} download>
                ↓ Download CV
              </a>
              <a className="btn" href={`mailto:${p.email}`}>
                Contact Me
              </a>
            </div>
            <div className="ref-list">
              <a href={p.github.url} target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
              {p.hackerrank && (
                <a
                  href={p.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HACKERRANK
                </a>
              )}
            </div>
          </Reveal>

          <Reveal className="frame">
            <div className="c2" />
            <img src={asset(p.photo)} alt="Portrait of Onkar Khairnar" />
            <div className="cap">
              <span>FIG. 01 — SUBJECT</span>
              <span>SCALE 1:1</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;