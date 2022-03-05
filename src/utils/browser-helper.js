import { useState, useEffect } from 'react';
import Bowser from 'bowser';

const useBrowser = () => {
  const [browserName, setBrowserName] = useState('');

  useEffect(() => {
    const browser = Bowser.getParser(window.navigator.userAgent);
    setBrowserName(browser.getBrowserName());
  }, []);

  return browserName;
};

export default useBrowser;
