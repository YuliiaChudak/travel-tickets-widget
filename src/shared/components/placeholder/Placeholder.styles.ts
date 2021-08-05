import styled from 'styled-components';
import { getColor } from '../../theme/helpers';

type PlaceholderProps = {
  width: string;
  height: string;
  br?: string;
  mb?: string;
};

export const Placeholder = styled.div<PlaceholderProps>`
  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, ${getColor('primaryGrey')} 8%, ${getColor('secondaryGrey')} 18%, ${getColor('primaryGrey')} 33%);
  background-size: 800px 104px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ br }) => br || 'none'};
  margin-bottom: ${({ mb }) => mb};
  position: relative;
`;
