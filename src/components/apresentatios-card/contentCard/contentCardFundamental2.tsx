import React from 'react';
import { Card } from '../../card/Card';
import { IPropsCard } from '../protocols';

export function ContentCardFundamental2({ ...props }: IPropsCard) {
  return (
    <Card {...props}>

      <div>
        <p>O Ensino Fundamental destina-se à formação do pré-adolescente:</p>
        <p>
          Visando ao desenvolvimento de suas potencialidades como elemento de
          auto-realização, preparação para o trabalho e para o exercício
          consciente da cidadania, variando em conteúdos e métodos segundo as
          fases do desenvolvimento dos alunos.
        </p>
        <p>
          Os objetivos do ensino fundamental deverão convergir para os fins mais
          amplos da educação, expressos pela lei de diretrizes e bases da
          educação nacional(lei nº 9394)
        </p>
      </div>
      <div>
        <p>
          O Ensino Fundamental II tem por objetivo a formação básica do cidadão
          mediante:
        </p>
        <p>
          O desenvolvimento da capacidade de aprender, tendo como meios básicos
          o pleno domínio da leitura, da escrita e do cálculo.
        </p>
        <p>
          A compreensão do ambiente natural e social, do sistema político, da
          tecnologia, das artes e dos valores em que se fundamenta a sociedade.
        </p>
        <p>
          O desenvolvimento da capacidade de aprendizagem, tendo em vista a
          aquisição de conhecimentos e habilidades e a formação de atitudes e
          valores.
        </p>
      </div>
    </Card>
  );
}
