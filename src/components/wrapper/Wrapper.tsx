import React from 'react';
import { ProviderMenuMobile } from '../../providers/MenuMobile';
import { IChildren } from '../../types/children';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { MenuNavigation } from '../menu-navigation/MenuNavigation';
import * as s from './styles';

export function Wrapper({ children }:IChildren) {
  return (
    <s.Container>
      <ProviderMenuMobile>
        <Header />
        <MenuNavigation />
      </ProviderMenuMobile>
      {children}
      <Footer />
    </s.Container>
  );
}
