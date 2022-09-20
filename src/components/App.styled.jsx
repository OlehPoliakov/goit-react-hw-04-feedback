import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.spacing(8)};
  padding-right: ${props => props.theme.spacing(8)};
  @media screen and (min-width: 320px) {
    width: 320px !important;
  }
  @media screen and (min-width: 768px) {
    width: 768px !important;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px !important;
  }
`;
