import SearchBox from "@components/ui/SearchBox";
import "@styles/navbar.scss";

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <span className="nav__title">Todos</span>
                <SearchBox />
            </div>
        </nav>
    );
}

export default Navbar;
