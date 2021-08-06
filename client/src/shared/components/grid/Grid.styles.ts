import styled from 'styled-components';
import { getViewPort } from '../../theme/helpers';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-auto-rows: 1fr;
  grid-gap: 24px;
  width: auto;
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 24px;

  ${getViewPort('sm')} {
    grid-template-columns: repeat(2, 2fr);
  }

  ${getViewPort('xs')} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
    padding: 0 12px;
  }
`;
