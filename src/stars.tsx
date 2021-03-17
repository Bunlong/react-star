// https://iconmonstr.com/star/
import React from 'react';

export function ThinStar(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path d="M12 .288l2.833 8.718H24l-7.417 5.389 2.833 8.718L12 17.725l-7.417 5.388 2.833-8.718L0 9.006h9.167z" />
    </svg>
  );
}

export function FatStar(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" />
    </svg>
  );
}
