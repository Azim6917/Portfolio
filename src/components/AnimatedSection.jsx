import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * AnimatedSection
 * Wraps any section/element with a scroll-triggered fade-up animation.
 * Props:
 *   - className: extra classes
 *   - delay: CSS animation delay string (e.g. '200ms')
 *   - direction: 'up' | 'left' | 'right' | 'fade'
 *   - threshold: IntersectionObserver threshold (0–1)
 */
const AnimatedSection = ({
  children,
  className = '',
  delay = '0ms',
  direction = 'up',
  threshold = 0.15,
  as: Tag = 'div',
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const baseStyle = {
    transitionDelay: delay,
    transitionDuration: '700ms',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transitionProperty: 'opacity, transform',
  };

  const hiddenStyles = {
    up: { opacity: 0, transform: 'translateY(40px)' },
    left: { opacity: 0, transform: 'translateX(-40px)' },
    right: { opacity: 0, transform: 'translateX(40px)' },
    fade: { opacity: 0 },
  };

  const visibleStyle = { opacity: 1, transform: 'translate(0)' };

  const style = {
    ...baseStyle,
    ...(isVisible ? visibleStyle : hiddenStyles[direction]),
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
};

export default AnimatedSection;
