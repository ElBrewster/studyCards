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
    const [cardList, setCardList] = useState(cardQuestions);
    const [current, setCurrent] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });
    const [completedCards, setCompletedCards] = useState([]);
    
    const calcRandom = () => {
        let cardNum = Math.floor(Math.random() * cardList.length);
        let currentCard = cardList[cardNum];
        setCurrent(currentCard);
        // console.log(currentCard)
        // removeShownCard();
        // console.log(currentCard.question)
        // finalMessage();
    }
    
 
    const removeShownCard = () => {        
        let seenCard = cardList.findIndex(card => card === current);
        let shorterList = cardList.splice(seenCard, 1);
        setCompletedCards((prevState): Array => ([...prevState, shorterList]));
        setCardList((cardList) => [...cardList]);
    }

    const finalMessage = (cardList.length === 0) ? <p>{`Great Job! You got through ${completedCards.length} cards!`}</p> : <p>.</p>;

    const cardToggle = (cardList.length !== 0) ? <ThreeByFive question={current.question} title={current.title} answer={current.answer}/> : <p>.</p>;

    function handleOnClick() {
        calcRandom();
        removeShownCard();
        // finalMessage();
    }

    return(
        <section className="flash-container">
            <div className="button-and-counter-container">
                <button className="random-button" onClick={handleOnClick}>Get A Card</button>
                <div className="counter">{cardList.length}</div>
            </div>
            {cardToggle}
            {finalMessage}
            {/* <ThreeByFive question={current.question} title={current.title} answer={current.answer}/> */}
        </section>
    );
}