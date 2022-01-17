import styled from 'styled-components';

export const Container = styled.button`
  display: none;

  @media (max-width: 1080px) {
    display: block;
  
    span {
      span {
        background: var(--white);
        height: 5px;
        ::before,
        ::after {
          background: var(--white);
          height: 5px;
        }
      }
    }
   
   
  }
`;
