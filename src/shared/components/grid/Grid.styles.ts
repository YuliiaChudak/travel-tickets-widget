import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-auto-rows: 1fr;
  grid-gap: 24px;
  width: auto;
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 24px;

  @media only screen and (min-width: 768px) and (max-width: 999px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
    padding: 0 12px;
  }
`;
