import { CompassDirection, Position, Rotation } from "../types/types";
import { rotate } from "./rotate"
import {moveForward} from "./move"

export function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${JSON.stringify(value)}`);
}

export class Rover {
    constructor(
        readonly name: string,
        private position:Position
    ){}

    getPosition(): Position{
        return this.position
    }

    rotate(rotation:Rotation): void{
        this.position = rotate(this.position, rotation)
    }

    moveForward():void{
        this.position = moveForward(this.position)
    }
}
