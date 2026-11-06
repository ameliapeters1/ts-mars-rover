import { describe, test, expect } from "vitest";
import {parseInstructions} from "../parsers/parseInstructions"

describe("parseInstructions", () => {
  test("simple valid input returns a valid Instruction", () => {
    expect(parseInstructions("LRML")).toEqual(["L","R","M","L"]);
  });
  test("invalid instructions are ignored and returns a valid Instruction", () => {
    expect(parseInstructions("LMRHAJREAJEM0_")).toEqual(["L", "M", "R", "R", "M"]);
  });
  test("no instructions passed returns an empty Instruction",()=> {
    expect(parseInstructions("")).toEqual([])
  });
  test("lowercased instructions passed capitalised to return a valid Instruction",()=> {
    expect(parseInstructions("lrml")).toEqual(["L","R","M","L"])
  });
});