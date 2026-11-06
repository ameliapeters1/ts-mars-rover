import { Position, CompassDirection, COMPASSDIRECTIONS } from "../types/types"

function isCompassDirection (value:string):value is CompassDirection{
    if (COMPASSDIRECTIONS.includes(value as CompassDirection)){
        return true
    }
    return false
}

export function parsePosition(rawPosition: string): Position{
    const position = rawPosition.trim().split(/\s+/)
    if (position.length !==3){
        throw new Error("Position must have 3 entries")
    }
    const x = Number(position[0])
    const y = Number(position[1])
    const facing = position[2]

    if (isNaN(x)|| isNaN(y)){
        throw new Error ("Positions must be numbers")
    }
    if (!isCompassDirection(facing)){
        throw new Error ("Facing must be a compass direction (N,S,E,W)")
    }

    return {x:x, y:y, facing:facing}
}