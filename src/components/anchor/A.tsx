import React, {
  ReactChild, ReactChildren, ReactFragment, ReactPortal,
} from 'react';
import { IChildren } from '../../types/children';

interface IA extends IChildren {
  href: string;
}

export function A({ href, children }: IA) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}
