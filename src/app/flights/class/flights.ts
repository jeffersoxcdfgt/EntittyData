export interface DataFlights {
    id: string;
    gmt: string;
    airport_id: string;
    iata_code: string;
    city_iata_code: string;
    icao_code: string;
    country_iso2: string;
    geoname_id: string;
    latitude: string;
    longitude: string;
    airport_name: string;
    country_name: string;
    phone_number: string;
    timezone: string;
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