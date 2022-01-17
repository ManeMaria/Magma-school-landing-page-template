import React from 'react';
import * as s from './styles';
import { TabText } from '../tab-text/TabText';
import { CardProps } from './protocols';
import { Button } from '../button/Button';

export function Card({
  zIndex, click, tabText, srcIgmTitle, presentationSrcImg, backGroundColor, left, children,
}: CardProps) {
  return (
    <s.Container backGroundColor={backGroundColor} zIndex={zIndex}>
      <TabText click={click} left={left}>
        {tabText}
      </TabText>
      <s.SubContainer zIndex={zIndex} className="animate__animated animate__fadeInLeft">
        <s.ContainerTitleImg>
          <s.Img src={srcIgmTitle} />
        </s.ContainerTitleImg>
        <s.Content>
          <s.WrapperImgCard>
            <s.Img src={presentationSrcImg} />
          </s.WrapperImgCard>
          {children}
        </s.Content>
        <s.ContainerButton>
          <Button type="button">
            Matricule-se
          </Button>
        </s.ContainerButton>
      </s.SubContainer>
    </s.Container>
  );
}
