import React from 'react';
import { useToggleMenu } from '../../hooks/useToggleMenu';
import { A } from '../anchor/A';
import { Li } from '../list-item/Li';
import * as s from './styles';

export function MenuNavigation() {
  const { toggle } = useToggleMenu();
  const linksForNavigation: string[] = [
    'Início',
    'Colégio',
    'Cursos',
    'Calendário',
    'Fotos',
    'Vídeos',
    'Exercícios',
    'Estrutura',
    'Fale conosco',
  ];
  return (
    <s.Container toggle={toggle}>
      <s.Content>
        {linksForNavigation.map((path) => (
          <Li>
            <A href="https://www.linkedin.com/in/cesar-damasceno">{path}</A>
          </Li>
        ))}
      </s.Content>
    </s.Container>
  );
}
