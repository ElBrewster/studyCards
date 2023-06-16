import { NavLink, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout() {
    let decks = ["/express", "/node", "/typescript", "/npm", "/react"];

    const navLinks = decks.map((deck) => {
        let id = nanoid();
        let removeSlash = deck.split("").slice(1).join("");
        let deckTitle = removeSlash.toUpperCase();
        return <NavLink to={deck} key={id} className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>{deckTitle}</NavLink>
    });

    return (
        <div className="layoutContainer">
            <div className="topContainer">
                <Nav />
                <Header />
                <nav className="nav-notecCardDecks">
                    {navLinks}
                </nav>
            </div>
            <Outlet />
        </div>
    );
}