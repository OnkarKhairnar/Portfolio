import { Fragment } from "react";
import { skillLayers, stackCaption } from "../../data/skills";
import SheetHeader from "../ui/SheetHeader";
import Reveal from "../ui/Reveal";

const Skills = () => {
  return (
    <section id="skills">
      <SheetHeader n={3} title="SKILLS" />
      <div className="wrap">
        <Reveal className="stack-diagram">
          {skillLayers.map((layer, i) => (
            <Fragment key={layer.layer}>
              {i > 0 && <div className="stack-connector" />}
              <div className="stack-layer">
                <div className="stack-label">
                  <span className="lyr">{layer.layer}</span>
                  <span>{layer.name}</span>
                </div>
                <div className="chip-row">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className={`chip${layer.featured.includes(item) ? " chip-lg" : ""}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </Reveal>
        <p className="stack-caption">{stackCaption}</p>
      </div>
    </section>
  );
};

export default Skills;
