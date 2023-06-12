type Question = {
    question: string,
    title: string,
    answer: string,
    more?: string
}

export default function ThreeByFive({title, answer}: Question) {
    return (
        <section className="three-by-five-card">
            <h2 className="my-card-h2">{title}</h2>
            <p className="my-card-content">{answer}</p>
        </section>
    );
}