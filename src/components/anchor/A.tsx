import React from 'react';

export function A({ href, children }) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}
