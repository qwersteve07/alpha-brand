import { useRef, useEffect } from 'react';

const UseTimeout = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);
};

export default UseTimeout;
