import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: max(0.9em, 1vw);
    color: var(--blue);
  }

  img {
    max-width: 80px;
  }

  @media (max-width: 1080px) {
    position: relative;

    h2 {
      color: var(--dark-blue);
    }
  }
`;

export const ContainerButtons = styled.div`
  display: inherit;
  height: 45px;
  gap: 0 10px;

  @media (max-width: 1080px) {
    width: 100vw;
    height: 100px;
    background: var(--dark-blue);
    position: absolute;
    bottom: -100px;
    z-index: 2;
    align-items: center;
    justify-content: center;

    button {
      height: 50%;
    }
  }
`;
export const ContentButtons = styled(ContainerButtons)`
  @media (max-width: 1080px) {
    width: 95vw;
    z-index: 1;
    bottom: 0px;
  }
`;
