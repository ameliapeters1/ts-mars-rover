export const INSTRUCTIONS = ["L", "R", "M"] as const;
export type Instruction = (typeof INSTRUCTIONS)[number]; // "L" | "R" | "M"

const COMPASSDIRECTIONS = ["N","S","W","E"] as const;
export type CompassDirection = (typeof COMPASSDIRECTIONS)[number];

export interface Position {
  readonly x: number;
  readonly y: number;
  readonly facing: CompassDirection;
}

export interface PlateauSize {
    readonly x: number;
    readonly y:number;
}