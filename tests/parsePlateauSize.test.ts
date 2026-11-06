import { describe, test, expect } from "vitest";
import {parsePlateauSize} from "../parsers/parsePlateauSize"

describe("parseInstructions", () => {
  test("simple valid input returns a valid Plateau Size", () => {
    expect(parsePlateauSize("5 5")).toEqual({x:5,y:5});
  });
  test("too many numbers passed throws error", () =>{
    expect(()=> parsePlateauSize("5 5 5")).toThrow();
  });
  test("too few numbers passed throws error", () =>{
    expect(()=> parsePlateauSize("5 5 5")).toThrow();
  });
  test("non-numbers passed throws error", () =>{
    expect(()=> parsePlateauSize("hello 5")).toThrow();
  });
  test("extra spaces on valid input returns a valid Plateau Size", () => {
    expect(parsePlateauSize(" 5  5 ")).toEqual({x:5,y:5});
  });
  test("decimal input throws an error", () => {
    expect(()=> parsePlateauSize("5.9 5.5")).toThrow();
  });
});