// One wave period is 720 units wide, so the path repeats seamlessly.
// The SVG is 200% wide and slides left by 50%, which loops forever.
const PATH =
  'M0,60 C180,0 540,120 720,60 S1260,120 1440,60 S1980,120 2160,60 S2700,120 2880,60 L2880,120 L0,120 Z';

const Waves = () => {
  return (
    <div className="waves" aria-hidden="true">
      {['wave-1', 'wave-2', 'wave-3'].map((cls) => (
        <svg
          key={cls}
          className={`wave ${cls}`}
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
        >
          <path d={PATH} vectorEffect="non-scaling-stroke" />
        </svg>
      ))}
    </div>
  );
};

export default Waves;