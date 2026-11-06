import { INSPECT_MAX_BYTES } from "node:buffer"
import { Instruction, INSTRUCTIONS } from "../types/types"

function isInstruction(value:string):value is Instruction{
    if (INSTRUCTIONS.includes(value as Instruction)){
        return true
    }
    else{
        return false
    }
}

export function parseInstructions(rawInstructions: string): Instruction[]{
    let instruction:Instruction[] = []
    for (const char of rawInstructions){
        let capitalisedChar = char.toUpperCase()
        if (isInstruction(capitalisedChar)){
            instruction.push(capitalisedChar)
        } 
    }
    return instruction
}