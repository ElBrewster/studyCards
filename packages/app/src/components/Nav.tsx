import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="nav-bar">
            <ul className="nav-browse"><Link to="/">Browse</Link></ul>
            {/* //browse cards and have a nav for decks? need a new browser link for a deck that exists */}
            <ul className="nav-add-cards"><Link to="/add">Make Flash Cards</Link></ul>
            {/* //add a new deck category or just add a card with a deck category option? I think keep it simple, only input a card and if you add a deck category we can filter for it on the backend*/}
            <ul className="nav-study"><Link to="/your-fit-notes">Flash Cards</Link></ul>
        </nav>
    );
}