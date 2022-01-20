import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70vh;

  @media (max-width: 780px) {
    height: 120vh;
    background: violet;
  }

  @media (max-width: 375px) {
    height: 150vh;
  }
  
  @media (max-width: 359px) {
    height: 200vh;
  }
`;
