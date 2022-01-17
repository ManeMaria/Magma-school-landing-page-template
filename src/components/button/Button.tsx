import React from 'react';
import { ButtonProps } from './protocols';
import * as s from './styles';

export function Button({ type = 'button', children }:ButtonProps) {
  return <s.Container type={type}>{children}</s.Container>;
}
