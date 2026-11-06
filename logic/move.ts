import {CompassDirection, Position} from "../types/types";

export function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${JSON.stringify(value)}`);
}

export function moveForward(position:Position):Position{
    const x = position["x"]
    const y = position["y"]
    const facing = position["facing"]

    let movedx = position["x"]
    let movedy = position["y"]

    switch(facing){
        case "N":
            movedx = x;
            movedy = y+1;
            break;
        case "S":
            movedx = x;
            movedy = y-1;
            break;
        case "E":
            movedx = x+1;
            movedy = y;
            break;
        case "W":
            movedx = x-1;
            movedy = y;
            break;
        default: assertNever(facing);
    }

    if (movedx<0){
        movedx=0
    }
    if (movedy<0){
        movedy=0
    }
    return {x:movedx,y:movedy,facing:facing}
}