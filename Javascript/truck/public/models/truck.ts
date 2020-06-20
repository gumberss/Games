import { ObjPosition } from "./position";

export interface Truck {
  cabin: Cabin
  bodyWork : BodyWork
  wheels: Wheel[]
}

export interface BodyWork {
	position: ObjPosition
}

export interface Cabin {
  position: ObjPosition
}

export interface Wheel {
  position: ObjPosition
}
