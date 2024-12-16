import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./css/App.css";
import { getQuestions, getAnswers } from "./services/data.js";
import Questions from "./components/Questions.js";

import { parseForm, formComplete } from "./util/form-validation.js";
import { getMaxPoints, calculatePoints } from "./util/points.js";

function Quiz() {

  /*
    the testId is contained in the URL, for eg http://localhost:3000/1
    the param passed is "1". This was defined in the Routes configured 
    on index.js 
  */
  const { testId } = useParams();

  /* state variables needed for display test result */
  const [showResult, setShowResult] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  /*
  Fetch questions and answers data from the Data service
  I used mocked data for demo, would normally query an actual database or external data service;
  */
  const questions = getQuestions(testId);
  const answers = getAnswers(testId);

  const maxPoints = getMaxPoints(questions, answers);

  /* form submission validation and processing */
  const formSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userAnswers = parseForm(form);
    const questionIds = questions.map((item) => item.id);

    /* basic validation for this demo just verifies every question is answered */
    let isValid = formComplete(questionIds, userAnswers);

    if (!isValid) {
      alert("Incomplete Quiz:\nPlease answer all questions");
      return;
    } else {
      setTotalPoints(Number(calculatePoints(userAnswers, answers)));
      setShowResult(true);
    }
  };

  /* 
     - the "showResult" state variable controls which content to display, below. 
     - default content is the quiz form 
   */

  return (
    <div className="App">
      <Header />

      <main>
        <div className="test-wrapper">
          {showResult ? (


            <>
              <h2>
                Final Score:{" "}
                <span className="blue">
                  {Math.round((totalPoints / maxPoints) * 100)}%
                </span>
              </h2>

              <p>
                <a href={"/report/" + testId}>View the user score report for this quiz</a>
              </p>
            </>


          ) : (


            <form onSubmit={formSubmit} id="quizForm">
              <Questions questions={questions} answers={answers} />
              <button type="submit">Show Final Score</button>
            </form>


          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Quiz;
