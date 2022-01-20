import styled from 'styled-components';
import { CustomProps } from '../../types/styles.protocols';

export const Container = styled.div<CustomProps>`
  width: 100%;
  background: ${(props) => props.backGroundColor};
  z-index: ${(props) => props.zIndex};
  position: absolute;
  transition: var(--transition-d);
  position: absolute;
`;

export const SubContainer = styled.div<CustomProps>`
  display:  ${(props) => (props.zIndex === 4 ? 'block' : 'none')};
  padding: 20px;
`;

export const Content = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  gap: 0 20px;
  color: var(--white);

  div {
    flex: 1;
  }

  @media (max-width: 780px){
    height: auto;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

export const ContainerText = styled.div`

  text-align: justify;
  flex: 1;
  font-size: 0.9em;
  color: var(--white);
  font-weight: 500;
`;

export const ContainerTitleImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
  button {
    width: 15%;
    height: 45px;

    @media (max-width: 780px){
      width: 50%;
    }
  }
  
  @media (max-width: 780px){
    justify-content: flex-start;
  }
  
`;

export const WrapperImgCard = styled.div``;
