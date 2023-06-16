// import { useEffect } from "react";
import { Routes, Route } from "react-router";
import ThreeByFive from "./components/ThreeByFive";
import cardQuestions from "./data/cardQuestions";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Add from "./pages/Add";
import Flash from "./pages/Flash";
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/flash" element={<Flash />}></Route>

        </Route>
      </Routes>
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
