import React from 'react';
import { Fare } from '../../../shared/types/Fare';
import { AirplaneIcon } from '../../../shared/components/icons';
import { Placeholder } from '../../../shared/components/placeholder/Placeholder.styles';
import { convertDateToViewFormat } from '../../../shared/services/date';
import {
  Container,
  Date,
  AirportName,
  CityName,
  Direction,
  FoundAt,
  AirplainDeparture,
  AirplainDestination,
} from './TravelRoutes.styles';

type Props = {
  fare: Fare | null;
  isFetching: boolean;
};

const TravelRoutes = ({ fare, isFetching }: Props) => {
  if (isFetching) {
    return (
      <Container data-testid="routes-loader">
        <Placeholder width="80px" height="18px" mb="10px" />
        <Placeholder width="110px" height="10px" mb="10px" />
        <Placeholder width="90px" height="10px" />
      </Container>
    );
  }

  if (!fare) {
    return null;
  }

  const departureDate = convertDateToViewFormat(fare.departureDate);
  const returnDate = convertDateToViewFormat(fare.returnDate);
  const isDepartureAirport = Boolean(fare.departure.airportName);
  const isDestinationAirport = Boolean(fare.destination.airportName);

  return (
    <Container>
      <Direction>
        <AirplainDeparture rotate="rotate(135deg)">
          <AirplaneIcon />
        </AirplainDeparture>
        <CityName>
          {fare.departure.cityName}
          {isDepartureAirport && <>,</>}
        </CityName>
        {fare.departure.airportName && (
          <AirportName>{fare.departure.airportName}</AirportName>
        )}
        <Date data-testid="departure-date">
          &bull; {departureDate.dayNumber} {departureDate.monthName}.
        </Date>
      </Direction>
      <Direction>
        <AirplainDestination rotate="rotate(-45deg)">
          <AirplaneIcon />
        </AirplainDestination>
        <CityName>
          {fare.destination.cityName}
          {isDestinationAirport && <>,</>}
        </CityName>
        <AirportName>{fare.destination.airportName}</AirportName>
        <Date data-testid="return-date">
          &bull; {returnDate.monthName} {returnDate.dayNumber}.
        </Date>
      </Direction>
      <FoundAt>
        {fare.time}
        <span>&bull; {fare.airlineName}</span>
      </FoundAt>
    </Container>
  );
};

export default TravelRoutes;
