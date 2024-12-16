import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Answers from "./Answers";

test("renders answer options for testId 1", () => {
  const multipleChoice = false;
  const answers = [
    {
      id: 2000,
      questionId: 1000,
      label: "Read a book",
      points: 5,
      sortOrder: 1,
    },
    {
      id: 2001,
      questionId: 1000,
      label: "Watch social media",
      points: 0,
      sortOrder: 2,
    },
    {
      id: 2002,
      questionId: 1000,
      label: "Go to the gym",
      points: 3,
      sortOrder: 3,
    },
    {
      id: 2003,
      questionId: 1000,
      label: "Run in the park",
      points: 7,
      sortOrder: 4,
    },
  ];

  render(<Answers multipleChoice={multipleChoice} answers={answers} />);

  const element = screen.getByText("Run in the park");

  expect(element).toBeInTheDocument();
});
