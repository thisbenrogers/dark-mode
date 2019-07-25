import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (value) => {
  const [isDark, setIsDark] = useLocalStorage('dark', value);

  const body = document.body;

  useEffect(() => {
    isDark ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [isDark]);

  return [isDark, setIsDark];
}