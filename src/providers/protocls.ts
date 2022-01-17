/* eslint-disable no-unused-vars */

import {
  ReactChildren, ReactChild, ReactFragment, ReactPortal,
} from 'react';

export interface IContextProps {
    toggle: boolean;
    setToggle: (value: boolean) => void;
}

export interface IPropsMenuMobile {
    children: ReactChildren | ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}
