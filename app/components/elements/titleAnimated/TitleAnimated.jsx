import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TitleAnimated = () => {
  const contRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `Hi, I'm <span >Elvis</span >`,
        `Hi, I'm <span >Elvis Ariel</span >`,
        `Hi, I'm <span >Elvis Miranda</span >`,
        `Nice to meet <span >you!</span >`,
        `Hi, I'm <span >Elvis</span>`,
      ],
      typeSpeed: 60,
      backSpeed: 70,
      onComplete: () => (contRef.current.nextSibling.style.display = 'none'),
    };

    textRef.current = new Typed(contRef.current, options);

    return () => {
      textRef.current.destroy();
    };
  }, []);
  return (
    <>
      <div className="type-wrap font-bold text-4xl pt-6 sm:text-5xl lg:text-6xl">
        <span
          className="TitleAnimeColor"
          style={{ whiteSpace: 'pre' }}
          ref={contRef}
        />
      </div>
    </>
  );
};

export default TitleAnimated;
