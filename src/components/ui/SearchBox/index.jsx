import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sanitizeAndTrim } from "@utils/sanitizeAndTrim";
import TextInput from "@components/ui/form/TextInput";
import { searchTask } from "@features/filter/filterSlice";
import useDebounce from "@hooks/useDebounce";

function SearchBox() {
    const PLACEHOLDER = "Search...";
    const dispatch = useDispatch();
    const textToSearch = useSelector((state) => state.filter.search);
    const [text, setText] = useState(textToSearch);

    const debouncedDispatch = useDebounce(() => {
        const purifiedText = sanitizeAndTrim(text);

        dispatch(searchTask(purifiedText));
    });

    const handleInputChange = (event) => {
        const textToSearch = event.target.value;

        setText(textToSearch);
        debouncedDispatch();
    };

    return (
        <form>
            <TextInput value={text} placeholder={PLACEHOLDER} onChange={handleInputChange} />
        </form>
    );
}

export default SearchBox;
