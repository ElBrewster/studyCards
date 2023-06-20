import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Home(){
    let decks = ["/express", "/node", "/typescript", "/npm", "/react"];

    const navLinks = decks.map((deck) => {
        let id = nanoid();
        let removeSlash = deck.split("").slice(1).join("");
        let deckTitle = removeSlash.toUpperCase();
        return <NavLink to={deck} key={id} className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>{deckTitle}</NavLink>
    });

    return(
        <section className="home-container">
                <nav className="nav-notecCardDecks">
                    {navLinks}
                </nav>
        </section>
    );
}