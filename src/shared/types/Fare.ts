export type FareDeparture = {
    airportName: string;
    cityName: string;
}

export type FareDestination = {
    airportName: string;
    cityName: string;
}

export type Fare = {
    airlineName: string;
    departureDate: string;
    returnDate: string;
    price: number;
    time: string;
    departure: FareDeparture;
    destination: FareDestination;
}