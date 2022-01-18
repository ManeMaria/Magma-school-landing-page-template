import styled from 'styled-components';
import { CustomProps } from '../../service/styles/protocls';

export const Container = styled.nav<CustomProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-blue);
  transition: var(--transition-d);

  @media (max-width: 1080px) {
    height: ${(props) => (props.toggle ? '200' : '0')}px;
    position: absolute;
    top: 170px;
    width: 100vw;
    z-index: 3;
    overflow: hidden;
  }

`;
export const Content = styled.ul`
  width: 60%;
  margin-right: 13%;
  display: inherit;
  gap: 0 20px;
  align-items: center;
  font-size: max(1em, 0.5vw);
  font-weight: 600;
  

  li {
    padding: 8px;
    transition: var(--transition-d);
    border-bottom: 2px solid transparent;
    :hover {
      border-bottom: 2px solid var(--white);
    }
  }

  @media (max-width: 1080px) {
    margin-right: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  
    li {
     width: 100%;
    }
  }
  
  @media (max-width: 1080px) {
    margin-right: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  
    li {
     width: 100%;
    }
  }


    
`;
