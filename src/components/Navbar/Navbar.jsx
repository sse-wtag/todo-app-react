import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@components/ui/form";
import { searchTask, setSearching } from "@features/filter/filterSlice";
import purify from "@helpers/text/purify";
import useDebounce from "@hooks/useDebounce";
import "./Navbar.scss";

function Navbar() {
    const PLACEHOLDER = "Search...";
    const dispatch = useDispatch();
    const textToSearch = useSelector((state) => state.filter.search);
    const isSearching = useSelector((state) => state.filter.isSearching);
    const [text, setText] = useState(textToSearch);

    const debouncedDispatch = useDebounce(() => {
        const purifiedText = purify(text);

        dispatch(searchTask(purifiedText));
        dispatch(setSearching(false));
    });

    const handleInputChange = (event) => {
        const searchInput = event.target.value;
        setText(searchInput);

        if (!isSearching) {
            dispatch(setSearching(true));
        }

        debouncedDispatch();
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

export default Navbar;
