import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sanitizeAndTrim } from "@utils/sanitizeAndTrim";
import TextInput from "@components/ui/form/TextInput";
import { searchTask } from "@features/filter/filterSlice";
import { TASK_SEARCH_DELAY_IN_MS } from "@helpers/constants";
import useDebounce from "@hooks/useDebounce";

function SearchBox({ onSearching }) {
    const PLACEHOLDER = "Search...";
    const dispatch = useDispatch();
    const textToSearch = useSelector((state) => state.filter.search);
    const [text, setText] = useState(textToSearch);
    let typingTimer = null;

    const debouncedDispatch = useDebounce(() => {
        const purifiedText = sanitizeAndTrim(text);

        dispatch(searchTask(purifiedText));
    });

    const toggleSearching = () => {
        onSearching(true);

        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
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
        <form>
            <TextInput value={text} placeholder={PLACEHOLDER} onChange={handleInputChange} />
        </form>
    );
}

SearchBox.propTypes = {
    onSearching: PropTypes.func.isRequired,
};

export default SearchBox;
