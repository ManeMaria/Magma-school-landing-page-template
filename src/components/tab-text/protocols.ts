import {
  ReactChild, ReactChildren, ReactFragment, ReactPortal,
} from 'react';

export interface TabTextProps {
  left: string
  click: () => void
  children: ReactChildren | ReactChild | ReactFragment | ReactPortal | null | undefined | string
}
