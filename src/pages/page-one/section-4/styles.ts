import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 25px 0;

  @media (max-width: 780px){
    height: 100vh;
    flex-direction: column-reverse;
    overflow: hidden;
    gap: 10px 0;  
  }

  @media (max-width: 359px){
    overflow: hidden;
    padding: 10px;
    gap: 10px 0;  
    position: relative
  }

`;

export const Span1 = styled.span`
  flex-basis: 30%;

  img{
    clip-path: circle(49%);
    max-width: 100%;
    object-fit: cover;
  }

  @media (max-width: 780px){
    display: flex;
    align-items: start;
    justify-content: center;
    img{
      max-width: 75%;
    }
  }

  @media (max-width: 359px){
   
    position: absolute;
    top: 25%;
    img{
      max-width: 100%;
      filter: opacity(10%);

    }
  }
`;

export const Span2 = styled.span`
  flex-basis: 60%;
  
  h2{
    text-align: left;
    text-transform: uppercase;
    font-size: max(1.5em, 3vw);
  }

  h3{
    font-size: max(1em, 1.5vw);
    font-weight: 500;
  }

  @media (max-width: 780px){
    flex-basis: 10%
  }

`;
