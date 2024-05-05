import { useEffect } from "react";

export default function Quiz() {
  //fetch data
  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const data = await res.json();
        console.log(data.results);
      } catch (error) {
        console.log("Error fetching quiz data", error);
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div>
      <h1>Quizzical questions</h1>
    </div>
  );
}
