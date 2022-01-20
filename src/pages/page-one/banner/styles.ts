import styled from 'styled-components';
import backgroundPrincipal from '../../../assets/images/background-principal.png';

export const Container = styled.div`
  width: 100%;
  height: 65vh;
  background: url(${backgroundPrincipal}) no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: var(--blue);
  position: relative;

  @media (max-width: 1080px){
    background: var(--blue);
  }
  @media (max-width: 359px){
    height: 100vh;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 50%;
  height: 60%;
  inset: 45% 50%;
  transform: translate(-45%, -50%);
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;

  @media (max-width: 1080px){
    width: 80%;
    height: auto;
    inset: 40% 50%;
    transform: translate(-50%, -40%);
    display: block;
  }
`;
export const PhraseTop = styled.p`
  font-size: 8em;
  font-weight: 700;
  color: var(--white);
  margin: 0px;
  line-height: 0.8;

  @media (max-width: 1080px){
    font-size: 6.7em;
  }

  @media (max-width: 559px){
    font-size: 3.5em;
  }

  @media (max-width: 359px){
    font-size: 3em;
  }
  
`;
export const PhraseMiddle = styled(PhraseTop)`
  font-size: 4.5em;
  padding-left: 3px;

  @media (max-width: 1080px){
    font-size: 3.7em;
  }

  @media (max-width: 559px){
    font-size: 2em;
  }

  @media (max-width: 359px){
    font-size: 1.5em;
  }
`;
export const PhraseBottom = styled(PhraseTop)`
  text-transform: uppercase;
  font-size: 10.5em;
  letter-spacing: 1.5px;

  @media (max-width: 1080px){
    font-size: 8.7em;
  }

  @media (max-width: 559px){
    font-size: 4.7em;
  }

  @media (max-width: 359px){
    font-size: 4.2em;
  }
`;
