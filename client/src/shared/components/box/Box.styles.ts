import styled from 'styled-components';

import { getColor } from '../../theme/helpers';

export const Box = styled.div`
  background-color: ${getColor('primaryWhite')};
  border-radius: 10px;
  box-shadow: 2px 5px 2px rgb(0 0 0 / 6%), 0 2px 0 rgb(0 0 0 / 6%);
  overflow-x: hidden;
  height: 100%;
`;
