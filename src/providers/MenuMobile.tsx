/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IContextProps, IPropsMenuMobile } from './protocls';

const defaultValue:IContextProps = {
  toggle: false,
  setToggle: (value) => {},
};
export const ProviderMenu = React.createContext(defaultValue);
export function ProviderMenuMobile({ children }:IPropsMenuMobile) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <ProviderMenu.Provider value={{ toggle, setToggle }}>
      {children}
    </ProviderMenu.Provider>
  );
}
