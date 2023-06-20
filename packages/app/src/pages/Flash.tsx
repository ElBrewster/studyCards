import cardQuestions from "../data/cardQuestions";
import ThreeByFive from "../components/ThreeByFive";
import { useState } from "react";

export default function Flash(){
    const [current, setCurrent] = useState({})
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
    return(
        <section className="flash-container">
            <ThreeByFive />
        </section>
    );
}