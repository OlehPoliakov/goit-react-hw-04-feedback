import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li``;

export const Btn = styled.button`
  width: 75px;
  height: 25px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.prymery};
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;
