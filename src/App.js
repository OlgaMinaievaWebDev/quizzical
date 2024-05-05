import { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Ouiz";

function App() {
  const [quizStart, setQuizStart] = useState(false);

  return (
    <main>{quizStart ? <Quiz /> : <Start setQuizStart={setQuizStart} />}</main>
  );
}

export default App;
