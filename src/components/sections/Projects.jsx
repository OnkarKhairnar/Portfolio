import { useState } from 'react';
import { projects, projectGroups } from '../../data/projects';
import SheetHeader from '../ui/SheetHeader';
import Reveal from '../ui/Reveal';
import ProjectCard from './projects/ProjectCard';
import ProjectModal from './projects/ProjectModal';

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects">
      <SheetHeader n={5} title="PROJECTS" />
      <div className="wrap">
        {projectGroups.map((g, i) => (
          <div key={g.key} style={i > 0 ? { marginTop: 36 } : undefined}>
            <Reveal className="proj-group-label">
              <span className="lyr">{g.label}</span>
              <span>{g.name}</span>
            </Reveal>
            <Reveal className="proj-grid">
              {projects
                .filter((p) => p.group === g.key)
                .map((p) => (
                  <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
                ))}
            </Reveal>
          </div>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;