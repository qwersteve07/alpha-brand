import { useRef, useEffect, useState } from 'react';

const useIntersect = (fn = () => {}, threshold = 0.4) => {
  const [element, setElement] = useState([]);
  const watcher = useRef(null);
  const [intersectId, setIntersectId] = useState('');
  const setIntersectElements = (el, id = 'id') => {
    setElement(el);
    setIntersectId(id);
  };

  useEffect(() => {
    if (watcher.current) watcher.current.disconnect();

    watcher.current = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let elementStyle = entry.target.style;
            elementStyle.opacity = 1;
            elementStyle.transform = 'translateY(0)';
            elementStyle.transition = '0.6s ease all';
            fn(entry);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    element.forEach(ele => {
      watcher.current.observe(ele);
    });

    return () => {
      watcher.current.disconnect();
    };
  }, [element, intersectId]);

  return { setElement, setIntersectElements };
};

export default useIntersect;
