import React from 'react';
import { Fare } from '../../../shared/types/Fare';
import { Placeholder } from '../../../shared/components/placeholder/Placeholder.styles';
import {
  H3,
  H4,
} from '../../../shared/components/heading/Heading.styles';
import { Currency, Mark, Container } from './Price.styles';

type Props = {
  fare: Fare | null;
  isFetching: boolean;
};

const Price = ({ fare, isFetching }: Props) => {
  if (isFetching) {
    return (
      <Container>
        <Placeholder width="60px" height="40px" />
      </Container>
    );
  }

  if (!fare) {
    return null;
  }

  return (
    <Container>
      <H4>from</H4>
      <div>
        <Currency>&#8364;</Currency>
        <H3>{fare.price}</H3>
        <Mark>*</Mark>
      </div>
    </Container>
  );
};

export default Price;
