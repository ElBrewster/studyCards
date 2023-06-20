import { useState } from "react";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function ThreeByFive({title, answer}: Question) {
    const [clicked, setClicked] = useState(false);

    function handleOnClick() {
        setClicked(!clicked);
        if (clicked === true) {
            return;
        } else if (clicked === false) {
            return;
        }
    }
    
    return (
        <section className="three-by-five-card" onClick={handleOnClick}>
            <h2 className="my-card-h2">{title}</h2>
            <p className="my-card-content">{answer}</p>
        </section>
    );
}