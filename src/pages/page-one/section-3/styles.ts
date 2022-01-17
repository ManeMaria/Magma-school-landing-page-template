import styled from 'styled-components';
import backgroundSection3 from '../../../assets/images/b_s_3.png';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${backgroundSection3}) no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px 0;
  flex-wrap: wrap;

  h2{
    text-align: center;
    color: var(--white);  
    font-size: max(2em , 3vw);
  }

  .center {
    img {
      width: 110px;
      height: 110px;
      clip-path: circle(40%);
      object-fit: cover;
    }
  }


  @media (max-width: 780px){
    height: 80vh;
    background: var(--blue);
    justify-content: flex-start;

    h2 {
      margin-top: 10%;
    }

    .center {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
  
  @media (max-width: 359px){
    height: 100vh;
  }
`;

export const WrapperCarousel = styled.div`
  width: 50%;
  @media (max-width: 780px){
    width: 95%;
  }
`;
