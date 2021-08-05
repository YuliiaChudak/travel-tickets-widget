import styled from 'styled-components';

import { getColor } from '../../theme/helpers';

export const Box = styled.div`
  background-color: ${getColor('primaryWhite')};
  border-radius: 10px;
  overflow-x: hidden;
  height: 100%;
`;
