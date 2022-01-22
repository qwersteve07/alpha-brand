import { useState, useEffect } from 'react';

export const DEVICE_DESKTOP = 'desktop';
export const DEVICE_PAD = 'pad';
export const DEVICE_MOBILE = 'mobile';

const useDeviceType = () => {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && device !== 'desktop') {
        setDevice('desktop');
      } else if (window.innerWidth <= 1024 && window.innerWidth > 767 && device !== 'pad') {
        setDevice('pad');
      } else if (window.innerWidth <= 767 && device !== 'mobile') {
        setDevice('mobile');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [device]);

  return device;
};

export default useDeviceType;
