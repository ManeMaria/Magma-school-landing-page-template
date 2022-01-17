import React from 'react';
import { Card } from '../../card/Card';
import { IPropsCard } from '../protocols';

export function ContentCardInfantil({ ...props }:IPropsCard) {
  return (
    <Card {...props}>
      <div>
        <p>
          Primeira etapa da educação básica, tem como finalidade o
          desenvolvimento integral da criança até cinco anos de idade, em seus
          aspectos físico, psicológico, intelectual e social, complementando
          ação da família e da comunidade.
        </p>
        <p>Constituem objetivos do ensino de educação infantil:</p>
        <p>
          Proporcionar condições para que o educando desenvolva os aspectos
          cognitivos, sócio-afetivos, perceptivos e motores, respeitando seu
          processo de maturação.
        </p>
      </div>
      <div>
        <p>
          Dar ao educando condições para que possa, diante de situações que lhe
          são apresentadas, generalizar experiências vividas.
        </p>
        <p>
          Proporcionar ao educando o seu desenvolvimento individual para que
          possa adquirir autonomia, confiança e espírito de cooperação;
        </p>
        <p>
          Proporcionar ao educando o seu desenvolvimento individual para que
          possa adquirir autonomia, confiança e espírito de cooperação;
        </p>
        <p>
          Desenvolver no educando a responsabilidade pessoal e a compreesão que
          favoreçam o desenvolvimento harmonioso da personalidade.
        </p>
      </div>
    </Card>
  );
}
