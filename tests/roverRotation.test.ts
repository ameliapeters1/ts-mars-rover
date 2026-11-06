import { describe, test, expect, beforeEach } from "vitest";
import { Rover } from "../logic/roverClass";

describe("rotation from N", () => {
    let rover:Rover
    beforeEach(()=> {
        rover = new Rover("rover1", {x:1, y:2, facing:"N"})
    });

    test("rotating right from North points East", () => {
    rover.rotate("R");
    expect(rover.getPosition()["facing"]).toBe("E");
    });

    test("rotating left from North points West", () => {
    rover.rotate("L");
    expect(rover.getPosition()["facing"]).toBe("W");
    });
});

describe("rotation from E", () => {
    let rover:Rover
    beforeEach(()=> {
        rover = new Rover("rover1", {x:1, y:2, facing:"E"})
    });

    test("rotating right from East points South", () => {
    rover.rotate("R");
    expect(rover.getPosition()["facing"]).toBe("S");
    });

    test("rotating left from East points North", () => {
    rover.rotate("L");
    expect(rover.getPosition()["facing"]).toBe("N");
    });
});

describe("rotation from S", () => {
    let rover:Rover
    beforeEach(()=> {
        rover = new Rover("rover1", {x:1, y:2, facing:"S"})
    });

    test("rotating right from South points W", () => {
    rover.rotate("R");
    expect(rover.getPosition()["facing"]).toBe("W");
    });

    test("rotating left from South points E", () => {
    rover.rotate("L");
    expect(rover.getPosition()["facing"]).toBe("E");
    });
});

describe("rotation from W", () => {
    let rover:Rover
    beforeEach(()=> {
        rover = new Rover("rover1", {x:1, y:2, facing:"W"})
    });

    test("rotating right from W points N", () => {
    rover.rotate("R");
    expect(rover.getPosition()["facing"]).toBe("N");
    });

    test("rotating left from W points S", () => {
    rover.rotate("L");
    expect(rover.getPosition()["facing"]).toBe("S");
    });

    test("four rotations return to same point", () => {
    rover.rotate("L");
    rover.rotate("L");
    rover.rotate("L");
    rover.rotate("L");
    expect(rover.getPosition()["facing"]).toBe("W");
    });
});