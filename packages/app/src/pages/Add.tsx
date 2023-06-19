import { useState } from "react";
import NewCardForm from "../components/NewCardForm";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function Add(){
    const [newCard, addNewCard] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });

    return(
        <section>
            <NewCardForm addNewCard={addNewCard}/>
        </section>
    );
}