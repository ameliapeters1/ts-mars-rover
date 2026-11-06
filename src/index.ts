import { parseInstructions } from "../parsers/parseInstructions";
import { parsePlateauSize } from "../parsers/parsePlateauSize";
import { parsePosition } from "../parsers/parsePosition";

const plateau = parsePlateauSize("5 5")
const roverOnePosition = parsePosition("1 2 N")
const roverOneInstructions = parseInstructions("LMLMLMLMM")
const roverTwoPosition = parsePosition("3 3 E")
const roverTwoInstructions = parseInstructions("MMRMMRMRRM")

console.log("plateau: ", plateau)
console.log("rover 1: ", roverOnePosition)
console.log("instructions 1: "+roverOneInstructions)
console.log("rover 2: ", roverTwoPosition)
console.log("instructions 2: "+ roverTwoInstructions)