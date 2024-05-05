import { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);

  //fetch data
  useEffect(function () {
    async function fetchQuestions() {
      try {
        const data = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const questionsData = await data.json();
        setQuizData(questionsData.results);
      } catch (error) {
        console.log("Error fetching quiz data", error);
      }
    }
    fetchQuestions();
  }, []);

  return <div>H</div>;
}
