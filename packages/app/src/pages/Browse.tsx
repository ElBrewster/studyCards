import ThreeByFive from "../components/ThreeByFive";
import cardQuestions from "../data/cardQuestions";

export default function Browse(){
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
    return(
        <section className="browse-container">
            {/* {questions} */}
            {myQuestions}
        </section>

    );
}