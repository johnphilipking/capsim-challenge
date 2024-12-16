import React from "react";

const Answers = ({ multipleChoice, answers }) => {
    
  const inputType = Boolean(multipleChoice) ? "checkbox" : "radio";

  const points = (id) => {
    let answer = answers.find((answer) => answer.id === id);
    return answer.id;
  };

  const elements = answers.map((answer, index) => {
    return (
      <li key={"answer_" + index}>
        <label>
          <input
            type={inputType}
            id={answer.id}
            name={answer.questionId}
            value={answer.id}
            required={inputType === "radio" ? true : false}
          />
          {answer.label}
        </label>
      </li>
    );
  });

  return <ol className="answers">{elements}</ol>;
};

export default Answers;
