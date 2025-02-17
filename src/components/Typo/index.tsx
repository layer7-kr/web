'use client';

import React, { useCallback, useEffect, useState } from 'react';

type ResponsiveValue = {
  [key: number | string]: string | number;
};

type StyleValue = string | number | ResponsiveValue;

interface TypoProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  family?: string;
  weight?: StyleValue;
  size: StyleValue;
  color?: StyleValue;
  letterSpacing?: StyleValue;
  className?: string;
  children: React.ReactNode;
}

export default function Typo(props: TypoProps) {
  const {
    as = 'p',
    family,
    weight = 'medium',
    size,
    color = '#212E38',
    className,
    letterSpacing = '-0.5px',
    children,
  } = props;

  const Element = as;
  const [currentStyles, setCurrentStyles] = useState({});

  const calculateStylesForBreakpoint = useCallback(
    (value: StyleValue, property: string) => {
      if (typeof value !== 'object') {
        return { [property]: value };
      }

      // Convert breakpoints to number array and sort them in ascending order
      const breakpoints = Object.entries(value)
        .map(([breakpoint, value]) => ({
          breakpoint: breakpoint === 'default' ? Infinity : Number(breakpoint),
          value,
        }))
        .sort((a, b) => a.breakpoint - b.breakpoint);

      const currentWidth = window.innerWidth;

      // Find the smallest breakpoint (excluding default)
      const smallestBreakpoint = breakpoints.find(
        (bp) => bp.breakpoint !== Infinity,
      );

      // If current width is smaller than or equal to the smallest breakpoint,
      // use that breakpoint's value directly
      if (smallestBreakpoint && currentWidth <= smallestBreakpoint.breakpoint) {
        return { [property]: smallestBreakpoint.value };
      }

      // For larger widths, find the appropriate breakpoint
      for (let i = breakpoints.length - 1; i >= 0; i--) {
        if (currentWidth > breakpoints[i].breakpoint) {
          return {
            [property]: breakpoints[i + 1]?.value || breakpoints[i].value,
          };
        }
      }

      // If no breakpoint matches, use the default value
      const defaultBreakpoint = breakpoints.find(
        (bp) => bp.breakpoint === Infinity,
      );
      return { [property]: defaultBreakpoint?.value || breakpoints[0].value };
    },
    [],
  );

  const updateStyles = useCallback(() => {
    const newStyles = {
      fontFamily: family,
      ...calculateStylesForBreakpoint(size, 'fontSize'),
      ...calculateStylesForBreakpoint(weight, 'fontWeight'),
      ...calculateStylesForBreakpoint(color, 'color'),
      ...calculateStylesForBreakpoint(letterSpacing, 'letterSpacing'),
    };
    setCurrentStyles(newStyles);
  }, [
    size,
    weight,
    color,
    letterSpacing,
    family,
    calculateStylesForBreakpoint,
  ]);

  useEffect(() => {
    // Initial style calculation
    updateStyles();

    // Add resize event listener
    const handleResize = () => {
      updateStyles();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateStyles]);

  return (
    <Element className={className} style={currentStyles}>
      {children}
    </Element>
  );
}
