import { find, map } from "rxjs/operators";
import { Flights } from "../../class/flights";

export const cleanFligths = find((valfligths) => !!valfligths)
export const BecomeFligths = map((val)=>  val as Flights)
export const BecomeDataFligths =  map((inf:Flights) => inf.data )
