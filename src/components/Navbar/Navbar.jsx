import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Input } from "@components/ui/form";
import { searchTask } from "@features/filter/filterSlice";
import { TASK_SEARCH_DELAY_IN_MS } from "@helpers/constants";
import purify from "@helpers/text/purify";
import useDebounce from "@hooks/useDebounce";
import "./Navbar.scss";

function Navbar({ onSearching }) {
    const PLACEHOLDER = "Search...";
    const dispatch = useDispatch();
    const textToSearch = useSelector((state) => state.filter.search);
    const [text, setText] = useState(textToSearch);
    const typingTimerRef = useRef();

    const debouncedDispatch = useDebounce(() => {
        const purifiedText = purify(text);

        dispatch(searchTask(purifiedText));
    });

    const toggleSearching = () => {
        onSearching(true);

        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = setTimeout(() => {
            onSearching(false);
        }, TASK_SEARCH_DELAY_IN_MS);
    };

    const handleInputChange = (event) => {
        const textToSearch = event.target.value;

        setText(textToSearch);
        debouncedDispatch();
        toggleSearching();
    };

    return (
        <nav className="nav">
            <div className="nav__container">
                <span className="nav__title">Todos</span>
                <Input value={text} placeholder={PLACEHOLDER} onChange={handleInputChange} />
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    onSearching: PropTypes.func.isRequired,
};

export default Navbar;
