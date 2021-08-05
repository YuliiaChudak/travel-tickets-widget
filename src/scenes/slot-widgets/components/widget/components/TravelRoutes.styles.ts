import styled from 'styled-components';
import { getColor } from '../../../../../shared/theme/helpers';

type AirplaineIconWrapperProps = {
    rotate: string;
};

export const Container = styled.div`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 16px;

  :hover svg {
    transition: linear .5s;
    fill: ${getColor('primaryActive')};
  }
    
  @media only screen and (min-width: 320px) and (max-width: 767px) {
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
  font-family: Roboto, sans-serif;
  font-weight: 400;
  margin-left: 5px;
`;

const AirplaineIconWrapper = styled.div<AirplaineIconWrapperProps>`
  position: absolute;
  left: 0;
  width: 16px;
  height: 16px;
  transform: ${({ rotate }) => rotate};
  
  > svg {
    fill: ${getColor('primaryBg')};
    width: 16px;
    height: 16px;
  }
`;

export const AirplainDeparture = styled(AirplaineIconWrapper)``;
export const AirplainDestination = styled(AirplaineIconWrapper)``;
