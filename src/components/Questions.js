import React from "react";
import Answers from "./Answers";


const Questions = ({ questions, answers }) => {
  // create form elements for each question
  const questionElements = questions.map((question, index) => {
    return (
      <li key={"question_" + index}>
        <section className="fieldset" aria-labelledby={"questionLabel" + index}>
          <label id={"questionLabel" + index} className="question-label">
            {question.label}
          </label>
          <Answers
            multipleChoice={question.multipleChoice}
            answers={answers.filter(
              (answer) => answer.questionId == question.id
            )}
          />
        </section>
      </li>
    );
  });

  return <ol className="questions" id="questionsList">{questionElements}</ol>;
};

export default Questions;
