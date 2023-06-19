import { useState } from "react";
import NewCardForm from "../components/NewCardForm";
import { Outlet } from "react-router";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function Add(){
    const [showCard, setShowCard] = useState(false);
    const [newCard, addNewCard] = useState<Question>({
        question: "",
        title: "",
        answer: "",
    });

    return(
        <section>
            <NewCardForm addNewCard={addNewCard} setShowCard={setShowCard}/>
            <Outlet />
        </section>
    );
}