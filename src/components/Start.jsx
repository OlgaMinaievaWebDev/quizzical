import "./Start.css";

export default function Start({ setQuizStart }) {
  function handleStartQuiz() {
    console.log("yes");
    setQuizStart(true);
  }

  return (
    <div className="start-page">
      <h1>Quizzical</h1>
      <p>Welcome! Test your knowledge with this quiz!</p>
      <button className="start-btn" onClick={() => handleStartQuiz()}>
        Start Quiz
      </button>
    </div>
  );
}
