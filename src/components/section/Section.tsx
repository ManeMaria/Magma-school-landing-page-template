import React from 'react';
import { IChildren } from '../../types/children';
import { Container } from './styles';

export function Sections({ children }: IChildren) {
  return <Container>{children}</Container>;
}
