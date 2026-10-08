import { useEffect, useRef, useState } from 'react';

// Fades / slides its content in the first time it scrolls into view.
const Reveal = ({ as: Tag = 'div', className = '', children, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal${shown ? ' in' : ''}${className ? ' ' + className : ''}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;