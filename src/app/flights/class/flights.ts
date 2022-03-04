export interface DataFlights {
    flight_date: string;
    flight_status: string;
    departure: {
      airport: string;
      timezone: string;
      iata: string;
      icao: string;
      terminal: string;
      gate: string;
      delay: string;
      scheduled: string;
      estimated: string;
      actual: string;
      estimated_runway: string;
      actual_runway: string;
    },
    arrival: {
      airport: string;
      timezone: string;
      iata: string;
      icao: string;
      terminal:string;
      gate: string;
      baggage: string;
      delay:string;
      scheduled: string;
      estimated: string;
      actual: string;
      estimated_runway: string;
      actual_runway: string;
    },
    airline: {
      name: string;
      iata: string;
      icao: string;
    },
    flight: {
      number: string;
      iata: string;
      icao: string;
      codeshared: string;
    },
    aircraft: string;
    live: string;
  }



export interface Flights {
    pagination: {
      offset: number;
      limit: number;
      count: number;
      total: number;
    }
    data:DataFlights[]
  }