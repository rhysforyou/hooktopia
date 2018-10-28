import { useState, useEffect } from 'react';

export default function usePreferredColorScheme(defaultColorScheme = 'light') {
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    let active = true;

    const listener = () => {
      if (!active) {
        return;
      }

      if (mediaQueryList.matches) {
        setColorScheme(true);
      } else {
        setColorScheme(false);
      }
    };

    mediaQueryList.addListener(listener);
    setColorScheme(mediaQueryList.matches);

    return () => {
      active = false;
      mediaQueryList.removeListener(listener);
    };
  }, []);

  return colorScheme ? 'dark' : 'light';
}
