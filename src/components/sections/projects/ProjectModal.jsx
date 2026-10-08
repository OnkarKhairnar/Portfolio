import { useEffect, useRef } from "react";

// Uses the native <dialog>: focus trap, Esc to close, inert background and
// focus-return are all handled by the browser.
const ProjectModal = ({ project, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="modal-panel"
      aria-labelledby="modalTitle"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {project && (
        <div className="modal-inner">
          <div className="c2" />
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close detail view"
          >
            ×
          </button>
          <div className="modal-id">
            DETAIL — {project.code} / {project.kind}
          </div>
          <h3 id="modalTitle">{project.title}</h3>
          <p>{project.desc}</p>
          <div className="chip-row">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          {(project.links.repo || project.links.live) && (
            <div className="ref-list modal-links">
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REPO
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE DEMO
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
};

export default ProjectModal;
