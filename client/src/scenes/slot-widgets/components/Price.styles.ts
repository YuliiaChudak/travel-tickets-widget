import styled from 'styled-components';
import { getColor, getFont, getViewPort } from '../../../shared/theme/helpers';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-bottom: solid 6px ${getColor('primaryYellow')};
  min-width: 45px;
  text-shadow: 0 2px 4px rgb(0 0 0 / 50%);

  h3 {
    display: inline;
  }

  div {
    position: relative;
  }
`;

export const Currency = styled.span`
  color: ${getColor('primaryWhite')};
  text-align: end;
  font-family: ${getFont('khand')};
  font-weight: 500;
  font-size: 21px;
  display: inline-block;
  margin-right: 2px;

  ${getViewPort('xs')} {
    font-size: 18px;
  }
`;

export const Mark = styled.span`
  color: ${getColor('primaryWhite')};
  vertical-align: text-top;
  position: absolute;
  font-size: 21px;
  top: -2px;
  right: -10px;

  ${getViewPort('xs')} {
    font-size: 18px;
  }
`;
