import React from "react";
import { useQuiz } from "../QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz()
  return (
    <div className="start">
      <h2> Welcome to the React quiz!</h2>
      <h3> {numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
