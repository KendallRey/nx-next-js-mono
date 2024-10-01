"use client";

import { useEffect, useRef } from "react";

/**
 * Hook to call a function once with useEffect.
 * @param fn Function to be executed.
 */
export const useCallOnce = (fn: () => void) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    fn();
    isMounted.current = true;
  }, [fn]);
};
