const INSTRUCTIONS = ["L", "R", "M"] as const;
type Instruction = (typeof INSTRUCTIONS)[number]; // "L" | "R" | "M"

const COMPASSDIRECTIONS = ["N","S","W","E"] as const;
type CompassDirection = (typeof COMPASSDIRECTIONS)[number];