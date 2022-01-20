import React from 'react';
import { Button } from '../../../components/button/Button';
import { Sections } from '../../../components/section/Section';
import { ContainerS2, ContainerButtonS2 } from './styles';

export function Sections2() {
  return (
    <Sections>
      <ContainerS2>
        <div>
          <h2>“A educação não é a preparação para a vida, é a própria vida.”</h2>
          <ContainerButtonS2>
            <Button>
              Matricule-se
            </Button>
          </ContainerButtonS2>
        </div>
      </ContainerS2>
    </Sections>
  );
}
