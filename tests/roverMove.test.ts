import { describe, test, expect } from "vitest";
import {Rover} from "../logic/roverClass"

describe("movement", () => {
    test("moving forward from North increases y", () => {
        const rover = new Rover("rover1", {x:1, y:2, facing:"N"});
        rover.moveForward();
        expect(rover.getPosition()["y"]).toBe(3);
    });
    test("moving forward from South decreases y", () => {
        const rover = new Rover("rover1", {x:1, y:2, facing:"S"});
        rover.moveForward();
        expect(rover.getPosition()["y"]).toBe(1);
    });
    test("moving forward from E increases x", () => {
        const rover = new Rover("rover1", {x:1, y:2, facing:"E"});
        rover.moveForward();
        expect(rover.getPosition()["x"]).toBe(2);
    });
    test("moving forward from W decreases x", () => {
        const rover = new Rover("rover1", {x:1, y:2, facing:"W"});
        rover.moveForward();
        expect(rover.getPosition()["x"]).toBe(0);
    });
    test("moving forward twice from South decreases y", () => {
        const rover = new Rover("rover1", {x:1, y:2, facing:"S"});
        rover.moveForward();
        rover.moveForward()
        expect(rover.getPosition()["y"]).toBe(0);
    });
    test("moving into a negative remains at edge of plateau", () => {
        const rover = new Rover("rover1", {x:1, y:0, facing:"S"});
        rover.moveForward();
        expect(rover.getPosition()["y"]).toBe(0);
    });
});
