import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getQuestions, getAnswers } from "./data.js";

test("returns 3 questions for testId 1", () => {

    const questions = getQuestions(1);
    expect(questions.length).toBe(3);
  });

test("returns 12 answers for testId 1", () => {

  const answers = getAnswers(1);
  expect(answers.length).toBe(12);
});
