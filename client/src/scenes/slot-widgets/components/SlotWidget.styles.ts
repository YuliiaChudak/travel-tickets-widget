import styled from 'styled-components';
import { getColor } from '../../../shared/theme/helpers';

export const Information = styled.div<{ bg: string }>`
  min-height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.35) 100%
    ),
    url('${({ bg }) => bg}');
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #333333;
  transition: background-size 250ms ease-in-out;
  padding: 15px;

  :hover {
    background-size: 120%;
    cursor: pointer;
  }

  :focus {
    background-size: 120%;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: flex-end;

  > h4,
  h3 {
    width: 100%;
    text-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  }
`;

export const Details = styled.div`
  background-color: ${getColor('primaryWhite')};
  padding: 14px;
  display: flex;
  justify-content: space-between;
`;

export const DetailsError = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 3px solid ${getColor('primaryError')};
  padding: 4px;
  line-height: 16px;
  color: ${getColor('secondaryText')};

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;
