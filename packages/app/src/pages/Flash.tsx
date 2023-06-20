import cardQuestions from "../data/cardQuestions";
import ThreeByFive from "../components/ThreeByFive";
import { useState } from "react";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function Flash(){
    const [current, setCurrent] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });

    
    const calcRandom = (cardQuestions) => {
        let listNum = cardQuestions.length;
        console.log({listNum})
        let cardNum = Math.floor(Math.random() * listNum);
        let currentCard = cardQuestions.at(cardNum);
        setCurrent(current);
        console.log({currentCard})
    }
    
    const showRandom = (cardQuestions) => {
    }

    function handleOnClick() {
        calcRandom();
        
    }
    return(
        <section className="flash-container">
            <button onClick={handleOnClick}>Next!</button>
            <ThreeByFive question={current.question} title={current.title} answer={current.answer}/>
        </section>
    );
}