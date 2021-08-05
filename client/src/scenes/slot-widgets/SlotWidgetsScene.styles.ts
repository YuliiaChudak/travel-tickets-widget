import styled from 'styled-components';
import { getColor } from '../../shared/theme/helpers';

export const Container = styled.div`
  background: ${getColor('primaryBg')};
  padding: 20px 0;
  height: 100vh;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${getColor('primaryActive')};
`;
