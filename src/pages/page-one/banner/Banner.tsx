import React from 'react';
import { Sections } from '../../../components/section/Section';
import * as s from './styles';

export function Banner() {
  return (
    <Sections>
      <s.Container>
        <s.Content className="animate__animated animate__fadeIn">
          <s.PhraseTop>
            Bem-vindo
          </s.PhraseTop>
          <s.PhraseMiddle>
            ao Colégio e Curso
          </s.PhraseMiddle>
          <s.PhraseBottom>
            Magma
          </s.PhraseBottom>
        </s.Content>
      </s.Container>
    </Sections>
  );
}
