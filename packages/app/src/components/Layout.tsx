import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout() {

    return (
        <div className="layoutContainer">
            <div className="topContainer">
                <Nav />
                <Header />
            </div>
            <main>
                <div>
                    {/* <div className="stripe"></div> */}
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}