import SearchBox from "@components/ui/SearchBox";
import "@styles/navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="#">
                    <span className="logo-text">Todos</span>
                </a>
                <SearchBox />
            </div>
        </nav>
    );
}

export default Navbar;
