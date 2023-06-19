import { useState } from "react";

type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

type AddFormViewProps = {
    addNewCard: Function,
    setShowCard: Function
}


export default function NewCardForm({addNewCard, setShowCard}: AddFormViewProps) {
    const [addTitle, setAddTitle] = useState({title: ""});
    const [addQuestion, setAddQuestion] = useState({question: ""});
    const [addAnswer, setAddAnswer] = useState({answer: ""});

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newNoteCard: Question = {
            title: addTitle.title,
            question: addQuestion.question,
            answer: addAnswer.answer
        }
        addNewCard({newNoteCard})
        console.log({newNoteCard})
        setAddTitle(prev => ({...prev, title: ""}));
        setAddQuestion(prev => ({...prev, question: ""}));
        setAddAnswer(prev => ({...prev, answer: ""}));
        setShowCard(true);
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
        <form id="form" onSubmit={(onSubmit) => handleSubmit(onSubmit)} className="myForm">
            <input type="text" required placeholder="title" name="title" onChange={handleInput} value={addTitle.title}/>
            <input type="text" required placeholder="question" name="question" onChange={handleInput} value={addQuestion.question}/>
            <textarea required placeholder="answer" name="answer" onChange={handleTextArea} value={addAnswer.answer}/>
            <button>SUBMIT</button>
        </form>
    )
}