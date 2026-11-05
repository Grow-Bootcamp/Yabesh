import { useEffect, useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);

      return saved !== null 
        ? JSON.parse(saved) as T
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;    // as const -> It tells TypeScript to treat the returned array as a fixed tuple rather than a regular array.
};

export default useLocalStorage;