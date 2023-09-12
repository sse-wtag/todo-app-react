import "@styles/text-input.css";
import PropTypes from "prop-types";

function TextInput({ type = "text", ...rest }) {
    return <input type={type} {...rest} />;
}

TextInput.propTypes = {
    type: PropTypes.string,
};

export default TextInput;
