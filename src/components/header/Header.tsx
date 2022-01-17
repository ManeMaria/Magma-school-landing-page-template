/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import * as s from './styles';
// @ts-ignore
import logo from '../../assets/images/logo120.png';
import { Button } from '../button/Button';
import { A } from '../anchor/A';
import { ButtonMenuMobile } from '../button-menu-mobile/ButtonMenuMobile';
import { useToggleMenu } from '../../hooks/useToggleMenu';
import { IContextProps } from '../../providers/protocls';

export function Header() {
  const valuesHook: IContextProps = useToggleMenu();
  return (
    <s.Container>
      <img src={logo} alt="logo empresa" />
      <h2>A EDUCAÇÃO NÃO É A PREPARAÇÃO PARA A VIDA, É A PRÓPRIA VIDA</h2>

      <s.ContainerButtons>
        <s.ContentButtons>
          {['área do Professor', 'área do aluno'].map((ph) => (
            <Button>
              <A href="https://www.linkedin.com/in/cesar-damasceno">{ph}</A>
            </Button>
          ))}
          <ButtonMenuMobile valueHook={{ ...valuesHook }} />
        </s.ContentButtons>
      </s.ContainerButtons>
    </s.Container>
  );
}
