//If notecard is clicked, next card will show back instead of front
//button should be disabled once deck is finished, or should have a 'reset' message, or a 'reset' button render


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
    const [deckLength] = useState(cardQuestions.length);
    
    const [cardList, setCardList] = useState(cardQuestions);
    const [current, setCurrent] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });

    const calcRandom = () => {
        let randomIndex = Math.floor(Math.random() * cardList.length);
        let currentCard = cardList[randomIndex];
        setCurrent(currentCard);
    }
    
 
    const removeShownCard = () => {        
        let removeElementIndex = cardList.findIndex(card => card === current);
        setCardList(cardList.filter(card => card !== cardList[removeElementIndex]));
        //update key or state in threeByFive component
        // cardList.splice(seenCard, 1);
        // setCardList(cardList); 
    }

    const finalMessage = (cardList.length === 0) && <p className="p-final-message">{`Great Job! You got through ${deckLength} cards!`}</p>;

    const cardToggle = (cardList.length !== 0) && <ThreeByFive question={current.question} title={current.title} answer={current.answer}/>;

    function handleOnClick() {
        calcRandom();
        removeShownCard();
    }

    return(
        <section className="flash-container">
            <div className="button-and-counter-container">
                <button className="random-button" onClick={handleOnClick}>Get A Card</button>
                <div className="counter">{cardList.length}</div>
            </div>
            {cardToggle}
            {finalMessage}
        </section>
    );
}