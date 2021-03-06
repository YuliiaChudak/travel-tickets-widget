import styled from 'styled-components';
import { getColor, getFont, getViewPort } from '../../../shared/theme/helpers';

export const Container = styled.div`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 16px;

  :hover svg {
    transition: linear 0.5s;
    fill: ${getColor('primaryActive')};
  }

  ${getViewPort('xs')} {
    font-size: 14px;
  }
`;

export const Direction = styled.div`
  margin-bottom: 10px;
`;

export const FoundAt = styled.span`
  line-height: 16px;
  white-space: nowrap;
  color: ${getColor('secondaryTextLight')};

  span {
    margin-left: 5px;
  }
`;

export const CityName = styled.span`
  line-height: 16px;
  white-space: nowrap;
  font-weight: 700;
  color: ${getColor('primaryText')};
`;

export const AirportName = styled.span`
  line-height: 16px;
  white-space: nowrap;
  color: ${getColor('secondaryText')};
  margin-left: 5px;
`;

export const Date = styled.span`
  line-height: 16px;
  white-space: nowrap;
  color: ${getColor('secondaryText')};
  font-family: ${getFont('roboto')};
  font-weight: 400;
  margin-left: 5px;
`;

const AirplaneIconWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 16px;
  height: 16px;

  > svg {
    fill: ${getColor('primaryBg')};
    width: 16px;
    height: 16px;
  }
`;

export const AirplaneDeparture = styled(AirplaneIconWrapper)`
  transform: rotate(135deg);
`;

export const AirplaneDestination = styled(AirplaneIconWrapper)`
  transform: rotate(-45deg);
`;
