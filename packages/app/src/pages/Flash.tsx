//If notecard is clicked, next card will show back instead of front
//button should be disabled once deck is finished, or should have a 'reset' message, or a 'reset' button render


import cardQuestions from "../data/cardQuestions";
import ThreeByFive from "../components/ThreeByFive";
import { useState } from "react";
import { nanoid } from "nanoid";


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
    const [prevCard, setPrevCard] = useState(current);
    let key = nanoid();
    let match = true;

    const calcRandom = () => {
        let randomIndex = Math.floor(Math.random() * cardList.length);
        let currentCard = cardList[randomIndex];
        if(currentCard === prevCard) {
            return undefined;
            //if it finds the card already in (prev)state, return undefined
        } else {
            return currentCard;
        }
    }

    const removeShownCard = () => {        
        let removeElementIndex = cardList.findIndex(card => card === current);
        setCardList(cardList.filter(card => card !== cardList[removeElementIndex]));
    }
    function updates() {
        let newCard = calcRandom();
        if (newCard) {
            setPrevCard(newCard);
            setCurrent(newCard);
            match = true;
        } 
        if (!newCard) {
            match = false;
            //to catch duplicates
        }
    }

    function handleOnClick() {
        removeShownCard();
        updates();
        if(!match) {
            updates();
        }
    }

    function handleRestartClick() {
        setCardList(cardQuestions);
        setPrevCard(current);
    }


    const finalMessage = (cardList.length === 0) && <p className="p-final-message">{`Great Job! You got through ${deckLength} cards!`}</p>;
    const cardToggle = (cardList.length !== 0) && <ThreeByFive key={key} question={current.question} title={current.title} answer={current.answer}/>;

    return(
        <section className="flash-container">
            <div className="button-and-counter-container">
                <button className="random-button" onClick={handleOnClick}>Get A Card</button>
                <button className="random-button" onClick={handleRestartClick}>Go Again</button>
                <div className="counter">{cardList.length}</div>
            </div>
            {cardToggle}
            {finalMessage}
        </section>
    );
}