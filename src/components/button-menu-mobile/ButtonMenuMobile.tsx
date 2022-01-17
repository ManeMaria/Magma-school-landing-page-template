/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { IContextProps } from '../../providers/protocls';
import { Container } from './styles';
import './styles-css.css';

interface IButtonMenuMobile {
  valueHook: IContextProps
}
export function ButtonMenuMobile({ valueHook }:IButtonMenuMobile) {
  const { setToggle, toggle } = valueHook;
  const burguer = useRef<HTMLButtonElement | null>(null);

  const handleClickActiveClass = (): void => {
    burguer.current?.classList.toggle('is-active');
    setToggle(!toggle);
  };
  return (
    <Container
      type="button"
      ref={burguer}
      className="hamburger hamburger--vortex"
      onClick={handleClickActiveClass}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </Container>
  );
}
