import { useState, useEffect } from 'react';

export default function usePreferredColorScheme(defaultColorScheme = 'light') {
  const [matches, setMatches] = useState(defaultColorScheme == 'dark');

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addListener(listener);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);

  return matches ? 'dark' : 'light';
}
