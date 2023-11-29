import { useRef, useEffect } from 'react';

export const useDidUpdate = (callback, deps) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      callback();
    } else didMountRef.current = true;
  }, [deps, callback]);
};
