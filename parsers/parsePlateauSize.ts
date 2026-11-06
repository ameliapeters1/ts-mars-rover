import { PlateauSize } from "../types/types"

export function parsePlateauSize(rawPlateauSize: string): PlateauSize{
    const dimensions = rawPlateauSize.trim().split(/\s+/)
    if (dimensions.length !== 2){
        throw new Error ("Plateau size must have two values")
    }
    const x: number = Number(dimensions[0])
    const y: number= Number(dimensions[1])
    
    if (isNaN(x)|| isNaN(y)){
        throw new Error ("Dimensions must be numbers")
    }
    if (!Number.isInteger(x)||!Number.isInteger(y)){
        throw new Error("Dimensions must be whole numbers")
    }
    return {x:x, y:y}
}