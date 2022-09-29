import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Item = styled.li`
  margin-top: 12px;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Btn = styled.button`
  padding: 5px 10px;
  border: 2px solid #d8d3d3;
  border-radius: 5px;

  background-color: #fff;

  font-weight: 500;
  text-transform: capitalize;

  transition: all 250ms linear;

  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.secondary};
    transition: all 250ms linear;
  }
`;
