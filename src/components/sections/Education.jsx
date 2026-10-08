import { education } from '../../data/education';
import SheetHeader from '../ui/SheetHeader';
import Reveal from '../ui/Reveal';

const Education = () => {
  return (
    <section id="education">
      <SheetHeader n={4} title="EDUCATION" />
      <div className="wrap">
        <Reveal className="ruler">
          <div className="ruler-line" />
          <div className="ruler-track">
            {education.map((e) => (
              <div className="ruler-item" key={e.degree}>
                <span className="yrs">{e.years}</span>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;