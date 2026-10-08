const ProjectCard = ({ project: p, onOpen }) => {
  const [prefix, num] = [p.code.slice(0, 4), p.code.slice(4)];
  return (
    <article className="proj-card">
      <div className="proj-id">
        {prefix}
        <b>{num}</b> / {p.kind}
      </div>
      <h3>{p.title}</h3>
      <p className="teaser">{p.teaser}</p>
      <div className="chip-row">
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="see-detail"
        onClick={onOpen}
        aria-haspopup="dialog"
      >
        SEE DETAIL →<span className="sr-only"> — {p.title}</span>
      </button>
    </article>
  );
};

export default ProjectCard;
