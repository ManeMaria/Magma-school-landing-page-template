import React, {
  ReactChild, ReactChildren, ReactFragment, ReactPortal,
} from 'react';

export interface IChildren {
    children: ReactChildren | ReactChild | ReactFragment | ReactPortal | null | undefined | string
}
