import { find, map } from "rxjs/operators";
import { Airport, DataAirport } from "src/app/airports/class/airport";
import { DataFlights, Flights } from "../../class/flights";

export const cleanFligths = find((valfligths) => !!valfligths)
export const BecomeFligths = map((val)=>  val as Flights)
export const BecomeDataFligths =  map((inf:Flights) => inf.data )

export const cleanAiports = find((valairports) => !!valairports)
export const BecomeAirports = map((val)=>  val as Airport)
export const BecomeDataAirport =  map((inf:Airport) => inf.data )

export const filterForAirport =( airport: DataAirport) =>{
  return  map((tran: Flights)=> tran.data.filter(( flg ) => flg.departure.airport === airport.airport_name))
}

export const filterForIATA =( iatacode: string) =>{
  return map((inffligths: Flights)=> inffligths.data.filter((fli) => fli.departure.iata.toLocaleLowerCase() === iatacode.toLocaleLowerCase()))
}

export const fligthsAirports = (airports: DataAirport[], datafligths: DataFlights[]) => {
    return airports.map((airport: DataAirport) => {
      return datafligths
        .filter((fligth: DataFlights) => fligth.departure.airport.toString() === airport.airport_name.toString() )
        .map(( datafligths :DataFlights)=> ({...datafligths }))
    }).reduce((a, b) => {
        return a.concat(b);
    }, []);
  }
