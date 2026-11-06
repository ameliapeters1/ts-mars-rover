import { describe, test, expect } from "vitest";
import {parsePosition} from "../parsers/parsePosition"

describe("parseInstructions", () => {
  test("simple valid input returns a valid Position", () => {
    expect(parsePosition("4 6 N")).toEqual({x:4,y:6,facing:"N"});
  });
  test("too long input throws error", () => {
    expect(()=> parsePosition("4 6 N 3")).toThrow();
  });
  test("too short input throws error", () => {
    expect(()=> parsePosition("4 6")).toThrow();
  });
  test("non number x input throws error", () => {
    expect(()=> parsePosition("Hello 6 N")).toThrow();
  });
  test("non number y input throws error", () => {
    expect(()=> parsePosition("6 hello N")).toThrow();
  });
  test("non direction facing input throws error", () => {
    expect(()=> parsePosition("6 5 X")).toThrow();
  });
  test("empty input throws error", () => {
    expect(()=> parsePosition("")).toThrow();
  });
}); 