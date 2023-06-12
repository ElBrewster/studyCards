import ThreeByFive from "./components/threeByFive";
import cardQuestions from "./data/cardQuestions";

export default function App() {
  const questions = cardQuestions.map((element, index) => {
    return <ThreeByFive key={index} question={element.question} title={element.title} answer={element.answer}/>;
  })

  return (
    <div>
      <header>
          <h1>Three By Five Cards</h1>
      </header>
      <main>
        {questions}
      </main>
      <footer>.</footer>
    </div>
  )
}
