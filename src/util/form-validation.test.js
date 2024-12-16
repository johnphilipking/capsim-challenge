import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { formComplete } from "./form-validation.js";

test("formComplete function returns true", () => {
  const ids = [1000, 1001, 1002];
  const userAnswers = {
    1000: ["2003"],
    1001: ["2007"],
    1002: ["2008", "2009", "2011"]
  };
  const result = formComplete(ids,userAnswers);
  expect(result).toBe(true);
});
