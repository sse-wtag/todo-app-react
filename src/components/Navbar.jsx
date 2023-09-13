import SearchBox from "@components/ui/SearchBox";
import "@styles/navbar.scss";

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <a href="#">
                    <span>Todos</span>
                </a>
                <SearchBox />
            </div>
        </nav>
    );
}

export default Navbar;
