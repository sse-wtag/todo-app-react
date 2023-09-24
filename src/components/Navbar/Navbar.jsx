import { TextInput } from "@components/ui/form";
import "./Navbar.scss";

function Navbar() {
    const PLACEHOLDER = "Search...";

    return (
        <nav className="nav">
            <div className="nav__container">
                <span className="nav__title">Todos</span>
                <TextInput placeholder={PLACEHOLDER} />
            </div>
        </nav>
    );
}

export default Navbar;
