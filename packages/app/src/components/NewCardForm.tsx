

export default function NewCardForm() {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({event})
    }

    function handleChange() {
        console.log("change");
    }

    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder="title" name="title" onChange={handleChange}/>
            <input type="text" placeholder="question" name="question" onChange={handleChange}/>
            <textarea placeholder="answer" name="answer" onChange={handleChange}/>
        </form>
    )
}