

export default function NewCardForm() {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({event})
    }
    return(
        <form onSubmit={(event) => handleSubmit(event)}>

        </form>
    )
}