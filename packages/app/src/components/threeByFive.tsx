import { useState } from "react";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function ThreeByFive({question, title, answer}: Question) {
    const [clicked, setClicked] = useState(false);

    function handleOnClick() {
        setClicked(!clicked);
    }

    let toggleDisplay = clicked ? (                
        <div className="card-back">
            <h2 className="my-card-h2">{title}</h2>
            <p className="my-card-content">{answer}</p>
        </div>
        ) : (
            <div className="card-front">
                <p className="p-question">{question}</p>
                <p>. . .</p>
            </div> 
        );

    return (
        <section className="three-by-five-card" onClick={handleOnClick}>
            {toggleDisplay}
        </section>
    );
}