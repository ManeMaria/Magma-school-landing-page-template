import styled from 'styled-components';
import { CustomProps } from '../../types/styles.protocols';

export const Container = styled.button<CustomProps>`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: inherit;
  top: -50px;
  left: ${(props) => props.left};
  cursor: pointer;
  text-align: center;
  color: var(--white);
  font-weight: 600;
  font-size: 1em;
  transition: var(--transition-d);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  :hover{
    height: 70px;
    top: -70px;
  }

  @media (max-width: 780px){
    width: 110px;
    
  }

`;
