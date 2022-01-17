import {
  ReactChildren, ReactChild, ReactFragment, ReactPortal,
} from 'react';
import { TabTextProps } from '../tab-text/protocols';

export interface CardProps extends TabTextProps {
  zIndex: number
  backGroundColor: string
  tabText: string
  srcIgmTitle: string
  presentationSrcImg: string
  children: ReactChildren | ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}
