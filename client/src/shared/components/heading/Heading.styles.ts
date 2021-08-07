import styled from 'styled-components';
import { getColor, getFont, getViewPort } from '../../theme/helpers';

export const H3 = styled.h3`
  font-family: ${getFont('khand')};
  font-weight: 700;
  font-size: 37px;
  line-height: 40px;
  color: ${getColor('primaryWhite')};
  margin: 5px 0;

  ${getViewPort('xs')} {
    font-size: 28px;
  }
`;

export const H4 = styled.h4`
  font-family: ${getFont('khand')};
  font-weight: 500;
  font-size: 21px;
  margin: 0;
  color: ${getColor('primaryWhite')};

  ${getViewPort('xs')} {
    font-size: 18px;
  }
`;
