/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Sections } from '../../../components/section/Section';
import { Container, Span1, Span2 } from './styles';
import logo520 from '../../../assets/images/logo520.png';

export function Sections4() {
  return (
    <Sections>
      <Container>
        <Span1>
          <img src={logo520} alt="logo 520" />
        </Span1>
        <Span2>
          <h2>O colégio</h2>
          <h3>
            <p>
              Nosso colégio foi fundado em 1999 com o objetivo de atender
              crianças e jovens da comunidade para atuarem dinamicamente no meio
              que os rodeia, cooperando no incremento e aperfeiçoamento do
              acervo cultural e que adquiram elementos científicos e filosóficos
              indispensáveis para alcançarem sua autonomia intelectual.
            </p>
            <p>
              Os objetivos do Colégio e Curso Magma convergirão para os fins e
              objetivos da Educação Nacional.
            </p>
          </h3>
        </Span2>
      </Container>
    </Sections>
  );
}
