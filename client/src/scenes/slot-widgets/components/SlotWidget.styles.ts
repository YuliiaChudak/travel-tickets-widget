import styled from 'styled-components';
import { getColor, getViewPort } from '../../../shared/theme/helpers';

export const Information = styled.div`
  position: relative;

  :hover {
    img {
      transform: translateX(-50%) scale(1.5);
      transition: transform .3s ease-out;
    }
    cursor: pointer;
`;

export const InformationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  top: 0;
  padding: 20px 15px;
  height: 100%;
`;

export const InformationImg = styled.div`
  min-height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 0 0 75%;
  height: 100%;

  ::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.35) 100%
    );
    transition: background-size 250ms ease-in-out;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    width: auto;
    min-width: 100%;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.3s ease-out;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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

  ${getViewPort('xs')} {
    font-size: 14px;
  }
`;
