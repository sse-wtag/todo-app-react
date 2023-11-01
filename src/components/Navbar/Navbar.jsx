import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@components/ui/form";
import { LeafIcon, MagnifierIcon } from "@components/ui/icons";
import { searchTask, setSearching } from "@features/filter/filterSlice";
import purify from "@helpers/text/purify";
import useDebounce from "@hooks/useDebounce";
import IconButton from "@components/ui/form/IconButton";
import "./Navbar.scss";

function Navbar() {
    const PLACEHOLDER = "Search...";
    const [isSearchboxShowing, setIsSearchboxShowing] = useState(false);
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

    const handleToggleSearchbox = () => {
        setIsSearchboxShowing((prevIsSearchboxShowing) => !prevIsSearchboxShowing);
    };

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo-wrapper">
                    <LeafIcon className="nav__logo-icon" />
                    <span className="nav__logo-text">Todos</span>
                </div>
                <div className="nav__search-box-wrapper">
                    {isSearchboxShowing && (
                        <Input
                            className="nav__search-box-input"
                            value={text}
                            placeholder={PLACEHOLDER}
                            onChange={handleInputChange}
                        />
                    )}
                    <IconButton icon={<MagnifierIcon />} onClick={handleToggleSearchbox} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
