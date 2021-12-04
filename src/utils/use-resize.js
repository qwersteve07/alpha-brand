import { useState, useEffect } from 'react';

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [windowHeight, setWindowHeight] = useState();

  useEffect(() => {
    const resizeView = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    resizeView();

    window.addEventListener('resize', resizeView);
    return () => {
      window.removeEventListener('resize', resizeView);
    };
  }, []);

  return { windowWidth, windowHeight };
};

export default useResize;
