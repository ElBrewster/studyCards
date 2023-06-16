import { useEffect } from "react";
import ThreeByFive from "./components/ThreeByFive";
import cardQuestions from "./data/cardQuestions";

export default function App() {
  const myQuestions = cardQuestions.map((element, index) => {
    return <ThreeByFive key={index} question={element.question} title={element.title} answer={element.answer}/>;
  });

  // Saving this function for UI testing and imports of data files in place of fetch:
  // const questions = cardQuestions.map((element, index) => {
  //   return <ThreeByFive key={index} question={element.question} title={element.title} answer={element.answer}/>;
  // });

  fetch("http://localhost:8000/")
    .then(res => res.json())
    .then(data => data = myQuestions)

    console.log({myQuestions})
  return (
    <div>
      <header>
          <h1>Three By Five Cards</h1>
      </header>
      <main>
        {/* {questions} */}
        {myQuestions}
      </main>
      <footer>.</footer>
    </div>
  )
}
