import { Truck } from "./truck";
import { Obstacle } from "./obstacle";

export interface Game {
  truck: Truck
  obstacles : Obstacle[]
}