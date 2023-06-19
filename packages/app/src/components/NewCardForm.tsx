import { useState } from "react";

export default function NewCardForm() {
    const [addTitle, setAddTitle] = useState({title: ""});
    const [addQuestion, setAddQuestion] = useState({question: ""});
    const [addAnswer, setAddAnswer] = useState({answer: ""});

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({event})
    }

    function handleChange(event: React.FormEvent<HTMLFormElement>) {
        const { name, value } = event.target;
        console.log("change");
    }

    return(
        <form onSubmit={(onSubmit) => handleSubmit(onSubmit)}>
            <input type="text" placeholder="title" name="title" onChange={handleChange} value={addTitle.title}/>
            <input type="text" placeholder="question" name="question" onChange={handleChange} value={addQuestion.question}/>
            <textarea placeholder="answer" name="answer" onChange={handleChange} value={addAnswer.answer}/>
            <button>SUBMIT</button>
        </form>
    )
}