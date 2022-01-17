import {
  ReactChild, ReactChildren, ReactFragment, ReactPortal,
} from 'react';

export interface PropsLi {
    children: ReactChildren | ReactChild | ReactFragment | ReactPortal | null | undefined | string
}
