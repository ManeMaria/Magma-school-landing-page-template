/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { A } from '../anchor/A';
import { ICONSINFO, ICONSNS } from './icons';
import { TextsAndIcons } from './protocols';
import * as s from './styles';

export function Footer() {
  const textsAndIcons = [
    'FALE CONOSCO (81) 3481-4054',
    'contato@colegioecursomagma.com.br Rua',
    'Duque de Caxias, 136 - Centro, Jaboatão dos Guararapes - PE',
  ].map(
    (ele, i): TextsAndIcons => ({
      text: ele,
      icon: ICONSINFO[i],
    }),
  );
  return (
    <s.Container>
      <s.Wrapper>
        <s.Content>
          <s.Information>
            {textsAndIcons.map(({ text, icon }) => (
              <div>
                <span>
                  <img src={icon.icon} alt={icon.alt} />
                </span>
                {text}
                <span />
              </div>
            ))}
          </s.Information>
          <s.Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.731325105566!2d-35.019346238426266!3d-8.110950079579878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1d3d98450b01%3A0x4d65a25a92746d04!2sRua%20Duque%20de%20Caxias%2C%20136%20-%20Vista%20Alegre%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054080-350!5e0!3m2!1spt-BR!2sbr!4v1642300589459!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </s.Map>
        </s.Content>
        <s.SocialNetworks>
          {ICONSNS.map((icon) => (
            <A href="https://www.linkedin.com/in/cesar-damasceno">
              <img src={icon.icon} alt={icon.alt} />
            </A>
          ))}
        </s.SocialNetworks>
      </s.Wrapper>
    </s.Container>
  );
}
