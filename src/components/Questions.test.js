import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Questions from "./Questions";
import { getQuestions, getAnswers } from "../services/data.js";

test("renders first question for testId 1", () => {
    const questions = getQuestions(1);
    const answers = getAnswers(1);

  render(<Questions questions={questions} answers={answers} />);

  const element = screen.getByText("What's the first thing you should do when you need motivation?");

  expect(element).toBeInTheDocument();
});
