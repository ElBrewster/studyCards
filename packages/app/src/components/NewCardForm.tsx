import { useState } from "react";

export default function NewCardForm() {
    const [addTitle, setAddTitle] = useState("");
    const [addQuestion, setAddQuestion] = useState("");
    const [addAnswer, setAddAnswer] = useState("");
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({event})
    }

    function handleChange() {
        console.log("change");
    }

    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder="title" name="title" onChange={handleChange} value={addTitle}/>
            <input type="text" placeholder="question" name="question" onChange={handleChange} value={addQuestion}/>
            <textarea placeholder="answer" name="answer" onChange={handleChange} value={addAnswer}/>
            <button>SUBMIT</button>
        </form>
    )
}