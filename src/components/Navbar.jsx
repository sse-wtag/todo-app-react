import PropTypes from "prop-types";
import SearchBox from "@components/ui/SearchBox";
import "@styles/navbar.scss";

function Navbar({ onSearching }) {
    return (
        <nav className="nav">
            <div className="nav__container">
                <span className="nav__title">Todos</span>
                <SearchBox onSearching={onSearching} />
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    onSearching: PropTypes.func.isRequired,
};

export default Navbar;
