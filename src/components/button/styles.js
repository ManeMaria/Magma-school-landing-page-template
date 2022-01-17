import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: var(--red);
  color: var(--white);
  border-radius: 9px;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 0.9em;
  cursor: pointer;
  transition: var(--transition-d);

  :hover {
    background: #ff4040;
    transform: translateY(-2px);
    box-shadow: 0px 3px var(--dark-gray);
  }
`;
