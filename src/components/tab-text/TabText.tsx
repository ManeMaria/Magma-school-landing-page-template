import React from 'react';
import { TabTextProps } from './protocols';

import * as s from './styles';

export function TabText({ left, click, children }: TabTextProps) {
  return <s.Container onClick={click} left={left}>{children}</s.Container>;
}
