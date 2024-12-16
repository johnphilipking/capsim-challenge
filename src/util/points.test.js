import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getAnswers } from "../services/data.js";
import { calculatePoints } from "./points.js";

test("calculates points", () => {
  const userAnswers = {
    1000: ["2003"],
    1001: ["2007"],
    1002: ["2008", "2009", "2011"],
  };
  const answers = getAnswers(1);
  const result = calculatePoints(userAnswers, answers);
  expect(result).toBe(11);
});
