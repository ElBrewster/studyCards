import { useState } from "react";
import NewCardForm from "../components/NewCardForm";
import ThreeByFive from "../components/ThreeByFive";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function Add(){
    const [showCard, setShowCard] = useState(false);
    const [newNoteCard, addNewCard] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });
    const toggleCardView = showCard ? <ThreeByFive question={newNoteCard.newNoteCard.question} title={newNoteCard.newNoteCard.title} answer={newNoteCard.newNoteCard.answer}/>: <p>.</p>;
    console.log(newNoteCard.newNoteCard)
    return(
        <section className="add-container">
            <NewCardForm addNewCard={addNewCard} setShowCard={setShowCard}/>
            <div className="card-demo">
            {toggleCardView}
            </div>
        </section>
    );
}