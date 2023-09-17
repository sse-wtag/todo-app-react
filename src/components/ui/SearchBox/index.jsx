import TextInput from "@components/ui/form/TextInput";

function SearchBox() {
    const PLACEHOLDER = "Search...";

    return (
        <form>
            <TextInput placeholder={PLACEHOLDER} />
        </form>
    );
}

export default SearchBox;
