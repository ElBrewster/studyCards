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
    const originalNum = cardQuestions.length;
    const [cardList, setCardList] = useState(cardQuestions);
    const [current, setCurrent] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });

    
    const calcRandom = () => {
        console.log({originalNum})
        let cardNum = Math.floor(Math.random() * originalNum + 1);
        let currentCard = cardList[cardNum];
        setCurrent(currentCard);
        console.log(currentCard)
        removeShownCard();
        console.log(currentCard.question)
    }
    
 
    const removeShownCard = () => {
        let seenCard = cardList.findIndex(card => card === current);
        let shorterList = cardList.splice(seenCard, 1);
        console.log({cardList})
        console.log({shorterList})
        setCardList(shorterList);
    }

    const finalMessage = () => {
        if (cardList.length === 0 ) {
            return (
                <p>{`Great Job! You got through ${originalNum} cards!`}</p>
            )
        }
    }

    function handleOnClick() {
        calcRandom();
        finalMessage();
    }

    return(
        <section className="flash-container">
            <div className="button-and-counter-container">
                <button className="random-button" onClick={handleOnClick}>Get A Card</button>
                <p className="counter">{cardList.length}</p>
            </div>
            <ThreeByFive question={current.question} title={current.title} answer={current.answer}/>
        </section>
    );
}