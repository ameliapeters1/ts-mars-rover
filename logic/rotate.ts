import {CompassDirection, Position, Rotation} from "../types/types";

const clockwise: Record<CompassDirection, CompassDirection> = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
};
const anticlockwise: Record<CompassDirection, CompassDirection> = {
  N: "W",
  E: "N",
  S: "E",
  W: "S",
};

export function rotate(position:Position, rotation:Rotation):Position{
    const x = position["x"]
    const y = position["y"]
    const facing = position["facing"]

    let direction: Record<CompassDirection, CompassDirection>
    if (rotation === "R") {
        direction = clockwise
    } else {
        direction = anticlockwise
    }
    return {x:x,y:y, facing: direction[facing]}
}