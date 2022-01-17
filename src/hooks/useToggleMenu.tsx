import { useContext } from 'react';
import { ProviderMenu } from '../providers/MenuMobile';
import { IContextProps } from '../providers/protocls';

export const useToggleMenu = ():IContextProps => {
  const { toggle, setToggle } = useContext<IContextProps>(ProviderMenu);
  return { toggle, setToggle };
};
