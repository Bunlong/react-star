import React from 'react';

export function calculateTotalIcons(start: number, stop: number, step: number) {
  return Math.floor((stop - start) / step);
}

export function renderIcon(icon: any) {
  if (React.isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === 'object' && icon !== null) {
    return <span style={icon} />;
  }
  if (Object.prototype.toString.call(icon) === '[object String]') {
    return <span className={icon} />;
  }
  return null;
}
