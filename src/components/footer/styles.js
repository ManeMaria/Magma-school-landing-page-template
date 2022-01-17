import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 40vh;
  background: var(--dark-blue);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
    justify-content: space-around;
    height: 55vh;
  }
  @media (max-width: 359px) {
    height: 80vh;
  }
`;

export const Wrapper = styled.div`
  padding: 0 50px;
  width: inherit;
  display: inherit;
  flex-wrap: inherit;
  justify-content: inherit;
  align-items: inherit;

  @media (max-width: 780px) {
    padding: 0 10px;
    
  }

  @media (max-width: 359px) {
    padding: 0px;
  }
`;

export const Content = styled(Wrapper)`
  padding: 0;
  width: inherit;
  display: inherit;
  flex-wrap: inherit;
  justify-content: inherit;
  align-items: flex-start;
  gap: 30px 0;
`;

export const Information = styled.div`
  color: var(--white);
  display: grid;
  row-gap: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 0 10px;
    span {
      width: 15px;
      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 780px){
    width: 90%;
  }
`;

export const Map = styled.div`
  height: 60%;
  width: 40%;

  @media (max-width: 780px) {
    width: 90%;
  }
`;

export const SocialNetworks = styled(Content)`
  justify-content: flex-start;
  gap: 0 20px;

  a {
    width: 20px;
    img {
      max-width: 100%;
      transition: var(--transition-d);
      :hover {
        transform: scale(1.3);
      }
    }
  }

  @media (max-width: 780px) {
    justify-content: center;
    align-items: center;
    height: 40px;
  }
`;
