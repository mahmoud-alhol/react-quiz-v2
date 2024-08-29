import React from "react";
import Options from "./Options";
import { useQuiz } from "../QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
