import styled from 'styled-components';
import { ContainerButton } from '../../../components/card/styles';

export const ContainerS2 = styled.div`
  width: 70%;
  height: 60vh;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2{
    font-size: max(2em , 3vw);
    text-transform: uppercase;
    text-align: center;
    color: var(--blue);  
    font-weight: 700;
  }


  @media (max-width: 780px){
    width: 100vw; 
  }

`;

export const ContainerButtonS2 = styled(ContainerButton)`
  width: 100%;
  justify-content: center;
  margin-top: 5%;

  button {
    width: 20%;
    height: 45px;
  }

  @media (max-width: 780px){
    width: 100%;
    button {
      width: 50%;
    }
  }

`;
