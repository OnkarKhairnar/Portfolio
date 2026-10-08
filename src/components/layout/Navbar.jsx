const Navbar = ({ sections }) => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-mark">
          <b>OK</b>/PORTFOLIO
        </div>

        <nav className="links">
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`}>
              {String(i + 1).padStart(2, '0')} {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;