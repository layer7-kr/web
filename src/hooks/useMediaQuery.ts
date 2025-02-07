import { useState, useEffect, useLayoutEffect, useMemo } from "react";

const useMediaQuery = () => {
  const isClient = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;

  const mediaQuery = <T>(queries: Record<number | "default", T>) => {
    const { default: defaultValue, ...breakpoints } = queries;

    const sortedBreakpoints = useMemo(() => 
      Object.entries(breakpoints).sort(([a], [b]) => Number(a) - Number(b)),
      [breakpoints]
    );

    const getDefaultValue = () => {
      return defaultValue ?? sortedBreakpoints[sortedBreakpoints.length - 1][1];
    };

    const [currentValue, setCurrentValue] = useState(getDefaultValue());

    const getCurrentValue = () => {
      if (!isClient) return getDefaultValue();

      const windowWidth = window.innerWidth;

      for (const [breakpoint, value] of sortedBreakpoints) {
        if (windowWidth <= Number(breakpoint)) {
          return value;
        }
      }

      return defaultValue ?? sortedBreakpoints[sortedBreakpoints.length - 1][1];
    };

    useIsomorphicLayoutEffect(() => {
      if (!isClient) return;

      const handleResize = () => {
        const newValue = getCurrentValue();
        setCurrentValue(newValue);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [sortedBreakpoints, defaultValue]);

    return currentValue;
  };

  return mediaQuery;
};

export default useMediaQuery;