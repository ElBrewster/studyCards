import { useState } from "react";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function NewCardForm() {
    const [addTitle, setAddTitle] = useState({title: ""});
    const [addQuestion, setAddQuestion] = useState({question: ""});
    const [addAnswer, setAddAnswer] = useState({answer: ""});

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({event})
    }

    function handleInput(event: React.FormEvent<HTMLInputElement>) {
        const { name, value } = event.target as HTMLInputElement;
        console.log("change");
        setAddQuestion(prev => ({...prev, [name]: value}));
        setAddTitle(prev => ({...prev, [name]: value}));
    }

    function handleTextArea(event: React.FormEvent<HTMLTextAreaElement>){
        const { name, value } = event.target as HTMLTextAreaElement;
        setAddAnswer(prev => ({...prev, [name]: value}));
    }
    
    return(
        <form onSubmit={(onSubmit) => handleSubmit(onSubmit)}>
            <input type="text" placeholder="title" name="title" onChange={handleInput} value={addTitle.title}/>
            <input type="text" placeholder="question" name="question" onChange={handleInput} value={addQuestion.question}/>
            <textarea placeholder="answer" name="answer" onChange={handleTextArea} value={addAnswer.answer}/>
            <button>SUBMIT</button>
        </form>
    )
}