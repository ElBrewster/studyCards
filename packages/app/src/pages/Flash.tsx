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
    let showRandom;
    const originalNum = cardQuestions.length;
    const [cardList, setCardList] = useState(cardQuestions);
    const [current, setCurrent] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });

    
    const calcRandom = () => {
        console.log({originalNum})
        let cardNum = Math.floor(Math.random() * originalNum);
        //  (listNum + 1?)
        let currentCard = cardList[cardNum];
        setCurrent(current);
        console.log(current)
        removeShownCard();
        // showRandom();
        let showRandom = <ThreeByFive question={currentCard.question} title={currentCard.title} answer={currentCard.answer}/>
        return showRandom;
    }
    
 
    const removeShownCard = () => {
        let seenCard = cardList.findIndex(card => card === current);
        let shorterList = cardList.splice(seenCard, 1);
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
            <button onClick={handleOnClick}>Next!</button>
            {showRandom}
            {/* <ThreeByFive question={current.question} title={current.title} answer={current.answer}/> */}
        </section>
    );
}