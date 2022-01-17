import {
  ReactChildren, ReactChild, ReactFragment, ReactPortal,
} from 'react';

export interface ButtonProps {
  children: ReactChildren | ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined
  ref?: HTMLButtonElement | null;

}
