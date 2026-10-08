import { about } from '../../data/profile';
import SheetHeader from '../ui/SheetHeader';
import Reveal from '../ui/Reveal';

const About = () => {
  return (
    <section id="about">
      <SheetHeader n={2} title="ABOUT" />
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </Reveal>

        <Reveal>
          <table className="bom">
            <caption>DETAILS</caption>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>DESIGNATION</th>
                <th>VALUE</th>
              </tr>
            </thead>
            <tbody>
              {about.spec.map(([key, value], i) => (
                <tr key={key}>
                  <td className="idx">{String(i + 1).padStart(2, '0')}</td>
                  <td className="key">{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
