import styled from 'styled-components';
import { space, layout, color, flexbox, grid } from 'styled-system';

export const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  flexbox,
  grid
);
