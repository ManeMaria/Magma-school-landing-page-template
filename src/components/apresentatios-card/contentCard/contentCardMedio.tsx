import React from 'react';
import { Card } from '../../card/Card';
import { IPropsCard } from '../protocols';

export function ContentCardMedio({ ...props }: IPropsCard) {
  return (
    <Card {...props}>
      <div>
        <p>
          O Ensino Médio tem como base desenvolver no adolescente sua autonomia
          intelectual e seu pensamento crítico, para ser capaz de prosseguir os
          estudos.
        </p>
        <p>
          E desenvolver nos alunos do Ensino Médio as competências básicas que
          estão propostas na LDB.
        </p>
        <p>Os objetivos do Ensino Médio, são constituidos: </p>
        <p>
          O desenvolvimento da capacidade de aprender e continuar aprendendo, da
          autonomia intelectual e do pensamento crítico, de modo a ser capaz de
          prosseguir os estudos e de adaptar-se com flexibilidade a novas
          condições de ocupação ou aperfeiçoamento.
        </p>
      </div>
      <div>
        <p>
          Constituição de significados socialmente construídos e reconhecidos
          como verdadeiros sobre o mundo físico e natural, sobre a realidade
          social e política.
        </p>
        <p>
          Compreensão do significado das áreas de conhecimento, Línguagens,
          Códigos e suas Tecnologias, Ciências da Natureza, Matemática e suas
          Tecnologias, Ciências Humanas e suas Tecnologias e temas Transversias.
          De modo a possuir as competências e habilidades necessáriasao
          exercício da cidadania e do trabalho.
        </p>
        <p>
          Domínio dos princípios e fundamentos científico-tecnológicos que
          presidem a produção moderna de bens, serviços e conhecimentos, tanto
          em seus produtos como em seus processos, de modo a ser capaz de
          relacionar a teoria com a prática e o desenvolvimento da flexibilidade
          para novas condições de ocupação ou aperfeiçoamento posteriores.
        </p>
      </div>
    </Card>
  );
}
